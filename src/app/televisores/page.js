"use client"

import MyHeader from "../components/header";
import MyContents from "../boxes/contents";
import Filter from "../boxes/filters";
import { useState, useEffect } from "react";
export default function SamsungTabs(){

    const [selectedSpace, updateSpace] = useState("todosgb");
    const [selectedModels, updateModels] = useState("");
    const [selectedPrice, updatePrice] = useState("");
        const onChangeSpace = (space) =>{
            updateSpace("");
            updateSpace(space);
            console.log(selectedSpace);
            return space;
        }

        const onChangeModels = (models) =>{
            updateModels(models);
            return models;
        }

        const onChangePrice = (price) =>{
            updatePrice(price);
            return price;
        }

    return(
        <div>
            <MyHeader/>

            <div className="flex px-[20%] py-5">
                <aside>
                    <div className="bg-white h-full w-96 px-10 rounded-lg shadow-lg">
                        <div className="py-2">
                            <p className="text-lg font-medium border-b-2 border-gray-400 mb-2">Modelos</p>
                            <div >
                            <Filter name={"space"} htmlfor={"tvs43"} isChecked={selectedModels === "tvs43"} change={() => onChangeModels("tvs43")} labelName={"Smart TV Samsung 43"} id={"tvs43"}/>
                            <Filter name={"space"} htmlfor={"tvs65"} isChecked={selectedModels === "tvs65"} change={() => onChangeModels("tvs65")} labelName={"Smart TV Samsung 65"} id={"tvs65"}/>
                            <Filter name={"space"} htmlfor={"tvs32"} isChecked={selectedModels === "tvs32"} change={() => onChangeModels("tvs32")} labelName={"Smart TV Samsung 32"} id={"tvs32"}/>
                            <Filter name={"space"} htmlfor={"tvs50"} isChecked={selectedModels === "tvs50"} change={() => onChangeModels("tvs50")} labelName={"Smart TV Samsung 50"} id={"tvs50"}/>
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-lg font-medium border-b-2 border-gray-400 mb-2">Resolução</p>
                            <div >
                                <Filter name={"space"} htmlfor={"HD"} isChecked={selectedSpace === "HD"} change={() => onChangeSpace("HD")} labelName={"HD"} id={"HD"}/>
                                <Filter name={"space"} htmlfor={"Full HD"} isChecked={selectedSpace === "Full HD"} change={() => onChangeSpace("Full HD")} labelName={"Full HD"} id={"Full HD"}/>
                                <Filter name={"space"} htmlfor={"Ultra HD 4K"} isChecked={selectedSpace === "Ultra HD 4K"} change={() => onChangeSpace("Ultra HD 4K")} labelName={"Ultra HD 4K"} id={"Ultra HD 4K"}/>
                                <Filter name={"space"} htmlfor={"Ultra HD 8k"} isChecked={selectedSpace === "Ultra HD 8k"} change={() => onChangeSpace("Ultra HD 8k")} labelName={"Ultra HD 8k"} id={"Ultra HD 8k"}/>
                                <Filter name={"space"} htmlfor={"todosgb"} isChecked={selectedSpace === "todosgb"} change={() => onChangeSpace("todosgb")} labelName={"Todos"} id={"todosgb"}/>
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-lg font-medium border-b-2 border-gray-400 mb-2">Preço</p>
                            <div>
                                <Filter name={"price"} htmlfor={"999"} isChecked={selectedPrice === "999"} change={() => onChangePrice("999")} labelName={"até R$ 999,00"} id={"999"}/>
                                <Filter name={"price"} htmlfor={"1999"} isChecked={selectedPrice === "1999"} change={() => onChangePrice("1999")} labelName={"até R$ 1.999,00"} id={"1999"}/>
                                <Filter name={"price"} htmlfor={"2999"} isChecked={selectedPrice === "2999"} change={() => onChangePrice("2999")} labelName={"até R$ 2.999,00"} id={"2999"}/>
                                <Filter name={"price"} htmlfor={"3999"} isChecked={selectedPrice === "3999"} change={() => onChangePrice("3999")} labelName={"até R$ 3.999,00"} id={"3999"}/>
                            </div>
                        </div>
                    </div>
                    
                </aside>
                <div className="ml-10">
                    <p className="text-2xl font-bold ml-2">Televisores</p>
                <div className="grid grid-cols-3 gap-2">
                    <MyContents  PhoneName={"Smart TV LED 43 Full HD"} Price={"1.890,00"} CardPrice={"3165,99"} PhonePhoto={"/assets/televisores/tv1.webp"}/>
                    <MyContents  PhoneName={"Smart TV 65 Crystal UHD 4K"} Price={"4.434,15"} CardPrice={"7165,99"} PhonePhoto={"/assets/televisores/tv2.webp"}/>
                    <MyContents  PhoneName={"Smart TV 32 HD Led"} Price={"1.188,54"} CardPrice={"1.251,99"} PhonePhoto={"/assets/televisores/tv3.webp"}/>
                    <MyContents  PhoneName={"Smart TV 50 UHD 4K Crystal"} Price={"999,00"} CardPrice={"1.140,99"} PhonePhoto={"/assets/televisores/tv4.webp"}/>
                    
                </div>
                </div>
            </div>
        </div>
    )
}