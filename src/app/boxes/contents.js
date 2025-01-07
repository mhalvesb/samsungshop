import { forwardRef } from "react"


const MyContents = forwardRef(({PhoneName, Price, CardPrice, PhonePhoto, Promotion, Size}, ref) => {
    return(
        <div ref={ref} className={`bg-white p-4 h-[440px] justify-center border-2 border-zinc-100 shadow-lg cursor-pointer select-none mx-2  my-2 flex rounded-xl flex-col hover:w-80 transition-all hover:shadow-2xl group`}>
                        <img src={PhonePhoto} alt="Smartphone" className=" max-w-52 self-center group-hover:max-w-60 transition-all duration-500"></img>
                        <p className="text-center pt-3 text-sm text-emerald-700 font-bold">Novo</p>
                        <h3 className="text-zinc-950 font-medium text-lg text-center pt-1 pb-2">{PhoneName}</h3>
                        <p className="text-zinc-400 font-light text-sm inline">A partir de: {Promotion ? <span className="line-through inline text-base text-red-600">{Promotion}</span> : ""}</p> 
                        <h3 className="text-emerald-800 font-bold text-2xl">R$ {Price}</h3>
                        <p className="text-zinc-400 font-light text-xs">no pix</p>
                    <div className="flex mt-2">
                        <img src="/assets/icons/creditcard.png" className="size-4 mr-1" alt="Card"></img>
                        <p className="text-xs">Ou <strong>R$ {CardPrice}</strong> em até 10x de R$ 138,90 sem juros</p>
                    </div>
        </div>
    );
});

export default MyContents;

