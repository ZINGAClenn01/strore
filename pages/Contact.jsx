import { useState } from "react";
import React from 'react';

export default function MonFormulaire() {
  // Définition des états des champs de formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    // This will prevent page refresh
    e.preventDefault();

    // replace this with your own unique endpoint URL
    fetch("https://formcarry.com/s/iMNHre22jSF", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name: name , email: email, message: message })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <h1 className="h1-formcontact">Merci de nous avoir contacter nous avons recu votre message... Veillez Appuyez sur retour
      Merci pour votre contribution
    </h1>;
  }

  return (
    <section class="formcarry-container">
    <form onSubmit={submit}>
      
      <div class="formcarry-block">
        <label htmlFor="fc-generated-1-name">Tout le nom</label>
        <input type="text" name="name" id="fc-generated-1-name" placeholder="Entrer le nom complet"  value={name}
        onChange={(e) => setName(e.target.value)}
        required/>
      </div>
      
      <div class="formcarry-block">
        <label htmlFor="fc-generated-1-email">Votre adresse mail</label>
        <input type="email" name="email" id="fc-generated-1-email email" placeholder="john@doe.com"  value={email}
        onChange={(e) => setEmail(e.target.value)}
        required/>
      </div>
      
      <div class="formcarry-block">
        <label htmlFor="fc-generated-1-message">Votre message</label>
        <textarea name="message" id="fc-generated-1-message" placeholder="Entrer votre message..."  value={message}
        onChange={(e) => setMessage(e.target.value)}
        required></textarea>
      </div>
      
      <div className="formcarry-block">  
        <button type="submit">Envoyer</button>
      </div>
    
    </form>
  </section>
  );
};
