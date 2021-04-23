import asyncHandler from "express-async-handler";
import axios from "axios";
import qs from "qs";
import got from "got";
import Crawler from "crawler";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

const etsyUrl = "https://www.etsy.com/shop/shopluminjewelry";

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

const crawlHelper = (fn) => {
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
};

// @desc    Scrape all etsy products
// @route   get /api/scrape/test
// @access  Public
const testScrape = (req, mainRes) => {
  axios.get("http://localhost:5000/api/scrape/getAllEtsyProducts").then((response) => {
    let elements = response.data;
    // elements = [elements[0], elements[1]];

    const products = [];
    //(?:"category": )"(.*?)"
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
          product.url = res.options.uri;
          product.listingId = res.options.listingId;
          product.title = pageDom.querySelector("h1[data-buy-box-listing-title]").textContent.trim();
          product.description = pageDom
            .querySelector("p[data-product-details-description-text-content]")
            .textContent.trim()
            .split(/\s*\-\s*/g)[0];
          const picture = pageDom.querySelector("ul[data-carousel-pane-list]");
          product.category = pageDom
            .querySelector("script[type='application/ld+json']")
            .textContent.trim()
            .split(/(?:"category": )"(.*?)"/g)[1];
          product.priceCurrency = pageDom
            .querySelector("script[type='application/ld+json']")
            .textContent.trim()
            .split(/(?:"priceCurrency": )"(.*?)"/g)[1];
          product.lowPrice = Number(
            pageDom
              .querySelector("script[type='application/ld+json']")
              .textContent.trim()
              .split(/(?:"lowPrice": )"(.*?)"/g)[1]
          );
          product.highPrice = Number(
            pageDom
              .querySelector("script[type='application/ld+json']")
              .textContent.trim()
              .split(/(?:"highPrice": )"(.*?)"/g)[1]
          );
          //Sizes
          let sizeArray = [];
          pageDom.querySelectorAll("[data-buy-box-select='0'] option").forEach((element) => {
            sizeArray.push(element.textContent.trim());
          });
          product.sizes = pageDom.querySelectorAll("[data-buy-box-select='0'] option") ? sizeArray : [];
          //Metals
          let metalArray = [];
          pageDom.querySelectorAll("[data-buy-box-select='1'] option").forEach((element) => {
            metalArray.push(element.textContent.trim());
          });
          product.metals = pageDom.querySelectorAll("[data-buy-box-select='1'] option") ? metalArray : [];

          const pictureArray = picture.querySelectorAll("img");
          const productImageArray = [];
          pictureArray.forEach((pic) => {
            pic.getAttribute("src")
              ? productImageArray.push(pic.getAttribute("src"))
              : productImageArray.push(pic.getAttribute("data-src"));
          });
          product.images = productImageArray;

          // Nested Request
          axios
            .get(`http://localhost:5000/api/scrape/reviews/${res.options.listingId}`)
            .then((response) => {
              product.reviews = response.data;
              console.log(product);
              console.log(res.options.index);
              products.push(product);
              if (res.options.index === elements.length - 1) {
                // last index then res.json

                mainRes.json(products);
                console.log("last index");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        done();
      },
    });

    elements.forEach((element, index) => {
      // const index = 0;
      const productUrl = element;
      c.queue({
        uri: productUrl,
        listingId: productUrl.match(/\/[0-9]*?\//gm)[1].split("/")[1],
        index: index,
      });
    });
  });
};

// @desc    Scrape all etsy products Urls
// @route   get /api/scrape/getAllEtsyProducts
// @access  Public
const getAllEtsyProducts = (req, res) => {
  const links = [];

  const c = new Crawler({
    jQuery: jsdom,
    rateLimit: 3000,
    maxConnections: 1,
    callback: function (error, res, done) {
      if (error) {
        console.log(error);
      } else {
        const dom = new JSDOM(res.body.toString()).window.document;
        const pageDom = dom.querySelector("div[data-listings-container]");
        const linkURLs = pageDom.querySelectorAll(".listing-link");

        linkURLs.forEach((link) => {
          links.push(link.getAttribute("href"));
        });
      }
      done();
    },
  });

  for (let i = 1; i <= 1; i++) {
    c.queue(`${etsyUrl}?page=${i}`);
  }

  c.on("drain", function () {
    res.json(links);
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

  res.json("done with crawling");
};

// @desc    Scrape all reviews by etsy product
// @route   get /api/scrape/parseReviews/:id
// @access  Public
const reviewParserById = asyncHandler(async (req, res) => {
  const listing_id = req.params.id;
  const page = Number(req.query.page);

  const Relevancy = "Relevancy";
  const Recency = "Recency";
  const data = qs.stringify({
    "specs[reviews][0]": " Listzilla_ApiSpecs_Reviews",
    "specs[reviews][1][listing_id]": ` ${listing_id}`,
    "specs[reviews][1][shop_id]": " 11050902",
    "specs[reviews][1][render_complete]": " true",
    "specs[reviews][1][active_tab]": " same_listing_reviews",
    "specs[reviews][1][listing_price]": " 60",
    "specs[reviews][1][should_lazy_load_images]": " false",
    "specs[reviews][1][is_sold_out_listing]": " false",
    "specs[reviews][1][should_use_pagination]": " true",
    "specs[reviews][1][page]": ` ${page}`,
    "specs[reviews][1][should_show_variations]": " true",
    "specs[reviews][1][selected_keyword_filter]": " all",
    "specs[reviews][1][is_external_landing]": " false",
    "specs[reviews][1][is_reviews_untabbed_cached]": " false",
    "specs[reviews][1][search_query]": " ",
    "specs[reviews][1][sort_option]": ` ${Recency}`,
  });
  const config = {
    method: "post",
    url: "https://www.etsy.com/api/v3/ajax/bespoke/member/neu/specs/reviews",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      cookie:
        " user_prefs=2w1wISmoqyPnSpQxc3YX21RCvy1jZACChFBxGxgdreTs6KKkk1eak6OjlJqn6-6kpAMUgooYQShcRCwDAA..; fve=1616189244.0; ua=531227642bc86f3b5fd7103a0c0b4fd6; uaid=9TpVVhgNGnO6yjaf60XUf4OGgW1jZACChFBxGzCdKudZrVSamJmiZKXk5BNRkJ2YEVDhUxnhlhQUkG1qEeWd4u-XElBVoFTLAAA.; G_ENABLED_IDPS=google; pla_spr=0|0; last_browse_page=https%3A%2F%2Fwww.etsy.com%2Fca%2Fshop%2Fshopluminjewelry; perf=wf:1; exp_hangover=tL6Io0lVT2H4CTLJXuECLUQ2VUVjZACChFBxGzCdZ8derVSemhSfWFSSmZaZnJmYE5-TWJKal1wZX2gSb2RgaKlkpZSZl5qTmZ6ZlJOqVMsAAA..; exp_hangover=CAFxmo4H5xJtkVfaO2LGJmi54H1jZACChFBxGzBdsbmzWqk8NSk-sagkMy0zOTMxJz4nsSQ1L7kyvtAk3sjA0FLJSikzLzUnMz0zKSdVqZYBAA..; fve=1617821682.0; uaid=M8kLR0c2iIdScbXnKvksZfPTe0BjZACChFBxGzBdsbmzWqk0MTNFyUrJySeiIDsxI6DCpzLCLSkoINvUIso7xd8vJaCqQKmWAQA.; user_prefs=s4lVCA50xVmKF6R_xFETlqEGgwNjZACChNz_n2B0tJKzo4uSTl5pTo6OUmqerruTkg5QCCpiBKFwEbEMAA..",
      origin: " https://www.etsy.com",
      referer:
        " https://www.etsy.com/ca/listing/675362615/dainty-necklace-set-14k-gold-filled?ref=shop_home_feat_4&frs=1",
      "sec-ch-ua": ' "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
      "sec-ch-ua-mobile": " ?0",
      "sec-fetch-dest": " empty",
      "sec-fetch-mode": " cors",
      "sec-fetch-site": " same-origin",
      "user-agent":
        " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
      "x-csrf-token":
        " 3:1617837567:6GZh6KPxBCpY62n3FCS9mg5qxB9t:f3425f085c5a9b251e8a81ff0f023d8a015877e199b723f04097db9afcc7c2b9",
      "x-detected-locale": " CAD|en-GB|CA",
      "x-page-guid": " eb6d255cdf3.0917c6e284f266ece861.00",
      "x-requested-with": " XMLHttpRequest",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      // res.json(response.data.output.reviews);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(response.data.output.reviews);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// @desc    Get all etsy reviews by listingId sequentially
// @route   get /api/scrape/reviews
// @access  Public
const getAllReviewsByListingId = (req, response) => {
  const reviews = [];
  const listing_id = req.params.id;

  const c = new Crawler({
    jQuery: jsdom,
    rateLimit: 1000,
    maxConnections: 1,
    callback: function (error, res, done) {
      if (error) {
        console.log(error);
      } else {
        const dom = new JSDOM(res.body.toString()).window.document;
        let isProductReviews = dom.querySelector("#same-listing-reviews-tab > span") ? Number(dom.querySelector("#same-listing-reviews-tab > span").textContent.trim()) : false;
        console.log(isProductReviews);
        isProductReviews = isProductReviews < 3 ? 0 : isProductReviews;
        if (res.body.toString() && isProductReviews) {
          console.log("PAGE: ", res.request.uri.query);
          const elements = dom.querySelectorAll("div[data-reviews] div.wt-grid__item-xs-12");
          elements.forEach((element) => {
            let review = {};
            review.name = element.querySelector("a[data-review-username]")
              ? element.querySelector("a[data-review-username]").textContent.trim()
              : "";
            review.date = element.querySelector("p").textContent.trim().match(/(?:[0-9][0-9] [A-z]{3}, [0-9]{4})/gm)[0]; // prettier-ignore
            review.rating = element.querySelector("input[name]").getAttribute("value");
            review.description = element.querySelector(".wt-text-body-01 p")
              ? element.querySelector(".wt-text-body-01 p").textContent.trim()
              : "";
            review.profileImg = element.querySelector("img").getAttribute("src");
           console.log(review);
            reviews.push(review);
          });
        } else {
          console.log("INSIDE ELSE");
          response.json(reviews);
          return;
        }
      }
      done();
    },
  });

  const MAX_PAGE = 5;
  for (let page = 1; page < MAX_PAGE; page++) {
    const reviewUrl = `http://localhost:5000/api/scrape/parseReviews/${listing_id}?page=${page}`;
    c.queue({
      uri: reviewUrl,
    });;
  }
  // RINGER SIZER ETSY BUG, REVIEWS ARE DUPLICATED AFTER THE TOTAL AMOUNT OF REVIEWS EXCEEDED

  c.on("drain", function () {
     response.json(reviews);
  });
};

export { scrapeAllProducts, testScrape, testCrawler, reviewParserById, getAllReviewsByListingId, getAllEtsyProducts };
