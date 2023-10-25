"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <main className="bg-blue-950 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
      <div className="bg-green-300 p-6 rounded shadow-lg">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}

