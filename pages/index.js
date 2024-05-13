import Head from "next/head"
import ResponsiveAppBar from './Navbar'

import MediaCard from'../pages/components/Card'
import BasicSpeedDial from'../pages/components/Boutonajouter'
// import Contact from '../pages/components/Contact'

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Accueil</title>
        </Head>
      </div>
      <div><ResponsiveAppBar /></div>

      <div><MediaCard /></div>
      <div><BasicSpeedDial /></div>
      {/* <div><Contact /></div> */}
    

{/*   
      <div className="bouton">
      <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
      </div> */}


    </>
  )
}