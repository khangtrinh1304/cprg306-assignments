import React from 'react';
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="bg-blue-950 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
      <div className="bg-green-300 p-6 rounded shadow-lg">
        <ItemList />
      </div>
    </main>
  );
}


