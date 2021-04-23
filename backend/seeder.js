import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
//import products from "./data/products.js";
import products from "./data/etsyProducts.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      let totalReviewsAdded = 0;

      product.reviews.forEach((review) => {
        totalReviewsAdded += Number(review.rating);
      });

      return {
        ...product,
        user: adminUser,
        countInStock: Math.floor(Math.random()*10 + 5),
        reviews: product.reviews.map((review) => ({
          ...review,
          rating: Number(review.rating),
          user: adminUser,
        })),
        numReviews: Number(product.reviews.length),
        avgRating: Number(totalReviewsAdded / Number(product.reviews.length)),
      };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
