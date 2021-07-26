import { Schema  } from "mongoose";

export const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    sku: { type: String, required: true },
    description: String,
    imageURL: String
});