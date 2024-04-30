import * as yup from "yup"

export const lieuValidator = yup.string().min(3).required().label("lieu")
export const nomValidator = yup.string().min(3).required().label("nom")
export const adresseValidator = yup.string().min(3).required().label("adresse")
export const villeValidator = yup.string().min(3).required().label("ville")
export const codePostalValidator = yup
  .string()
  .min(3)
  .required()
  .label("codePostal")
export const paysValidator = yup.string().min(3).required().label("pays")
export const typeRestaurantValidator = yup
  .string()
  .required()
  .oneOf(["chinoise", "italienne", "francaise"])
  .label("typePlace")
export const typeBarValidator = yup
  .string()
  .required()
  .oneOf(["vin", "coktail", "bière"])
  .label("typePlace")
export const typeMuseeValidator = yup
  .string()
  .required()
  .oneOf(["sculture", "architecture", "peinture"])
  .label("typePlace")
export const typeParcValidator = yup
  .string()
  .required()
  .oneOf(["floral", "forestier", "zoologique"])
  .label("typePlace")
export const starValidator = yup
  .string()
  .required()
  .oneOf(["1", "2", "3"])
  .label("star")
export const priceValidator = yup
  .string()
  .required()
  .oneOf(["1", "2", "3", "4", "5"])
  .label("price")
export const priceAndFreeValidator = yup
  .string()
  .required()
  .oneOf(["1", "2", "3", "4", "5", "gratuit"])
  .label("price")
export const accessValidator = yup
  .string()
  .required()
  .oneOf(["Privé", "Public"])
  .label("access")
export const courantArtValidator = yup
  .string()
  .required()
  .oneOf([
    "contemporain",
    "moderne",
    "futuriste",
    "antique",
    "féodal",
    "renaissance",
  ])
  .label("courantArt")
