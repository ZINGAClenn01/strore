import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Navbar from './Navbar';

function PagePanier(props) {
  const { cart: propsCart } = props;
  const [cart, setCart] = useState(propsCart || []);
  // const [ newPanier, setNewPanier ] = useState([])
  const newPanier = cart
  console.log(newPanier);

  // Utilisation de useEffect pour initialiser le panier à partir du local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localStorageCart = JSON.parse(localStorage.getItem('cart'));
      if (localStorageCart) {
        setCart([...cart, ...localStorageCart]);
      }
    }
  }, []); // Le tableau vide en second argument signifie que cet effet est exécuté une seule fois, au montage du composant

  // Fonction pour supprimer un élément du panier
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    // Mettre à jour le local storage après la suppression
    localStorage.setItem('cart', JSON.stringify(newCart));
  };
console.log(cart);
  return (
    <>
      <Navbar cartLength={cart.length} newPanier={newPanier} />
      <Typography variant="h4" gutterBottom>
        Panier
      </Typography>
      {cart.length > 0 ? (
        <div className="carte-panier">
          {cart.map((item, index) => (
            <Card key={index} className="carte" sx={{ maxWidth: 380 }}>
              <CardMedia sx={{ height: 300 }} image={item.image.toString()} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.plus}
                </Typography>
                {/* Bouton pour supprimer l'élément du panier */}
                <Button onClick={() => removeFromCart(index)} variant="outlined" color="error">
                  Supprimer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Typography variant="body1">Le panier est vide.</Typography>
      )}
    </>
  );
}

export default PagePanier;
