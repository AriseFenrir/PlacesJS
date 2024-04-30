/* eslint-disable max-lines-per-function */
import { mw } from "@/api/mw"
import {
  deletePlace,
  readPlace,
  updatePlaceBar,
  updatePlaceMusee,
  updatePlaceParc,
  updatePlaceRestaurant,
} from "@/DB/crud"

const handle = mw(async (req, res) => {
  const { placeId } = req.query

  if (req.method === "GET") {
    const place = await readPlace(placeId)

    if (!place) {
      res.status(404).send({ error: "Not found" })

      return
    }

    res.send(place)

    return
  }

  if (req.method === "PATCH") {
    const lieu = req.body.lieu?.trim()

    if (lieu === "restaurant") {
      const nom = req.body.nom?.trim()
      const adresse = req.body.adresse?.trim()
      const ville = req.body.ville?.trim()
      const codePostal = req.body.codePostal?.trim()
      const pays = req.body.pays?.trim()
      const typePlace = req.body.typePlace?.trim()
      const star = req.body.star?.trim()
      const price = req.body.price?.trim()
      const updatedPlace = await updatePlaceRestaurant(placeId, {
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

      if (!updatedPlace) {
        res.status(404).send({ error: "Not found" })

        return
      }

      res.send(updatedPlace)

      return
    } else if (lieu === "bar") {
      const nom = req.body.nom?.trim()
      const adresse = req.body.adresse?.trim()
      const ville = req.body.ville?.trim()
      const codePostal = req.body.codePostal?.trim()
      const pays = req.body.pays?.trim()
      const typePlace = req.body.typePlace?.trim()
      const price = req.body.price?.trim()
      const updatedPlace = await updatePlaceBar(placeId, {
        lieu,
        nom,
        adresse,
        ville,
        codePostal,
        pays,
        typePlace,
        price,
      })

      if (!updatedPlace) {
        res.status(404).send({ error: "Not found" })

        return
      }

      res.send(updatedPlace)

      return
    } else if (lieu === "musee") {
      const nom = req.body.nom?.trim()
      const adresse = req.body.adresse?.trim()
      const ville = req.body.ville?.trim()
      const codePostal = req.body.codePostal?.trim()
      const pays = req.body.pays?.trim()
      const typePlace = req.body.typePlace?.trim()
      const price = req.body.price?.trim()
      const courantArt = req.body.courantArt?.trim()
      const updatedPlace = await updatePlaceMusee(placeId, {
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

      if (!updatedPlace) {
        res.status(404).send({ error: "Not found" })

        return
      }

      res.send(updatedPlace)

      return
    } else if (lieu === "parc") {
      const nom = req.body.nom?.trim()
      const adresse = req.body.adresse?.trim()
      const ville = req.body.ville?.trim()
      const codePostal = req.body.codePostal?.trim()
      const pays = req.body.pays?.trim()
      const typePlace = req.body.typePlace?.trim()
      const price = req.body.price?.trim()
      const access = req.body.access?.trim()
      const updatedPlace = await updatePlaceParc(placeId, {
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

      if (!updatedPlace) {
        res.status(404).send({ error: "Not found" })

        return
      }

      res.send(updatedPlace)

      return
    }
  }

  if (req.method === "DELETE") {
    const placeToBeDelete = await deletePlace(placeId)

    if (!placeToBeDelete) {
      res.status(404).send({ error: "Not found" })

      return
    }

    res.send(placeToBeDelete)

    return
  }

  res.status(404).send({ error: "Not found" })
})

export default handle
