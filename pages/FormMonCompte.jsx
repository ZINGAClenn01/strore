import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FormConnectUser from './FormConnectUser';
import Dashboard from './Dashboard';
import { auth } from '../Firebase/Fibase'; // Assurez-vous que auth est correctement initialisé depuis Firebase

function FormMonCompte() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSignUpButton, setShowSignUpButton] = useState(false);
    const router = useRouter();

    const handleSignIn = async (event) => {
        event.preventDefault();
        
        try {
            const authInstance = getAuth();
            const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
            const user = userCredential.user;

            console.log('Utilisateur connecté :', user);
            router.push('./Dashboard');
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setShowSignUpButton(true);
            } else {
                console.error('Erreur lors de la connexion :', error.message);
            }
        }
    };

    const handleSignUp = () => {
        router.push('./FormConnectUser'); 
    };

    return (
        <div>
            <form onSubmit={handleSignIn} className="form-container">
                <h1 className="form-title">Se connecter</h1>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="form-input"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    className="form-input"
                />
                <button type="submit" className="form-button">Se connecter</button>
            </form>
            {showSignUpButton && (
                <button onClick={handleSignUp} className="form-button">
                    S'inscrire
                </button>
            )}
        </div>
    )
}

export default FormMonCompte;
