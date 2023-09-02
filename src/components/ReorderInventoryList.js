import React from 'react'
import InventoryItemCard from "./InventoryItemCard"

function ReorderInventoryList({reorderItem, removeItemFromReorder }) {
    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorderItem.map(item => 
                    <InventoryItemCard 
                        item={item} 
                        key={item.id} 
                        handleClick={removeItemFromReorder}  
                />)}
            </div>
        </div>
    );
}

export default ReorderInventoryList;