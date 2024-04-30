/* eslint-disable max-lines-per-function */
/* eslint-disable no-underscore-dangle */
import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import {
  lieuValidator,
  nomValidator,
  adresseValidator,
  villeValidator,
  codePostalValidator,
  paysValidator,
  typeParcValidator,
  priceAndFreeValidator,
  accessValidator,
} from "@/validators"
import axios from "axios"
import { Formik } from "formik"
import { useRouter } from "next/router"
import * as yup from "yup"

export const getServerSideProps = async ({ query: { placeId } }) => {
  const { data: place } = await axios(
    `http://localhost:3000/api/places/${placeId}`,
  )

  return { props: { place } }
}
const validationSchema = yup.object({
  lieu: lieuValidator,
  nom: nomValidator,
  adresse: adresseValidator,
  ville: villeValidator,
  codePostal: codePostalValidator,
  pays: paysValidator,
  typePlace: typeParcValidator,
  price: priceAndFreeValidator,
  access: accessValidator,
})
const PlaceEditPage = ({ place }) => {
  const router = useRouter()
  const initialValues = place
  const handleSubmit = async (values) => {
    await axios.patch(`http://localhost:3000/api/places/${place._id}`, values)

    router.push("/places")
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormField name="lieu" placeholder="Entrer le lieu" label="Lieu" />
        <FormField name="nom" placeholder="Entrer le nom" label="Nom" />
        <FormField
          name="adresse"
          placeholder="Entrer l'adresse"
          label="Adresse"
        />
        <FormField name="ville" placeholder="Entrer la ville" label="Ville" />
        <FormField
          name="codePostal"
          placeholder="Entrer le code postal"
          label="CodePostal"
        />
        <FormField name="pays" placeholder="Entrer le pays" label="Pays" />
        <FormField
          name="typePlace"
          placeholder="florale / zoologique / forestier"
          label="Type de parc"
        />
        <FormField
          name="price"
          placeholder="Entrer le prix de 1 à 5 ou gratuit"
          label="Prix"
        />
        <FormField
          name="access"
          placeholder="Prive ou public"
          label="Condition d'accée au parc"
        />
        <Button type="submit">Save</Button>
      </Form>
    </Formik>
  )
}

export default PlaceEditPage
