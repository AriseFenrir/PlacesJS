/* eslint-disable max-lines-per-function */
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
  typeBarValidator,
  priceValidator,
} from "@/validators"
import axios from "axios"
import { Formik } from "formik"
import * as yup from "yup"

const initialValues = {
  lieu: "bar",
  nom: "",
  adresse: "",
  ville: "",
  codePostal: "",
  pays: "France",
  typePlace: "",
  price: "",
}
const validationSchema = yup.object({
  lieu: lieuValidator,
  nom: nomValidator,
  adresse: adresseValidator,
  ville: villeValidator,
  codePostal: codePostalValidator,
  pays: paysValidator,
  typePlace: typeBarValidator,
  price: priceValidator,
})
const CreatePlacePage = () => {
  const handleSubmit = async (
    { lieu, nom, adresse, ville, codePostal, pays, typePlace, price },
    { resetForm },
  ) => {
    await axios.post("http://localhost:3000/api/places", {
      lieu,
      nom,
      adresse,
      ville,
      codePostal,
      pays,
      typePlace,
      price,
    })

    resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <FormField name="lieu" placeholder="lieu" label="Lieu" />
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
          placeholder="vin / coktail / bière"
          label="Type de bar"
        />
        <FormField
          name="price"
          placeholder="Entrer le prix de 1 à 5"
          label="Prix"
        />
        <Button type="submit">Create</Button>
      </Form>
    </Formik>
  )
}

export default CreatePlacePage
