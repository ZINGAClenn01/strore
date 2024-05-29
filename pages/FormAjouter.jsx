import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../Firebase/Fibase"; 

export default function MonFormulaire() {
  // Définition des états des champs de formulaire
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    plus: '',
    pris: '' // Ajout du champ pris
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
        plus: '',
        pris: ''
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
        plus: data.plus,
        pris: data.pris // Inclure le prix
      });
  
      console.log("Document ajouté avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du document : ", error);
    }
  };

  return (
    <form className='formulaire-ajouter' onSubmit={handleSubmit}>
      <Box 
        sx={{
          width: 1000,
          maxWidth: '100%',
        }}
        className="boxform"
      >
        <TextField className='textfield'
        sx={{ m: 1, width: '80%' }}
          label="Image de l'article en Url"
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <TextField className='textfield'
        sx={{ m: 1, width: '80%' }}
          label="Description de l'article"
          type="text"
          id="plus"
          name="plus"
          value={formData.plus}
          onChange={handleChange}
        />

        <TextField className='textfield'
        sx={{ m: 1, width: '80%' }}
          label="Titre de l'article"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <TextField className='textfield'
        sx={{ m: 1, width: '80%' }}
          label="Prix de l'article"
          type="number" // Champ de type nombre pour le prix
          id="pris"
          name="pris"
          value={formData.pris}
          onChange={handleChange}
        />
        
        <Button variant="contained" className='bouton-ajouter' type="submit">Créer un article</Button>
      </Box>
    </form>
  );
};
