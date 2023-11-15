import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="bg-gradient-to-r from-yellow-300 via-red-500 to-pink-400 shadow-md p-4 mb-4 w-80 cursor-pointer"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <p className="text-2xl font-semibold text-white">{name}</p>
      <p className="text-green-500">Category: {category}</p>
      <p className="text-blue-500">Quantity: {quantity}</p>
    </div>
  );
}
