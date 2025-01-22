"use client"

import {useState} from "react";
import Header from "../components/header";
import Footer  from "../components/footer";

export default function Samsung(){


    const [quantity, updateQuantity] = useState("1");
    const [setQVisiblity, updateQVisibility] = useState("invisible opacity-0");

    const setQuantity = (productQuantity) =>{
        updateQuantity(productQuantity);
        functionQVisiblity();
    }

    const functionQVisiblity = () =>{
        if(setQVisiblity == "invisible opacity-0"){
            updateQVisibility("visible opacity-100");
        } else{
            updateQVisibility("invisible opacity-0");
        }
    }
    return(
        <div>
            <Header/>

            <main className="px-[20%] py-10 flex flex-col bg-white justify-between">
                <div className="flex justify-between items-center">
                    <img src="/assets/phone/a6.webp" className="w-full rounded-lg border-2 mr-4 mb-4"/>
                        <div className="w-full ml-10">
                        <p className="text-3xl font-bold border-b-2 pb-4">Samsung Galaxy S21 5G 128GB Azul</p>
                        <p className=" my-1 text-lg flex flex-col">Por apenas: <span className="font-bold text-green-800 text-3xl my-1">R$ 999,99</span>no boleto ou no pix</p>
                        <p className="text-sm">Ou por <span className="font-medium text-green-900 text-2xl my-1">R$ 999,99 </span> no cartão em até 10x de 99,99</p>
                        <div className="flex flex-col">
                            <label htmlFor="quantidade" className="text-gray-800 font-medium pt-4 pb-2">Quantidade</label>
                            <div>
                                <button className="w-96 bg-gray-200 rounded-lg text-start pl-4 h-10" onClick={() => functionQVisiblity()}>
                                    <span>{quantity} {quantity > 1 ? "unidades" : "unidade"}</span>
                                </button>
                                <div className={`flex flex-col items-start absolute bg-gray-300 rounded-lg w-96 mt-2 border-2 ${setQVisiblity} transition-all duration-200`}>
                                <button className={`h-10 w-full pl-4 text-start ${quantity == 1 ? "bg-blue-200  font-medium" : ""}`} onClick={() => setQuantity("1")}><span>1 unidade</span></button>
                                    <button className={`h-10 w-full pl-4 text-start ${quantity == 2 ? "bg-blue-200  font-medium" : ""}`} onClick={() => setQuantity("2")}><span>2 unidades</span></button>
                                    <button className={`h-10 w-full pl-4 text-start ${quantity == 3 ? "bg-blue-200  font-medium" : ""}`} onClick={() => setQuantity("3")}><span>3 unidades</span></button>
                                    <button className={`h-10 w-full pl-4 text-start ${quantity == 4 ? "bg-blue-200  font-medium" : ""}`} onClick={() => setQuantity("4")}><span>4 unidades</span></button>
                                    <button className={`h-10 w-full pl-4 text-start ${quantity == 5 ? "bg-blue-200  font-medium" : ""}`} onClick={() => setQuantity("5")}><span>5 unidades</span></button>
                                </div>
                            </div>
                        </div>
                        <form className="flex flex-row justify-start mt-6">
                            <button className="bg-black text-white py-2 my-2 rounded-lg px-20">Comprar agora</button>
                            <button className="bg-black text-white py-2 my-2 rounded-lg px-4 ml-4"><img src="/assets/icons/sacola.png" alt=""/></button>
                        </form>
                        <p className="text-gray-800 font-medium">Valor do frete</p>
                        <div className="flex">
                            <input type="text" placeholder="Digite seu cep" className="border-2 bg-gray-100 py-2 pl-2 outline-none rounded-lg"></input>
                            <button className="rounded-md bg-gray-500 text-white font-bold w-14 ml-2">Ok</button>
                        </div>
                        </div>
                </div>
                
                <div className="bg-gray-50 border-2 border-gray-100 shadow-md rounded-lg px-4 py-4">
                    
                    <div className="">
                    <p className="text-xl font-bold mt-5">Especificações:</p>
                    <p className="py-2 font-bold">Cor: <span className="text-blue-400 font-normal">Azul</span></p>
                    <p className="py-2 font-bold">Memória Interna: <span className="font-normal">256GB</span></p>
                    <p className="py-2 font-bold">Memória RAM <span className="font-normal">8GB</span></p>
                    <p className="py-2 font-bold">Camera Principal: <span className="font-normal"> 12MP</span></p>
                    <p className="py-2 font-bold">Camera Frontal: <span className="font-normal">10MP</span></p>
                    <p className="py-2 font-bold">Tamanho da tela: <span className="font-normal">6.2"</span></p>
                    <p className="py-2 font-bold">Marca: <span className="font-normal">Samsung</span></p>
                    </div>
                </div>

                
            </main>

            <Footer/>
        </div>
    )
}