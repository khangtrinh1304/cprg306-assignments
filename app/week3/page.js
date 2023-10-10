import React from "react";
import ItemList from "./item-list";
export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
         <h1 className="text-4xl">Shopping List</h1>
        <div className="z-10 max-w-5xl w-full items-center  font-mono text-sm lg:flex">
       
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
         </div>
          <ItemList></ItemList>
        </div>  
        
      </main>
    );
  }