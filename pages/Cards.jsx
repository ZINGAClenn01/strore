import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import CardOne from './components/CardOne';
import { useRouter } from 'next/router';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/Fibase';

export default function MediaCards() {

    const [posts, setPosts] = useState([]);
    const router = useRouter();
    const [chaussures, setChaussures] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('http://localhost:1337/api/posts');
    //         const { data } = await res.json();
    //         setPosts(data)
    //     }
    //     fetchData()
    // }, []);

    const handleClick = (id) => {
        console.log("ID de l'élément cliqué :", id);
        router.push(`/components/CardOne?id=${id}`);
    };
    
  // Déclarez une fonction asynchrone pour pouvoir utiliser await
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "chaussure"));
      const chaussureData = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        chaussureData.push({
          id: doc.id,
          ...doc.data()
        });console.log(doc);
      });
      setChaussures(chaussureData);
    };

    fetchData();
  }, []);console.log(chaussures);

    return (
        <div className='Cards'>
             {/* <ul>
        {chaussures.map(chaussure => (
          <li key={chaussure.id}>
            {chaussure.title} - {chaussure.taille}
          </li>
        ))}
      </ul> */}
      {chaussures.map(chaussure => ( <Card className='carte' key={chaussure.id} sx={{ maxWidth: 380 }}>
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

