import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../Firebase/Fibase"; // Assurez-vous d'importer votre instance de firebase/firestore

export default function MonFormulaire() {
  // Définition des états des champs de formulaire

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    plus: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Appel à la fonction pour ajouter l'élément dans Firestore
      await ajouterElementDansFirestore(formData);
      console.log('Article ajouté avec succès !');

      // Réinitialisation du formulaire après l'ajout
      setFormData({
        title: '',
        image: '',
        plus: ''
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article : ", error);
    }
  };

  const ajouterElementDansFirestore = async (data) => {
    try {
      // Ajout de l'élément dans la collection "chaussure"
      await setDoc(doc(db, "chaussure", data.title), {
        title: data.title,
        image: data.image,
        plus: data.plus
      });
  
      console.log("Document ajouté avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du document : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: 1000,
          maxWidth: '100%',
        }}
        className="boxform"
      >
        <TextField className='textfield'
          label="Image de l'article en Url"
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <TextField className='textfield'
          label="Description de l'article"
          type="text"
          id="plus"
          name="plus"
          value={formData.plus}
          onChange={handleChange}
        />

        <TextField className='textfield'
          label="Titre de l'article"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <Button variant="contained" className='bouton-ajouter' type="submit">Créer un article</Button>
      </Box>
    </form>
  );
};
