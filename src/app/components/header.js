export default function MyHeader(){
    return(
        <header className="flex flex-col">
          
            <div className="bg-black w-screen h-24 px-[20%] flex items-center border-b-2 border-zinc-500">
                <img src="/assets/icons/2164197.png" alt="star" className="w-10 h-10 mr-2  cursor-pointer"></img>
                <h1 className="text-white text-4xl cursor-pointer">SmartPoint</h1>
                <div className="flex items-center w-11/12 relative box-border">
                <input type="text" className="w-full p-2 h-12 mx-5 font-semibold rounded outline-none placeholder-slate-700" placeholder="O que você busca?"></input>
                <div className="absolute right-40 px-2 py-2 cursor-pointer">
                  <img src="/assets/icons/2866321.png" className=" w-5 h-5 " alt="lupa"></img>
                </div>
                <div className="flex">
                <img src="/assets/icons/heart.png" className="w-5 h-5 mx-4 cursor-pointer" alt=""></img>
                <img src="/assets/icons/bag.png" className="w-5 h-5 mx-4 cursor-pointer" alt=""></img>
                <img src="/assets/icons/user.png" className="w-5 h-5 mx-4 cursor-pointer" alt=""></img>
                </div>
                </div>
            </div>

            <div className="bg-black w-screen h-12 px-[15%] flex items-center text-white">
                <ul className="flex justify-center w-full text-lg">
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl">SmartPhones</li>
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl">SmartWatch</li>
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl">Tablets</li>
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl">Televisores</li>
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl">Fones</li>
                  <li className="px-4 cursor-pointer transition-all hover:bg-white hover:text-black rounded-xl">Monitores</li>
                </ul>
            </div>
        </header>
    )
}