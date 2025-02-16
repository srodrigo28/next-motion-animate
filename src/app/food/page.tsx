'use client'

import "./food.css"

import { Card } from "@/components/card";
import { CreateModal } from "@/components/create-modal";
import { useFoodData } from "@/hooks/useFoodData";
import { useState } from "react";

export default function Food(){
    const { data } = useFoodData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => {
        setIsModalOpen(prev => !prev)
    }

    return(
        <div className="flex items-center justify-center flex-col">
            <h1 className="p-10 text-6xl">Cardapio -  </h1>
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
            
            {isModalOpen && <CreateModal closeModal={ handleOpen } />}
            <button onClick={handleOpen} className=" p-2 bg-green-600 text-white rounded-md self-end mr-96 absolute top-16">Novo</button>
        </div>
    )
}