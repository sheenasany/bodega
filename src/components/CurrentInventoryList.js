import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList({ inventory, addToReorderInventory, removeFromInventory }) {

    const itemList = inventory.map(item => 
        <InventoryItemCard 
            key={item.id}
            item={item} 
            addToReorderInventory={addToReorderInventory} 
            handleClick={removeFromInventory}/>
    )

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {itemList}
            </div>
        </div>
    );
}

export default CurrentInventoryList;