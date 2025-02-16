'use client'

import { useFoodDataInsert } from "@/hooks/useFoodDataInsert"
import { IFoodData } from "@/interfaces/IFoodData"
import { useState } from "react"
import { redirect, useRouter } from 'next/navigation'

import "./modal.css"
import Link from "next/link"

// Criando interface
interface InputProps{
    label: string
    value: string
    updateValue (value: any) : void
}

// Criando componente
const Input = ({ label, value,  updateValue} : InputProps ) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={ event => updateValue(event.target.value)}></input>
        </>
    )
}

export default function Create(){
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
  
    const { mutate, isSuccess } = useFoodDataInsert()
    
    const submit = () => {

        if(!title || !price || !image){
            alert("Preencher todos os campos")
            return
        }

        const foodData: IFoodData = {
            title, price, image
        }

        mutate(foodData)

        if(foodData){
            alert('Entrou')
            setTitle("")
            setPrice("")
            setImage("")
            
            redirect('/food')
        }
    }
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <header className="flex justify-between">
                    <h2>Cadastre novo</h2>
                    <Link href="/food">
                        <button className="
                        bg-red-500 
                        h-10 w-10 rounded-full text-white font-bold">X</button>
                    </Link>
                </header>
                <form className="input-container">
                    <Input label="titulo" value={title} updateValue={setTitle} />
                    <Input label="preço" value={price} updateValue={setPrice} />
                    <Input label="Image Url" value={image} updateValue={setImage} />
                </form>

                <button onClick={submit} className="p-2 bg-green-600 px-5 text-white text-lg rounded-md">Inserir</button>

            </div>
        </div>
    )
}