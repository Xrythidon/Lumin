import express from "express";
const router = express.Router();
import {scrapeAllProducts, testScrape, testCrawler, scrapeAllReviewsByProduct, getAllReviewsById} from "../controllers/etsyScraperController.js"


// route -> api/scrape/
router.route("/").get(scrapeAllProducts);
router.route("/test").get(testScrape);
router.route("/crawler").get(testCrawler);
router.route("/reviews/:id").get(scrapeAllReviewsByProduct);
router.route("/reviews/").get(getAllReviewsById);

export default router;
