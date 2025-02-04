"use client"

import { useRouter } from "next/navigation";

import MyHeader from "../components/header";




export default function Login(){
    const router = useRouter();


    const registerPage = () =>{
        router.push("/register");
    }
    return(
        <div>
            <MyHeader withContents={true}/>
        
        <div className="w-full h-screen flex items-center justify-center bg-gray-800">
            
            <div className="flex h-3/4 px-[20%]">
                <img src="/assets/login/shopping.png" alt="banner" className="h-full w-full"/>
                <div className="bg-gray-50 flex flex-col items-center justify-between h-full px-20 py-20">
                    <div className="flex items-center justify-center mb-10">
                        <img src="/assets/icons/2164197.png" className="w-8 h-auto mr-2"/> 
                        <h1 className="text-3xl font-bold">SmartPoint</h1>
                    </div>
                    <h1 className="text-center text-2xl font-medium text-gray-500">Bem vindo ao SmartPoint</h1>


                    <div className="flex flex-col">
                        <label htmlFor="login" className="mb-1 text-gray-500">Login</label>
                        <input type="text" id="login" name="login" className="h-6 bg-transparent outline-none border-b-2 w-96"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="pass" className="mb-1 text-gray-500">Senha</label>
                        <input type="text" id="pass" name="pass" className="h-6 bg-transparent outline-none border-b-2 w-96"/>
                        <p className="text-right mt-1 text-gray-500 cursor-pointer">Esqueceu a senha?</p>
                    </div>
                    <button className="bg-black text-white font-semibold w-full py-2 my-4 rounded-lg">Entrar</button>
                    <p className="cursor-pointer" onClick={() => registerPage()}>Não possui uma conta?</p>
                </div>
            </div>
        </div>
        </div>
    )
}