'use client'

import "./food.css"

import { Card } from "@/components/card";
import { CreateModal } from "@/components/create-modal";
import { useFoodData } from "@/hooks/useFoodData";
import { useState } from "react";

export default function Food(){
    const { data } = useFoodData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = (e: any) => {
        e.preventDefault()

        setIsModalOpen(prev => !prev)
    }

    return(
        <div>
            <h1>Cardapio</h1>
            
            <div className="card-grid">
                { data?.map( item =>
                    <Card 
                        image={item.image} 
                        title={item.title} 
                        price={Number(item.price)} 
                    />
                )}
            </div>
            {isModalOpen && <CreateModal closeModal={ handleOpen } />}
            <button onClick={handleOpen} className=" p-2 bg-green-600 text-white rounded-md">Novo</button>
        </div>
    )
}