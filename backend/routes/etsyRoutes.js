import express from "express";
const router = express.Router();
import {scrapeAllProducts, testScrape, testCrawler, reviewParserById, getAllReviewsByListingId} from "../controllers/etsyScraperController.js"


// route -> api/scrape/
router.route("/").get(scrapeAllProducts);
router.route("/test").get(testScrape);
router.route("/crawler").get(testCrawler);
router.route("/parseReviews/:id").get(reviewParserById);
router.route("/reviews/:id").get(getAllReviewsByListingId);

export default router;
