import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
 import axios from 'axios';
 import React from 'react';



import { useState } from 'react';

export default function MonFormulaire()  {
  // Définition des états des champs de formulaire
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [plus, setPlus] = useState('');

  // Fonction de gestion de la soumission du formulaire
  const soumettreFormulaire = async (event) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    // Utilisez les valeurs des champs du formulaire
    console.log('Url:', image);
    console.log('Titre:', title);
    console.log('Description:', plus);
  
    try {
      // Faites une requête POST vers votre API Strapi
      const response = await axios.post('http://localhost:1337/api/posts', {
        // Utilisez les mêmes clés que les noms de vos champs dans le formulaire
        image: image,
        title: title,
        plus: plus,
        // Autres champs de votre modèle de données à remplir si nécessaire
      });
  
      console.log('Réponse de Strapi:', response.data);
      // Ici vous pouvez traiter la réponse de Strapi si nécessaire
    } catch (error) {
      console.error('Erreur lors de la création de l\'élément dans Strapi:', error);
      // Gérez l'erreur de manière appropriée
    }
  };

  return (
    <form onSubmit={soumettreFormulaire}>
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
          value={image}
          id='image'
          onChange={(event) => setImage(event.target.value)}
        />
        <TextField className='textfield'
          label="Titre de l'article"
          type="text"
          value={title}
          id='title'
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField className='textfield'
          label="Description de l'article"
          type="text"
          value={plus}
          id='plus'
          onChange={(event) => setPlus(event.target.value)}
        />
        <Button variant="contained" className='bouton-ajouter' type="submit">Creer un article</Button>
      </Box>
    </form>
  );
};





// import { useState } from 'react';

// export default function MonFormulaire() {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [plus, setPlus] = useState("");
//   const [user, setUser] = useState("");
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const data = {
//       title: title,
//       image: image,
//       plus: plus,
//       user: user
//     }; console.log(title);
//     console.log(plus);
//     console.log(image);
//     console.log(user);
//     try {
//       const response = await fetch('http://localhost:1337/api/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       if (!response.ok) {
//         throw new Error('Erreur lors de la création de l\'article');
//       }
      
//       const responseData = await response.json();
//       console.log('Réponse de l\'API:', responseData);

//       setTitle("");
//       setImage("");
//       setPlus("");
//       setUser("");
      
//     } catch (error) {
//       console.error(error.message);
//       console.log("CA PASSE PAS");
//     }
//   };
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Titre:
//         <input
//           type="text"
//           value={title}
//           onChange={(event) => setTitle(event.target.value)}
//         />
//       </label>
//       <label>
//         Image:
//         <input
//           type="url"
//           value={image}
//           onChange={(event) => setImage(event.target.value)}
//         />
//       </label>
//       <label>
//         Plus:
//         <textarea
//           value={plus}
//           onChange={(event) => setPlus(event.target.value)}
//         />
//       </label>
//       <label>
//         User:
//         <input
//           type="text"
//           value={user}
//           onChange={(event) => setUser(event.target.value)}
//         />
//       </label>
//       <button type="submit">Envoyer</button>
//     </form>
//   );
// }
