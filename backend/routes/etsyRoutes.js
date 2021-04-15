import express from "express";
const router = express.Router();
import {scrapeAllProducts, testScrape, testCrawler, scrapeAllReviewsByProduct} from "../controllers/etsyScraperController.js"


// route -> api/scrape/
router.route("/").get(scrapeAllProducts);
router.route("/test").get(testScrape);
router.route("/crawler").get(testCrawler);
router.route("/reviews/:id").get(scrapeAllReviewsByProduct);

export default router;
