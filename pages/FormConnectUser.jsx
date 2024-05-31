import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '../Firebase/Fibase';

const FormConnectUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const router = useRouter();

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User signed up:', user);

            // Add user to Firestore
            await setDoc(doc(firestore, 'users', user.uid), {
                email: user.email,
                uid: user.uid,
            });

            setIsRegistered(true);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing up:', errorCode, errorMessage);
        }
    };

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            const authInstance = getAuth();
            const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
            const user = userCredential.user;
            console.log('User signed in:', user);

            // Verify user in Firestore
            const userDoc = await getDoc(doc(firestore, 'users', user.uid));
            if (userDoc.exists()) {
                console.log('User exists in Firestore:', userDoc.data());
                router.push('/dashboard');
            } else {
                console.error('User does not exist in Firestore');
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing in:', errorCode, errorMessage);
        }
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
                </form>
            ) : (
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
            )}
        </>
    );
};

export default FormConnectUser;
