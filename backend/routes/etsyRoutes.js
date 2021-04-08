import express from "express";
const router = express.Router();
import {scrapeAllProducts, testScrape, testCrawler} from "../controllers/etsyScraperController.js"


// route -> api/scrape/
router.route("/").get(scrapeAllProducts);
router.route("/test").get(testScrape);
router.route("/crawler").get(testCrawler);

export default router;
