'use client'

import "./food.css"

import { Card } from "@/components/card";
import { useFoodData } from "@/hooks/useFoodData";
import Link from "next/link";
import { useState } from "react";

export default function Food(){
    const { data } = useFoodData();

    return(
        <div className="flex items-center justify-center flex-col">
            <header className="flex items-center justify-between w-[800px]">
                <h1 className="p-10 text-6xl">Cardapio  </h1>
                
                <Link href="/food/create">
                    <button className=" p-2 bg-green-600 text-white rounded-md ">Novo</button>
                </Link>
            </header>
            {/* <span>{ Date.now() }</span> */}
            
            <div className="card-grid">
                { data?.map( item =>
                    <Card 
                        key={item.id}
                        image={item.image} 
                        title={item.title} 
                        price={Number(item.price)} 
                    />
                )}
            </div>
        </div>
    )
}