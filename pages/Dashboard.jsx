import React from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Fibase'; // Assurez-vous que auth est correctement initialisé depuis Firebase
import MediaCards from './Cards'
import Navbar from './Navbar';
import { Nav } from 'react-bootstrap';
import NavbarDashboard from './NavbarDashboard';

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

    return (
        <>
        <NavbarDashboard handleSignOut={handleSignOut}/>
        <div>
            <h1>Bienvenue au Dashboard</h1>
            <button onClick={handleSignOut} className="form-button">Se déconnecter</button>
        </div>
        </>
    );
};

export default Dashboard;
