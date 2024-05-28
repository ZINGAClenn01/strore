import Head from "next/head"
import ResponsiveAppBar from './components/Navbar'

import MediaCards from './Cards'
import BasicSpeedDial from './Boutonajouter'
// import Contact from '../pages/components/Contact'

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormAjouter from "./FormAjouter";


export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Accueil</title>
        </Head>
      </div>
      <div><ResponsiveAppBar /></div>
      <div><MediaCards /></div>
      <div><BasicSpeedDial /></div>
    </>
  )
}