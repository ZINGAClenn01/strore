import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Fibase'; // Assurez-vous que auth est correctement initialisé depuis Firebase
import MediaCards from './Cards'
import Navbar from './Navbar';
import NavbarDashboard from './NavbarDashboard';
import Link from 'next/link';
import Panier from './components/Panier';
import PagePanier from './PagePanier';
import CardMedia from '@mui/material/CardMedia';

const Dashboard = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log('Utilisateur déconnecté');
            router.push('./Cards');
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
    };
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Lire les données du localStorage
        const storedCart = localStorage.getItem('cart');

        // Vérifier si les données existent et les définir dans l'état
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const longueur = cart.length;
    console.log('Longueur du panier :', longueur);


    return (
        <>
            <NavbarDashboard handleSignOut={handleSignOut} />
            <div className='mt-[-2%]'>
                {/* <button onClick={handleSignOut} className="form-button">Se déconnecter</button> */}
                <Link href="./Cards">  <button
                    type="button"
                    className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
                >
                    <div
                        className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                    >
                        <svg
                            width="25px"
                            height="25px"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="#000000"
                                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                            ></path>
                            <path
                                fill="#000000"
                                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                            ></path>
                        </svg>
                    </div>
                    <p className="translate-x-2">Go Back</p>
                </button>
                </Link>
            </div>
            <h1 className='pb-[8%] mt-[-1%] text-center font-bold text-2xl'>Votre Panier</h1>
            <div className='grid grid-cols-3 gap-y-16  m-auto pb-10'>
                
                {cart.map((item, index) => (
                    <div key={index} className="relative  m-auto flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                            <CardMedia
                                sx={{ height: 180 }}
                                image={item.image.toString()}
                                title="Chaussure"
                            />
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {item.title}
                            </h5>
                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                {item.plus}
                            </p>
                        </div>
                        <div className="p-6 pt-0">
                            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                Lire plus
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
            <h1 className='pb-[8%] mt-[-1%] text-center font-bold text-2xl'>Nouveautés</h1>

            </div>

        </>
    );
};

export default Dashboard;
