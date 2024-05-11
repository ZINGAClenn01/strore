import Head from "next/head"
import ResponsiveAppBar from '../pages/components/Navbar'

import MediaCard from'../pages/components/Card'
import BasicSpeedDial from'../pages/components/Boutonajouter'

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