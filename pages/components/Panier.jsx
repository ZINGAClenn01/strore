// import * as React from 'react';
// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//   const StyledBadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//       right: -3,
//       top: 13,
//       border: `2px solid ${theme.palette.background.paper}`,
//       padding: '0 4px',
//     },
//   }));

// export default function Panier({ cart }) {
//   return (
//     <>
//         {/* <IconButton aria-label="cart">
//             <StyledBadge badgeContent={2} color="secondary">
//               <ShoppingCartIcon />
//             </StyledBadge>
//           </IconButton>  */}
//            <h2>Panier</h2>
//             <ul>
//                 {cart.map(item => (
//                     <li key={item.id}>{item.title}</li>
//                 ))}
//             </ul>
//     </>
//   )
// }




import React, { useEffect, useState } from 'react';

function Panier({ cart }) {
    useEffect(() => {
        console.log("Valeur de cart dans le composant Panier :", cart);
        console.log(cart);
    }, [cart]);

    return (
        <div>
            <h2>Panier</h2>
            <p>Nombre d'éléments dans le panier : {cart ? cart.length : 0}</p>
        </div>
    );
}

export default Panier;




