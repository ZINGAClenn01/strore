import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/Fibase';
import Navbar from './Navbar'; // Import Navbar component
import PagePanier from './PagePanier'; // Import PagePanier component
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function MediaCards() {
    const router = useRouter();
    const [chaussures, setChaussures] = useState([]);
    const [cart, setCart] = useState([]);

    // Fonction pour ajouter un article au panier et stocker dans le local storage
    const addToCart = (id) => {
        const itemToAdd = chaussures.find(chaussure => chaussure.id === id);
        if (itemToAdd) {
            const updatedCart = [...cart, itemToAdd];
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };

    useEffect(() => {
        // Récupérer le panier depuis le local storage lors du chargement de la page
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart && Array.isArray(storedCart)) {
            setCart(storedCart);
        }

        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "chaussure"));
            const chaussureData = [];
            querySnapshot.forEach((doc) => {
                chaussureData.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setChaussures(chaussureData);
        };
        fetchData();
    }, []);

    const handleClick = (id) => {
        console.log("ID de l'élément cliqué :", id);
        router.push(`/components/CardOne?id=${id}`);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className='Cards'>
            <div className='mt-[2%] max-h-[400px]'>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    dynamicHeight
                    stopOnHover
                    showArrows={false} // Cette ligne supprime les boutons de contrôle
                >
                    <div className='max-h-[300px] overflow-hidden'>
                        <img
                            src="https://i.pinimg.com/736x/e3/24/90/e324906d9c8a3b0439753b2fc958f83c.jpg"
                            alt="image1"
                            className='h-full w-full'
                        />
                    </div>
                    <div className='max-h-[300px] overflow-hidden'>
                        <img
                            src="https://i.pinimg.com/564x/33/1e/72/331e72e62230300546eb44f673c794e1.jpg"
                            alt="image2"
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div className='max-h-[300px] overflow-hidden'>
                        <img
                            src="https://i.pinimg.com/236x/86/00/d6/8600d67c23bd6ff115aa7d13134b47d7.jpg"
                            alt="image3"
                            className='h-full object-cover'
                        />
                    </div>
                    <div className='max-h-[300px] overflow-hidden'>
                        <img
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172227/4.png"
                            alt="image4"
                            className='h-full object-cover'
                        />
                    </div>
                    <div className='max-h-[300px] overflow-hidden'>
                        <img
                            src="https://i.pinimg.com/236x/42/d6/2a/42d62ab3dc7af0549e241d945bfd35e0.jpg"
                            alt="image5"
                            className='h-full object-cover'
                        />
                    </div>
                </Carousel>
            </div>
            {chaussures.map(chaussure => (
                <Card className='carte' key={chaussure.id} sx={{ maxWidth: 380 }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={chaussure.image.toString()}
                        title="Chaussure"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {chaussure.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {chaussure.plus}
                        </Typography>

                        <Grid className='price' item xs={8}>
                            <Item className='text-price'>{chaussure.pris + " Fcfa"}</Item>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" onClick={() => handleClick(chaussure.id)} >Lire plus</Button>
                        <Button variant="contained" size="small" onClick={() => addToCart(chaussure.id)}>Ajouter au panier</Button>
                    </CardActions>
                </Card>
            ))}
            <Navbar cart={cart} />
            {/* <PagePanier cart={cart} /> */}
        </div>
    );
}
