import React, { useState, useEffect } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    const [inventory, setInventory] = useState([])
    const [reorderItem, setReorderItem] = useState([])

useEffect(() => {
    fetch("http://localhost:8001/inventory")
        .then(res => res.json())
        .then(data => setInventory(data))
    }, [])

    const addToReorderInventory = (itemToAdd) => {
        setReorderItem([...reorderItem, itemToAdd])
    }
    
    const removeItemFromReorder = (itemToRemove) => {
        let filteredInventory = reorderItem.filter(item => item.id !== itemToRemove.id)
        setReorderItem(filteredInventory)
    }

    const removeFromInventory = (itemToRemove) => {
        // fetch(`http://localhost:8001/inventory/${itemToRemove.id}`, {method: 'DELETE'})
        // if the item selected does not match 
        let filteredInventory = inventory.filter(item => item.id !== itemToRemove.id)
        setInventory(filteredInventory)
    }

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} addToReorderInventory={addToReorderInventory} removeFromInventory={removeFromInventory} />
            <ReorderInventoryList reorderItem={reorderItem} removeItemFromReorder={removeItemFromReorder} />
        </div>
    );
}

export default InventoryManager;