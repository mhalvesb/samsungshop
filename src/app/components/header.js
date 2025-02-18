"use client"

import { useRouter } from "next/navigation"



export default function MyHeader({withContents}){

    const router = useRouter();


    const homePage = () =>{
        router.push("/home");
    }

    const smartPhonePage = () =>{
        router.push("/smartphone");
    }
    const smartWatchPage = () =>{
        router.push("/smartwatch");
    }

    const tabletsPage = () =>{
        router.push("/tablet")
    }

    const tvsPage = () =>{
        router.push("/televisores");
    }

    const fonesPage = () =>{
        router.push("/fones");
    }

    const monitoresPage = () =>{
        router.push("/monitores");
    }

    const loginPage = () =>{
        router.push("/login");
    }
    return(
        <header className={`flex flex-col ${withContents ? "absolute" : ""}`}>
          
            <div className="bg-black w-screen h-24 px-[20%] flex items-center border-b-2 border-zinc-500">
                <img src="/assets/icons/2164197.png" alt="star" className="w-10 h-10 mr-2  cursor-pointer"></img>
                <h1 className="text-white text-4xl cursor-pointer" onClick={() => homePage()}>SmartPoint</h1>
                <div className="flex items-center w-11/12 relative box-border">
                <input type="text" className={`w-full p-2 h-12 mx-5 font-semibold rounded outline-none placeholder-slate-700 ${withContents ? "invisible" : ""}`} placeholder="O que você busca?"></input>
                <div className={`absolute right-40 px-2 py-2 cursor-pointer ${withContents ? "invisible" : "visible"}`}>
                  <img src="/assets/icons/2866321.png" className=" w-5 h-5 " alt="lupa"></img>
                </div>
                <div className={`flex ${withContents ? "invisible" : ""}`}>
                <img src="/assets/icons/heart.png" className="w-5 h-5 mx-4 cursor-pointer" alt=""></img>
                <img src="/assets/icons/bag.png" className="w-5 h-5 mx-4 cursor-pointer" alt=""></img>
                <img src="/assets/icons/user.png" className="w-5 h-5 mx-4 cursor-pointer" alt="" onClick={() => loginPage()}></img>
                </div>
                </div>
            </div>

            <div className={`bg-black w-screen h-12 px-[15%] flex items-center text-white ${withContents ? "invisible" : "visible"}`}>
                <ul className="flex justify-center w-full text-lg">
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl" onClick={() => smartPhonePage()}>SmartPhones</li>
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl" onClick={() =>smartWatchPage()}>SmartWatch</li>
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl" onClick={() => tabletsPage()}>Tablets</li>
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl" onClick={() => tvsPage()}>Televisores</li>
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl" onClick={() => fonesPage()}>Fones</li>
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl" onClick={() => monitoresPage()}>Monitores</li>
                </ul>
            </div>
        </header>
    )
}