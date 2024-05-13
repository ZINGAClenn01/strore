import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function MediaCard() {
    return (
        <div>
            <div className='card'>
                <div className='Card2'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/172417586/fr/photo/%C3%A9l%C3%A9gantes-chaussures-en-cuir-noir.jpg?s=612x612&w=0&k=20&c=Izu6d0BYwRD9BekiKa6qIzSZX4dwbE8ftIknseFLAk8="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Cuir noir
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Modifier</Button>
                            <Button size="small">Supprimer </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='Card2'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/187310279/fr/photo/chaussure-en-cuir-marron.jpg?s=612x612&w=0&k=20&c=tuOzGNcUWAz9KIZyIE3TdGh1BRQ8zSAy-RxiZRGL55w="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Cuir marron
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Modifier</Button>
                            <Button size="small">Supprimer </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='Card2'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/917584110/fr/photo/homme-africain-tenant-une-sneaker-blanche.jpg?s=612x612&w=0&k=20&c=GTpUuAtEtMMppiipJ_dM4TDv4LMaq9JxskPol78FRqE="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                basket blanche
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Modifier</Button>
                            <Button size="small">Supprimer </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <div className='card'>
                <div className='Card2'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/953795296/fr/photo/bouchent-la-vue-de-la-chaussure-de-running-et-fitness-sport-noir-des-baskets-ou-des-formateurs.jpg?s=612x612&w=0&k=20&c=xG67H7OmB_bCjXJWsRsFAOmULKXLZC_6_kaT7IwgWIs="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Modifier</Button>
                            <Button size="small">Supprimer </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='Card2'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/527798837/fr/photo/chaussures-de-luxe.jpg?s=612x612&w=0&k=20&c=XcMlbYjmNMH-l3iOloe_3qpDb6jixT1PjMraS_a2K0M="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Modifier</Button>
                            <Button size="small">Supprimer </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='Card2'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/1324542701/fr/photo/tenez-les-chaussures-de-sport-sur-fond-rouge-tenir-de-nouvelles-baskets-de-mode-pour-courir.jpg?s=612x612&w=0&k=20&c=IZvtS-FKcjZyMi5LrzLnFvT-AajtMi_uDF7oVirx-pY="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Modifier</Button>
                            <Button size="small">Supprimer </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <div className='card'>
                <div className='Card2'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/953795296/fr/photo/bouchent-la-vue-de-la-chaussure-de-running-et-fitness-sport-noir-des-baskets-ou-des-formateurs.jpg?s=612x612&w=0&k=20&c=xG67H7OmB_bCjXJWsRsFAOmULKXLZC_6_kaT7IwgWIs="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Modifier</Button>
                            <Button size="small">Supprimer </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='Card2'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/527798837/fr/photo/chaussures-de-luxe.jpg?s=612x612&w=0&k=20&c=XcMlbYjmNMH-l3iOloe_3qpDb6jixT1PjMraS_a2K0M="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Modifier</Button>
                            <Button size="small">Supprimer </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className='Card2'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://media.istockphoto.com/id/1324542701/fr/photo/tenez-les-chaussures-de-sport-sur-fond-rouge-tenir-de-nouvelles-baskets-de-mode-pour-courir.jpg?s=612x612&w=0&k=20&c=IZvtS-FKcjZyMi5LrzLnFvT-AajtMi_uDF7oVirx-pY="
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Modifier</Button>
                            <Button size="small">Supprimer </Button>
                            {/* <Button size="small">Learn </Button> */}
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
}