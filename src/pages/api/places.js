/* eslint-disable max-lines-per-function */
import { mw } from "@/api/mw"
import {
  createPlaceBar,
  createPlaceMusee,
  createPlaceParc,
  createPlaceRestaurant,
  readPlaces,
} from "@/DB/crud"

const handle = mw(async (req, res) => {
  if (req.method === "GET") {
    const places = await readPlaces()

    res.send(places)

    return
  }

  if (req.method === "POST") {
    const lieu = req.body.lieu.trim()

    if (lieu === "restaurant") {
      const nom = req.body.nom.trim()
      const adresse = req.body.adresse.trim()
      const ville = req.body.ville.trim()
      const codePostal = req.body.codePostal.trim()
      const pays = req.body.pays.trim()
      const typePlace = req.body.typePlace.trim()
      const star = req.body.star.trim()
      const price = req.body.price.trim()
      const newPlace = await createPlaceRestaurant({
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

      res.send(newPlace)

      return
    } else if (lieu === "bar") {
      const nom = req.body.nom.trim()
      const adresse = req.body.adresse.trim()
      const ville = req.body.ville.trim()
      const codePostal = req.body.codePostal.trim()
      const pays = req.body.pays.trim()
      const typePlace = req.body.typePlace.trim()
      const price = req.body.price.trim()
      const newPlace = await createPlaceBar({
        lieu,
        nom,
        adresse,
        ville,
        codePostal,
        pays,
        typePlace,
        price,
      })

      res.send(newPlace)

      return
    } else if (lieu === "musee") {
      const nom = req.body.nom.trim()
      const adresse = req.body.adresse.trim()
      const ville = req.body.ville.trim()
      const codePostal = req.body.codePostal.trim()
      const pays = req.body.pays.trim()
      const typePlace = req.body.typePlace.trim()
      const price = req.body.price.trim()
      const courantArt = req.body.courantArt.trim()
      const newPlace = await createPlaceMusee({
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

      res.send(newPlace)

      return
    } else if (lieu === "parc") {
      const nom = req.body.nom.trim()
      const adresse = req.body.adresse.trim()
      const ville = req.body.ville.trim()
      const codePostal = req.body.codePostal.trim()
      const pays = req.body.pays.trim()
      const typePlace = req.body.typePlace.trim()
      const price = req.body.price.trim()
      const access = req.body.access.trim()
      const newPlace = await createPlaceParc({
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

      res.send(newPlace)

      return
    }
  }

  res.status(404).send({ error: "Not found" })
})

export default handle
