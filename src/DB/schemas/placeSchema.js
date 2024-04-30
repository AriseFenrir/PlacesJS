import { Schema } from "mongoose"

export const placeSchema = new Schema({
  lieu: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  ville: {
    type: String,
    required: true,
  },
  codePostal: {
    type: String,
    required: true,
  },
  pays: {
    type: String,
    required: true,
  },
  typePlace: {
    type: String,
    required: true,
  },
  star: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: true,
  },
  courantArt: {
    type: String,
    required: false,
  },
  access: {
    type: String,
    required: false,
  },
})
