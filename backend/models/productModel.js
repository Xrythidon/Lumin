import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: false },
    profileImg: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// // Static method to get avg of review ratings
// reviewSchema.statics.getAverageRating = async function (productId) {
//   console.log("Calculating avg review...");

//   const obj = await this.aggregate([
//     {
//       $match: { product: productId },
//     },
//     {
//       $group: {
//         _id: "$product",
//         avgRating: { $avg: "$rating" },
//       },
//     },
//   ]);

//   console.log(obj);
// };

// //
// reviewSchema.post("save", function () {
//   this.constructor.getAverageRating(this.product);
// });

// reviewSchema.pre("remove", function () {
//   this.constructor.getAverageRating(this.product);
// });

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    url: {
      type: String,
      required: true,
    },
    listingId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priceCurrency: {
      type: String,
      default: "CAD",
      required: true,
    },
    lowPrice: {
      type: Number,
      required: true,
    },
    highPrice: {
      type: Number,
      required: true,
    },
    sizes: {
      type: [String],
      required: false,
    },
    metals: {
      type: [String],
      required: false,
    },
    reviews: [reviewSchema],
    avgRating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
