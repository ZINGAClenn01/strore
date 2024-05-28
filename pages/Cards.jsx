// MediaCards.js
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/Fibase';
import Navbar from './components/Navbar'; // Import Navbar component
import Panier from './components/Panier';

export default function MediaCards() {
    const router = useRouter();
    const [chaussures, setChaussures] = useState([]);
    const [cart, setCart] = useState([]);

    const handleClick = (id) => {
        console.log("ID de l'élément cliqué :", id);
        router.push(`/components/CardOne?id=${id}`);
        console.log(router);
    };

    const addToCart = (id) => {
        const itemToAdd = chaussures.find(chaussure => chaussure.id === id);
        if (itemToAdd) {
            setCart([...cart, itemToAdd]);
        }
    };

    useEffect(() => {
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

    return (
        <div className='Cards'>

            {chaussures.map(chaussure => (
                <Card className='carte' key={chaussure.id} sx={{ maxWidth: 380 }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={chaussure.image.toString()}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {chaussure.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {chaussure.plus}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => handleClick(chaussure.id)}>Lire plus</Button>
                        <Button size="small" onClick={() => addToCart(chaussure.id)}>Ajouter au panier</Button>
                    </CardActions>
                </Card>
            ))}
            <Navbar cart={cart} /> 
            {/* <div className="Panier-icon"> <Panier cart={cart}  /></div> */}

        </div>
    );
}
