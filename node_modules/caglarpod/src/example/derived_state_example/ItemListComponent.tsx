import React, { useState } from 'react';
import { useStateNotifier } from '../../core/useStateNotifier';
import { useStateSelector } from '../../core/useStateSelector';
import itemNotifier from './itemNotifier';

const ItemListComponent: React.FC = () => {
  const state = useStateNotifier(itemNotifier);
  const filteredItems = useStateSelector(itemNotifier, itemNotifier.getFilteredItems.bind(itemNotifier));
  const [newItemName, setNewItemName] = useState('');

  const addItem = () => {
    if (newItemName.trim()) {
      itemNotifier.addItem(newItemName.trim());
      setNewItemName('');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    itemNotifier.setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>Item List</h2>
      <input
        type="text"
        placeholder="Search..."
        value={state.searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Item"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ItemListComponent;
