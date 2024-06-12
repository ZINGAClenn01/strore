import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../Firebase/Fibase';
import Navbar from '../Navbar';

function CardOne({ cart,addToCart }) {
    const router = useRouter();
    const { id: routerId } = router.query;
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [chaussures, setChaussures] = useState([]);
    // const handleClick = (id) => {
    //     console.log("ID de l'élément cliqué :", id);
    //     router.push(`/components/FormUpdate?id=${id}`);
    // };

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, `chaussure`));
            const chaussureData = querySnapshot.docs
                .filter((doc) => doc.id === routerId)
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

            setChaussures(chaussureData);
        };
        if (routerId) {
            fetchData();
        }
    }, [routerId]);

    const handleItemClick = (itemId) => {
        if (itemId === routerId) {
            setSelectedItemId(itemId);
        } else {
            setSelectedItemId(null);
        }
    };

    // const handleDelete = async (id) => {
    //     try {
    //         await deleteDoc(doc(db, 'chaussure', id));
    //         console.log("Document successfully deleted!");
    //         setChaussures(chaussures.filter(chaussure => chaussure.id !== id));
    //     } catch (error) {
    //         console.error("Error removing document: ", error);
    //     }
    // };

    return (
        <div>
            <Navbar />
            {chaussures.map((chaussure) => (
                <div key={chaussure.id}>
                    <Card sx={{ maxWidth: 380 }} onClick={() => handleItemClick(chaussure.id)}>
                        <CardMedia
                            sx={{ height: 300 }}
                            image={chaussure.image}
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
                            <Button onClick={addToCart} className='button-cardone' size="small">Ajouter au panier</Button>
                            {/* <Button size="small" onClick={() => handleDelete(chaussure.id)}>Supprimer</Button> */}
                        </CardActions>
                    </Card>
                </div>
            ))}
            {selectedItemId && (
                <div>
                    {/* Affiche ici les détails de l'élément sélectionné */}
                </div>
            )}
        </div>
    );
}

export default CardOne;
