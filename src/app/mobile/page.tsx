import { FaRegUser } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Mobile(){
    return(
        <div className="bg-black h-screen w-screen">
            <div className="bg-slate-200 flex flex-col items-center h-screen lg:w-60 w-full">
                
                <div className=" p-2 w-full flex flex-flex-col items-center justify-between">
                    
                    <div className="bg-green-300 p-2 h-30 w-30 rounded-full">
                        <FaRegUser className="text-gray-600" />
                    </div>
                    
                    <div className="flex ml-4 flex-col p-2 flex-1 ">
                        <h2>Edson</h2>
                        <p>Editar Perfil</p>
                    </div>
                    
                    <RiArrowRightSLine className="text-green-600 font-bold" size={30}  />

                </div>

                <div className=" p-2 w-full flex flex-flex-col items-center justify-between">
                    
                    <div className="bg-green-300 p-2 h-30 w-30 rounded-full">
                        <FaRegUser className="text-gray-600" />
                    </div>
                    
                    <div className="flex ml-4 flex-col p-2 flex-1 ">
                        <h2>Edson</h2>
                        <p>Editar Perfil</p>
                    </div>
                    
                    <RiArrowRightSLine className="text-green-600 font-bold" size={30}  />
                    
                </div>

                <div className=" p-2 w-full flex flex-flex-col items-center justify-between">
                    
                    <div className="bg-green-300 p-2 h-30 w-30 rounded-full">
                        <FaRegUser className="text-gray-600" />
                    </div>
                    
                    <div className="flex ml-4 flex-col p-2 flex-1 ">
                        <h2>Edson</h2>
                        <p>Editar Perfil</p>
                    </div>
                    
                    <RiArrowRightSLine className="text-green-600 font-bold" size={30}  />
                    
                </div>
            </div>
        </div>
    )
}