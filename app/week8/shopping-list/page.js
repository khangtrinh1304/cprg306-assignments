"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
    }
  }, [user]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (selectedItem) => {
    const cleanedItemName = selectedItem.name
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanedItemName);
  };

  if (!user) {
    return null;
  }

  return (
    <main className="bg-blue-900 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
      <div className="flex">
        <div className="bg-green-300 p-6 rounded shadow-lg mr-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
