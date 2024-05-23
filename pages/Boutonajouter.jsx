import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ position: 'fixed', bottom: 30, right: 16 }}
    >
      <Link href="./FormAjouter">
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </Box>
  );
}