import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import CardOne from './components/CardOne';
import { useRouter } from 'next/router';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/Fibase';

export default function MediaCards() {

    const router = useRouter();
    const [chaussures, setChaussures] = useState([]);
    const [elementCliqueId, setElementCliqueId] = useState(null);

    const handleClick = (id) => {
        console.log("ID de l'élément cliqué :", id);
        router.push(`/components/CardOne?id=${id}`);
        console.log(router);
    };
    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "chaussure"));
            const chaussureData = [];
            querySnapshot.forEach((doc) => {
                chaussureData.push({
                    id: doc.id,
                    ...doc.data()
                }); console.log(doc);
            });
            setChaussures(chaussureData);
        };
        fetchData();
    }, []); console.log(chaussures);
    console.log(router);

    return (
        <div className='Cards'>
            {chaussures.map(chaussure => (<Card className='carte' key={chaussure.id} sx={{ maxWidth: 380 }}>
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
                <CardActions key={chaussure._id}>
                    <Button key={chaussure._id} size="small" onClick={() => handleClick(chaussure.id)}>Lire plus</Button>

                </CardActions>
            </Card>
            ))}
        </div>
    );
}

