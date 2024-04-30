/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
/* eslint-disable require-await */
import { Button } from "@/components/Button"
import axios from "axios"
import { useState } from "react"

export const getServerSideProps = async () => {
  const { data: places } = await axios.get("http://localhost:3000/api/places")

  return {
    props: { initialPlaces: Object.values(places) },
  }
}
const PlacesPage = ({ initialPlaces }) => {
  const [places, setPlaces] = useState(initialPlaces)
  const [showRestaurantOptions, setShowRestaurantOptions] = useState(false)
  const [showMuseeOptions, setShowMuseeOptions] = useState(false)
  const [showBarOptions, setShowBarOptions] = useState(false)
  const [showParcOptions, setShowParcOptions] = useState(false)
  const [filter, setFilter] = useState(null)
  const [typeFilter, setTypeFilter] = useState(null)
  const undofilter = () => async () => {
    setFilter(null)
    setShowRestaurantOptions(false)
    setShowMuseeOptions(false)
    setShowBarOptions(false)
    setShowParcOptions(false)
    setTypeFilter(null)
  }
  const filterlieu = (filterLieu) => async () => {
    setFilter(filterLieu)

    if (filterLieu === "restaurant") {
      setShowRestaurantOptions(true)
    } else {
      setShowRestaurantOptions(false)
    }

    if (filterLieu === "musee") {
      setShowMuseeOptions(true)
    } else {
      setShowMuseeOptions(false)
    }

    if (filterLieu === "bar") {
      setShowBarOptions(true)
    } else {
      setShowBarOptions(false)
    }

    if (filterLieu === "parc") {
      setShowParcOptions(true)
    } else {
      setShowParcOptions(false)
    }
  }
  const filterType = (type) => async () => {
    setTypeFilter(type)
  }
  const handleDelete = (placeId) => async () => {
    const deletedPlace = places.find(({ _id }) => _id === placeId)
    const newPlaces = places.filter(({ _id }) => _id !== placeId)
    setPlaces(newPlaces)

    try {
      await axios.delete(`http://localhost:3000/api/places/${placeId}`)
    } catch (err) {
      setPlaces([...newPlaces, deletedPlace])
    }
  }
  const handleEdit = (placeId, site) => async () => {
    if (site === "restaurant") {
      document.location.href = `/places/${placeId}/viewRestaurant`
    } else if (site === "bar") {
      document.location.href = `/places/${placeId}/viewBar`
    } else if (site === "musee") {
      document.location.href = `/places/${placeId}/viewMusee`
    } else if (site === "parc") {
      document.location.href = `/places/${placeId}/viewParc`
    }
  }

  let filteredPlaces = [...places]

  if (filter) {
    filteredPlaces = filteredPlaces.filter(({ lieu }) => lieu === filter)
  }

  if (typeFilter) {
    filteredPlaces = filteredPlaces.filter(
      ({ typePlace }) => typePlace === typeFilter,
    )
  }

  return (
    <ul className="flex flex-row gap-10">
      <div className="flex flex-col gap-4">
        <li>
          <Button
            onClick={undofilter()}
            className="group flex items-center gap-2"
            size="md"
          >
            {" "}
            enlever filtre{" "}
          </Button>
        </li>
        <li>
          <p>Filter</p>
        </li>
        <li>
          <Button
            onClick={filterlieu("restaurant")}
            className="group flex items-center gap-2"
            size="md"
          >
            {" "}
            Restaurant{" "}
          </Button>
        </li>
        {showRestaurantOptions && (
          <div className="flex flex-col gap-4">
            <li>
              <Button
                onClick={filterType("chinoise")}
                className="group flex items-center gap-2"
                size="md"
              >
                Cuisine chinoise
              </Button>
            </li>
            <li>
              <Button
                onClick={filterType("italienne")}
                className="group flex items-center gap-2"
                size="md"
              >
                Cuisine italienne
              </Button>
            </li>
            <li>
              <Button
                onClick={filterType("francaise")}
                className="group flex items-center gap-2"
                size="md"
              >
                Cuisine française
              </Button>
            </li>
          </div>
        )}
        <li>
          <Button
            onClick={filterlieu("bar")}
            className="group flex items-center gap-2"
            size="md"
          >
            {" "}
            Bar{" "}
          </Button>
        </li>
        {showBarOptions && (
          <div className="flex flex-col gap-4">
            <li>
              <Button
                onClick={filterType("vin")}
                className="group flex items-center gap-2"
                size="md"
              >
                bar à vin
              </Button>
            </li>
            <li>
              <Button
                onClick={filterType("coktail")}
                className="group flex items-center gap-2"
                size="md"
              >
                bar à coktail
              </Button>
            </li>
            <li>
              <Button
                onClick={filterType("bière")}
                className="group flex items-center gap-2"
                size="md"
              >
                bar à bière
              </Button>
            </li>
          </div>
        )}
        <li>
          <Button
            onClick={filterlieu("parc")}
            className="group flex items-center gap-2"
            size="md"
          >
            {" "}
            Parc{" "}
          </Button>
        </li>
        {showParcOptions && (
          <div className="flex flex-col gap-4">
            <li>
              <Button
                onClick={filterType("floral")}
                className="group flex items-center gap-2"
                size="md"
              >
                Parc floral
              </Button>
            </li>
            <li>
              <Button
                onClick={filterType("forestier")}
                className="group flex items-center gap-2"
                size="md"
              >
                Parc forestier
              </Button>
            </li>
            <li>
              <Button
                onClick={filterType("zoologique")}
                className="group flex items-center gap-2"
                size="md"
              >
                Parc Zoologique
              </Button>
            </li>
          </div>
        )}
        <li>
          <Button
            onClick={filterlieu("musee")}
            className="group flex items-center gap-2"
            size="md"
          >
            {" "}
            Musée{" "}
          </Button>
        </li>
        {showMuseeOptions && (
          <div className="flex flex-col gap-4">
            <li>
              <Button
                onClick={filterType("peinture")}
                className="group flex items-center gap-2"
                size="md"
              >
                peinture
              </Button>
            </li>
            <li>
              <Button
                onClick={filterType("sculture")}
                className="group flex items-center gap-2"
                size="md"
              >
                Sculture
              </Button>
            </li>
            <li>
              <Button
                onClick={filterType("architecture")}
                className="group flex items-center gap-2"
                size="md"
              >
                Architecture
              </Button>
            </li>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {filteredPlaces.map(({ _id, lieu, nom, adresse, ville, pays }) => (
          <li
            key={_id}
            className="group flex items-center gap-2 bg-slate-200 rounded-lg m-4 "
          >
            <ul>
              <li>
                Adresse : {adresse} {ville}
              </li>
              <li>type de lieu : {lieu}</li>
              <li>pays : {pays}</li>
              <li>nom : {nom}</li>
            </ul>
            <Button onClick={handleEdit(_id, lieu)} size="md">
              Voir plus
            </Button>
            <Button
              onClick={handleDelete(_id)}
              variant="danger"
              size="md"
              className="hidden group-hover:inline"
            >
              DELETE
            </Button>
          </li>
        ))}
      </div>
    </ul>
  )
}

export default PlacesPage
