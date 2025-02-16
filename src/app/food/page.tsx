'use client'

import { Card } from "@/components/card";
import { IFoodData } from "@/interfaces/IFoodData"

export default function Food(){
    const data: IFoodData[] = [];

    return(
        <div>
            <h1>Cardapio</h1>
            
            <div className="card-grid">
                { data.map( item =>
                    <Card 
                        image={item.image} 
                        title={item.title} 
                        price={item.price} 
                    />
                )}
            </div>
        </div>
    )
}