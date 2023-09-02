import React from 'react'

function InventoryItemCard({item, addToReorderInventory, handleClick }) {
    return(
        <div className="card" >
            <img src={item.image} alt="item holder" onClick={() => addToReorderInventory(item)}></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={() => handleClick(item)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;