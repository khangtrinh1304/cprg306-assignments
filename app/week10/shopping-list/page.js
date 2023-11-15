"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service"; 

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(""); // Initialize selectedItemName here

  useEffect(() => {
    async function loadItems() {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    }

    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const newItemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { ...newItem, id: newItemId }]);
    }
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
        <MealIdeas ingredient={selectedItemName} /> {/* Use selectedItemName here */}
      </div>
    </main>
  );
}
