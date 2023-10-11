"use client"
import React, { useState } from 'react';

export default function NewItem()
{
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert("Added Item: " + name + " Quantity: " + quantity + " Category: " + category);
        setName('');
        setQuantity(1);
        setCategory('produce');
      };
      
    return(
        <div className="max w-md mx-auto mt-4 p-6 bg-blue-400 rounded shadow-md">
        <h1 className="text-2x1 font-semibold text-center text-gray-800 mb-4">Add New Item</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor='Name' className="text-gray-600 font-medium"> Name </label>
                <input type="text" id="Name" className="border rounded-lg w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                value={name} onChange={(e) => setName(e.target.value)} required></input>
            </div>

            <div>
                <label htmlFor='quantity' className="text-gray-600 font-medium"> Quantity </label>
                <input type="number" id="quantity" className="border rounded-lg w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} min="1" max="99" required></input>
            </div>

            <div>
                <label htmlFor="category" className="text-gray-600 font-medium">Category</label>
                <select id="category" className="border rounded-lg w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="bakery">Bakery</option>
                    <option value="household">Household</option>
                    <option value="meat">Meat</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="text-center">
                <button type="submit" className="bg-red-600 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-red-300">
                    Submit
                </button>
            </div>
        </form>
        </div>
    );
}