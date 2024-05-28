import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

function Panier({ cart }) {
    const [panierData, setPanierData] = useState([]);

    // Mettre à jour les données du panier lorsqu'elles changent
    useEffect(() => {
        console.log("Valeur de cart dans le composant Panier :", cart);
        console.log(cart);
        // Mettre à jour les données du panier
        setPanierData(cart);
    }, [cart]);
console.log(panierData);
    return (
        <div>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={panierData ? panierData.length : 0} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </div>
    );
}

export default Panier;
