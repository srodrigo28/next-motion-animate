import { useFoodDataInsert } from "@/hooks/useFoodDataInsert"
import { IFoodData } from "@/interfaces/IFoodData"
import { useEffect, useState } from "react"

import "./modal.css"

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

interface ModalProps {
    closeModal() : void
}
export function CreateModal( closeModal : ModalProps){
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
  
    const { mutate, isSuccess } = useFoodDataInsert()
    
    const submit = () => {
        const foodData: IFoodData = {
            title, price, image
        }
        mutate(foodData)
    }

    useEffect( () => {
        if(!isSuccess) return
            closeModal();
        
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre novo Food</h2>

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