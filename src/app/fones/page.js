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
                            <Filter name={"space"} htmlfor={"gb3"} isChecked={selectedModels === "gb3"} change={() => onChangeModels("gb3")} labelName={"Galaxy Buds 3"} id={"gb3"}/>
                            <Filter name={"space"} htmlfor={"gb2"} isChecked={selectedModels === "gb2"} change={() => onChangeModels("gb2")} labelName={"Galaxy Buds 2"} id={"gb2"}/>
                            <Filter name={"space"} htmlfor={"gb"} isChecked={selectedModels === "gb"} change={() => onChangeModels("gb")} labelName={"Galaxy Buds"} id={"gb"}/>
                            
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-lg font-medium border-b-2 border-gray-400 mb-2">Resolução</p>
                            <div >
                                <Filter name={"space"} htmlfor={"colorblack"} isChecked={selectedSpace === "colorblack"} change={() => onChangeSpace("colorblack")} labelName={"Preto"} id={"colorblack"}/>
                                <Filter name={"space"} htmlfor={"colorviolet"} isChecked={selectedSpace === "colorviolet"} change={() => onChangeSpace("colorviolet")} labelName={"Violeta"} id={"colorviolet"}/>
                                <Filter name={"space"} htmlfor={"colorwhite"} isChecked={selectedSpace === "colorwhite"} change={() => onChangeSpace("colorwhite")} labelName={"Branco"} id={"colorwhite"}/>
                                <Filter name={"space"} htmlfor={"colorpink"} isChecked={selectedSpace === "colorpink"} change={() => onChangeSpace("colorpink")} labelName={"Rosa"} id={"colorpink"}/>
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
                    <p className="text-2xl font-bold ml-2">Fones</p>
                <div className="grid grid-cols-3 gap-2">
                    <MyContents  PhoneName={"Galaxy Buds 3 PRO AI Prata"} Price={"1.846,07"} CardPrice={"2.165,99"} PhonePhoto={"/assets/fones/gb1.webp"}/>
                    <MyContents  PhoneName={"Galaxy Buds 2 PRO Violeta"} Price={"1.176,15"} CardPrice={"1.265,99"} PhonePhoto={"/assets/fones/gb2.webp"}/>
                    <MyContents  PhoneName={"Galaxy Buds PRO SM-R190"} Price={"619,54"} CardPrice={"629,99"} PhonePhoto={"/assets/fones/gb3.webp"}/>
                    <MyContents  PhoneName={"Galaxy Buds 2 PRO Preto "} Price={"755,00"} CardPrice={"814,99"} PhonePhoto={"/assets/fones/gb4.webp"}/>
                    
                </div>
                </div>
            </div>
        </div>
    )
}