/* eslint-disable max-lines */
import { PlaceModel } from "./models/placeModel.js"

export const createPlaceRestaurant = async ({
  lieu,
  nom,
  adresse,
  ville,
  codePostal,
  pays,
  typePlace,
  star,
  price,
}) => {
  const newPlace = new PlaceModel({
    lieu,
    nom,
    adresse,
    ville,
    codePostal,
    pays,
    typePlace,
    star,
    price,
  })

  await newPlace.save()

  return newPlace
}
export const createPlaceBar = async ({
  lieu,
  nom,
  adresse,
  ville,
  codePostal,
  pays,
  typePlace,
  price,
}) => {
  const newPlace = new PlaceModel({
    lieu,
    nom,
    adresse,
    ville,
    codePostal,
    pays,
    typePlace,
    price,
  })

  await newPlace.save()

  return newPlace
}
export const createPlaceParc = async ({
  lieu,
  nom,
  adresse,
  ville,
  codePostal,
  pays,
  typePlace,
  price,
  access,
}) => {
  const newPlace = new PlaceModel({
    lieu,
    nom,
    adresse,
    ville,
    codePostal,
    pays,
    typePlace,
    price,
    access,
  })

  await newPlace.save()

  return newPlace
}
export const createPlaceMusee = async ({
  lieu,
  nom,
  adresse,
  ville,
  codePostal,
  pays,
  typePlace,
  price,
  courantArt,
}) => {
  const newPlace = new PlaceModel({
    lieu,
    nom,
    adresse,
    ville,
    codePostal,
    pays,
    typePlace,
    price,
    courantArt,
  })

  await newPlace.save()

  return newPlace
}
export const readPlaces = async () => await PlaceModel.find()
export const readPlace = async (placeId) => await PlaceModel.findById(placeId)
export const updatePlaceRestaurant = async (
  placeId,
  {
    lieu = "restaurant",
    nom = "",
    adresse = "",
    ville = "",
    codePostal = "",
    pays = "",
    typePlace = "",
    star = "",
    price = "",
  },
) => {
  const input = {
    lieu: lieu.trim() || undefined,
    nom: nom.trim() || undefined,
    adresse: adresse.trim() || undefined,
    ville: ville.trim() || undefined,
    codePostal: codePostal.trim() || undefined,
    pays: pays.trim() || undefined,
    typePlace: typePlace.trim() || undefined,
    star: star.trim() || undefined,
    price: price.trim() || undefined,
  }
  const updatedPlaceRestaurant = await PlaceModel.findByIdAndUpdate(
    placeId,
    input,
    {
      returnDocument: "after",
    },
  )

  return updatedPlaceRestaurant
}
export const updatePlaceMusee = async (
  placeId,
  {
    lieu = "musee",
    nom = "",
    adresse = "",
    ville = "",
    codePostal = "",
    pays = "",
    typePlace = "",
    price = "",
    courantArt = "",
  },
) => {
  const input = {
    lieu: lieu.trim() || undefined,
    nom: nom.trim() || undefined,
    adresse: adresse.trim() || undefined,
    ville: ville.trim() || undefined,
    codePostal: codePostal.trim() || undefined,
    pays: pays.trim() || undefined,
    typePlace: typePlace.trim() || undefined,
    price: price.trim() || undefined,
    courantArt: courantArt.trim() || undefined,
  }
  const updatedPlaceMusee = await PlaceModel.findByIdAndUpdate(placeId, input, {
    returnDocument: "after",
  })

  return updatedPlaceMusee
}
export const updatePlaceBar = async (
  placeId,
  {
    lieu = "bar",
    nom = "",
    adresse = "",
    ville = "",
    codePostal = "",
    pays = "",
    typePlace = "",
    price = "",
  },
) => {
  const input = {
    lieu: lieu.trim() || undefined,
    nom: nom.trim() || undefined,
    adresse: adresse.trim() || undefined,
    ville: ville.trim() || undefined,
    codePostal: codePostal.trim() || undefined,
    pays: pays.trim() || undefined,
    typePlace: typePlace.trim() || undefined,
    price: price.trim() || undefined,
  }
  const updatedPlaceBar = await PlaceModel.findByIdAndUpdate(placeId, input, {
    returnDocument: "after",
  })

  return updatedPlaceBar
}
export const updatePlaceParc = async (
  placeId,
  {
    lieu = "parc",
    nom = "",
    adresse = "",
    ville = "",
    codePostal = "",
    pays = "",
    typePlace = "",
    price = "",
    access = "",
  },
) => {
  const input = {
    lieu: lieu.trim() || undefined,
    nom: nom.trim() || undefined,
    adresse: adresse.trim() || undefined,
    ville: ville.trim() || undefined,
    codePostal: codePostal.trim() || undefined,
    pays: pays.trim() || undefined,
    typePlace: typePlace.trim() || undefined,
    price: price.trim() || undefined,
    access: access.trim() || undefined,
  }
  const updatedPlaceParc = await PlaceModel.findByIdAndUpdate(placeId, input, {
    returnDocument: "after",
  })

  return updatedPlaceParc
}
export const deletePlace = async (placeId) => {
  const place = await PlaceModel.findOneAndDelete({ _id: placeId })

  if (!place) {
    return null
  }

  return place
}
