export default function MyFooter(){
    return(
        <footer className="">
          <div className="h-auto bg-zinc-950 min-w-full px-[15%] flex items-center justify-between pb-4">
          <div className="">
            <p className="text-white font-medium text-xl">Formas de pagamento da Loja Virtual</p>
            <div className="flex items-center mt-2">
              <img src="/assets/icons/mastercard.png" className="size-10 mr-2"></img>
              <img src="/assets/icons/visa.png" className="size-10 mr-2"></img>
              <img src="/assets/icons/diners.png" className="size-10 mr-2"></img>
              <img src="/assets/icons/whiteqrcode.png" className="size-10 mr-2"></img>
              <img src="/assets/icons/american-express.png" className="size-10 mr-2"></img>
              <img src="/assets/icons/paypal.png" className="size-10 mr-2"></img>
              
            </div>
          </div>
          <div className="">
            <p className="text-white font-bold text-xl text-center">Redes Sociais</p>
            <ul className="flex">
              <li className="py-2 cursor-pointer flex flex-col items-center mx-2">
                <img src="/assets/icons/instagram.png" className="size-10"></img>
                <p className="text-zinc-300 font-medium">Instagram</p>
              </li>
              <li className="py-2 cursor-pointer flex flex-col items-center mx-2">
                <img src="/assets/icons/facebook.png" className="size-10"></img>
                <p className="text-zinc-300 font-medium inline-block">Facebook</p>
              </li>
              <li className="py-2 cursor-pointer flex flex-col items-center mx-2">
                <img src="/assets/icons/youtube.png" className="size-10"></img>
                <p className="text-zinc-300 font-medium inline-block">Youtube</p>
              </li>
            </ul>
          </div>
          </div>
          <div className="px-[15%]">
            <p className="text-zinc-700 font-medium text-base p-2">
            * Preços, formas de pagamento, produtos e informações que estão no site são exclusivos para vendas via internet. <br></br>

            Matriz: Avenida Ficticia, 5555 - Local Ficticio/RJ - CEP: 99999-9999 - CNPJ: 22.444.555/0000-11
            </p>
          </div>
        </footer>
    )
}