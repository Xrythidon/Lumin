import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    rating: { type: String, required: true },
    description: { type: String, required: false },
    profileImg: { type: String, required: true },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    // product: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "Product",
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

// Static method to get avg of review ratings
reviewSchema.statics.getAverageRating = async function (productId) {
  console.log("Calculating avg review...");

  const obj = await this.aggregate([
    {
      $match: { product: productId },
    },
    {
      $group: {
        _id: "$product",
        averageRating: { $avg: "$rating" },
      },
    },
  ]);

  console.log(obj);
};

//
reviewSchema.post("save", function () {
  this.constructor.getAverageRating(this.product);
});

reviewSchema.pre("remove", function () {
  this.constructor.getAverageRating(this.product);
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
