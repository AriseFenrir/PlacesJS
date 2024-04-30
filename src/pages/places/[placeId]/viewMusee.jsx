/* eslint-disable require-await */
/* eslint-disable max-lines-per-function */
import { Button } from "@/components/Button"
import axios from "axios"
import { useState } from "react"

export const getServerSideProps = async ({ query: { placeId } }) => {
  const { data: place } = await axios(
    `http://localhost:3000/api/places/${placeId}`,
  )

  return { props: { initialPlaces: Object.values(place) } }
}
const PlacesPage = ({ initialPlaces }) => {
  const [place] = useState(initialPlaces)
  const handleEdit = (placeId) => async () => {
    document.location.href = `/places/${placeId}/editMusee`
  }

  return (
    <ul className="flex flex-row gap-10">
      <div className="flex flex-col gap-4">
        <li>
          <p>Type de lieu : {place[1]}</p>
        </li>
        <li>
          <p>Nom du musée : {place[2]}</p>
        </li>
        <li>
          <p>Adresse : {place[3]}</p>
        </li>
        <li>
          <p>Ville : {place[4]}</p>
        </li>
        <li>
          <p>Code Postal : {place[5]}</p>
        </li>
        <li>
          <p>Pays : {place[6]}</p>
        </li>
        <li>
          <p>Type d'art exposer dans le musée : {place[7]}</p>
        </li>
        <li>
          <p>Prix : {place[8]}</p>
        </li>
        <li>
          <p>Le courant artistique du musée est : {place[9]}</p>
        </li>
        <Button onClick={handleEdit(place[0])} size="md">
          EDIT
        </Button>
      </div>
    </ul>
  )
}

export default PlacesPage
