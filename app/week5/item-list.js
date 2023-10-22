"use client";

import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  const nameButtonClass = sortBy === "name" ? "bg-orange-500 font-bold text-white" : "bg-black font-bold text-white";
  const categoryButtonClass = sortBy === "category" ? "bg-orange-500 font-bold text-white" : "bg-black font-bold text-white";

  return (
    <div>
      <div className="flex space-x-4">
        <button
          className={`py-2 px-4 rounded ${nameButtonClass}`}
          onClick={handleSortByName}
        >
          Sort by Name
        </button>
        <button
          className={`py-2 px-4 rounded ${categoryButtonClass}`}
          onClick={handleSortByCategory}
        >
          Sort by Category
        </button>
      </div>

      <ul className="mt-4">
        {sortItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
