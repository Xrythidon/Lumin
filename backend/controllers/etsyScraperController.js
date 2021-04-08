import asyncHandler from "express-async-handler";
import axios from "axios";
import got from "got";
import Crawler from "crawler";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

const etsyUrl = "https://www.etsy.com/ca/shop/shopluminjewelry";

// @desc    Scrape all etsy products
// @route   get /api/scrape
// @access  Public
const scrapeAllProducts = asyncHandler(async (req, res) => {
  const { data } = await axios.get(etsyUrl);

  const products = [];

  const dom = new JSDOM(data.toString()).window.document;
  const parentContainerDiv = dom.querySelector(".featured-listings");
  const elements = parentContainerDiv.querySelectorAll("a");





  elements.forEach((element, index) => {
    const productUrl = element.getAttribute("href");
    axios
      .get(productUrl)
      .then((productData) => {
        const product = {};
        const productDom = new JSDOM(productData.toString()).window.document;
        const title = productDom.querySelector("h1[data-buy-box-listing-title]").innerHTML;
        console.log(title);
        product.title = title;
        products.push(product);
      })
      .catch((error) => console.error(error));
  });

  res.json(products);
});

const crawlHelper = (fn, ) => {
  const c = new Crawler({
    jQuery: jsdom,
    rateLimit: 5000,
    maxConnections: 1,
    callback: function (error, res, done) {
      if (error) {
        console.log(error);
      } else {
        const dom = new JSDOM(res.body.toString()).window.document;
        console.log(dom.querySelector("h1").innerHTML);
      }
      done();
    },
  });

  c.queue(etsyUrl);
  c.queue(etsyUrl);
}


// @desc    Scrape all etsy products
// @route   get /api/scrape/test
// @access  Public
const testScrape = (req, res) => {
  got(etsyUrl).then((response) => {
    const dom = new JSDOM(response.body.toString()).window.document;
    const parentContainerDiv = dom.querySelector(".featured-listings");
    const elements = parentContainerDiv.querySelectorAll("a");
    const products = [];

      const c = new Crawler({
        jQuery: jsdom,
        rateLimit: 2000,
        maxConnections: 1,
        callback: function (error, res, done) {
          if (error) {
            console.log(error);
          } else {
            const pageDom = new JSDOM(res.body.toString()).window.document;
            let product = {};
            product.title = pageDom.querySelector("h1[data-buy-box-listing-title]").textContent.trim();
            const picture = pageDom.querySelector("ul[data-carousel-pane-list]");
            const pictureArray = picture.querySelectorAll("img");
            const productImageArray = [];
            pictureArray.forEach((pic) => {
              pic.getAttribute("src")
                ? productImageArray.push(pic.getAttribute("src"))
                : productImageArray.push(pic.getAttribute("data-src"));
            });
            product.images = productImageArray;
            console.log(product);
            products.push(product);
          }
          done();
        },
      });

      

      elements.forEach((element) => {
        const productUrl = element.getAttribute("href");
        c.queue(productUrl)
  
    });
    c.on('drain',function(){
      // For example, release a connection to database.
      res.json(products);
  });

  });
};

// @desc    Scrape all etsy products
// @route   get /api/scrape/crawler
// @access  Public
const testCrawler = (req, res) => {
  const c = new Crawler({
    jQuery: jsdom,
    rateLimit: 5000,
    maxConnections: 1,
    callback: function (error, res, done) {
      if (error) {
        console.log(error);
      } else {
        const dom = new JSDOM(res.body.toString()).window.document;
        console.log(dom.querySelector("h1").innerHTML);
      }
      done();
    },
  });

  c.queue(etsyUrl);
  c.queue(etsyUrl);

  res.json("done with crawling")
};

export { scrapeAllProducts, testScrape, testCrawler };

