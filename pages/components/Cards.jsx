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

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


export default function MediaCards() {



    const [posts, setPosts] = useState([]);
    const [url, setUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:1337/api/posts');
            const { data } = await res.json();
            setPosts(data)
            console.log(data)
        }
        fetchData()
    }, []);

    return (
        <div className='Cards'>
            {posts.map(post => {
                return <Card className='carte' key={post.id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={post.attributes.image.toString()}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {post.attributes.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {post.attributes.plus}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Lire plus</Button>
                        <Button size="small">Supprimer</Button>
                        <Button size="small">Modifier</Button>
                    </CardActions>
                </Card>
            })}
        </div>
    );
}
