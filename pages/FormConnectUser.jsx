import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../Firebase/Fibase'; // Assurez-vous que ces importations sont correctes
import FormMonCompte from './FormMonCompte';

const FormConnectUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Utilisateur inscrit:', user);

            // Ajouter l'utilisateur à Firestore
            const userDocRef = doc(firestore, 'users', user.uid);
            await setDoc(userDocRef, {
                email: user.email,
                uid: user.uid,
            });

            setIsRegistered(true);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Erreur lors de l\'inscription:', errorCode, errorMessage);

            if (errorCode === 'auth/email-already-in-use') {
                setErrorMessage('Cet email est déjà utilisé. Veuillez vous connecter.');
            } else {
                setErrorMessage('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
            }
        }
    };

    const handleSignInRedirect = () => {
        router.push('./FormMonCompte');
    };

    return (
        <>
            {!isRegistered ? (
                <form onSubmit={handleSignUp} className="form-container">
                    <h1 className="form-title">Inscrivez-vous</h1>
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
                    <button type="submit" className="form-button">S'inscrire</button>
                    {errorMessage && (
                        <div className="error-message">
                            {errorMessage} <a href="#" onClick={handleSignInRedirect}>Se connecter</a>
                        </div>
                    )}
                </form>
            ) : (
                <div className="form-container">
                    <h1 className="form-title">Inscription réussie</h1>
                    <button
                        onClick={() => router.push('./FormMonCompte')}
                        className="form-button"
                    >
                        Se connecter au dashboard
                    </button>
                </div>
            )}
        </>
    );
};

export default FormConnectUser;
