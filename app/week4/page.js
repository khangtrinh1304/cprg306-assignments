import React from "react";
import NewItem from "./new-item";

export default function Page(){
    return (
        <div className="flex justify-center items-center min-h-screen" style={{ background:'linear-gradient(45deg, #00FF00, #FF00FF)' }}>
            <div className="bg-gradient-to-r from-yellow-300 via-red-500 to-pink-400 shadow-md p-4 rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">Add New Item</h1>
                <NewItem/>
            </div>
        </div>
    );
}