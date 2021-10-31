import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
  originalURL: { type: String, required: true },
  hash: { type: String, required: true },
  shortURL: { type: String, required: true },
});

export const URLModel = mongoose.model("URLModel", URLSchema);
