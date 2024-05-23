import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/Fibase';

function CardOne() {
    const router = useRouter();
    const { id: routerId } = router.query;
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [chaussures, setChaussures] = useState([]);

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

    return (
        <div>
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
                            <Button size="small">Modifier</Button>
                            <Button size="small">Supprimer</Button>
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
