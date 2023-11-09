import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Table from 'react-bootstrap/Table';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


function Cart({ item, index, cartItems, setCartItems, selectedItem }) {
    
    const deleteMessage = (index) => {
        const updatedCartItems = cartItems.filter((item, i) => i !== index);
        setCartItems(updatedCartItems);
      };

      const handleIncreaseQuantity = () => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        setCartItems(updatedCartItems);
      };
    
      const handleDecreaseQuantity = () => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
          updatedCartItems[index].quantity -= 1;
          setCartItems(updatedCartItems);
        }
      };

      console.log(cartItems)

  return ( 
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
          <th>Count</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {cartItems.map((item, index) => {
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>
                <IconButton onClick={handleIncreaseQuantity}>
                    <AddCircleOutlineIcon />
                </IconButton>
                {item.quantity}
                <IconButton onClick={handleDecreaseQuantity}>
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </td>
            <td>
                <IconButton style={{ color: 'red' }} aria-label="Delete" onClick={() => deleteMessage(index)}>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    );
})}

        
      </tbody>
    </Table>


    </div>
  );
}

export default Cart;