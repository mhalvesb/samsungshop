"use client"

import MyHeader from "../components/header";
import MyContents from "../boxes/contents";
import Filter from "../boxes/filters";
import { useState, useEffect } from "react";
export default function SmartWatch(){

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
                            <Filter name={"space"} htmlfor={"gf5"} isChecked={selectedModels === "gf5"} change={() => onChangeModels("gf5")} labelName={"Galaxy Watch 5"} id={"gf5"}/>
                            <Filter name={"space"} htmlfor={"gf6"} isChecked={selectedModels === "gf6"} change={() => onChangeModels("gf6")} labelName={"Galaxy Watch 6"} id={"gf6"}/>
                            <Filter name={"space"} htmlfor={"gw7"} isChecked={selectedModels === "gw7"} change={() => onChangeModels("gw7")} labelName={"Galaxy Watch 7"} id={"gw7"}/>
                            <Filter name={"space"} htmlfor={"gf3"} isChecked={selectedModels === "gf3"} change={() => onChangeModels("gf3")} labelName={"Galaxy Fit 3"} id={"gf3"}/>
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-lg font-medium border-b-2 border-gray-400 mb-2">Memoria Interna</p>
                            <div >
                                <Filter name={"space"} htmlfor={"128MB"} isChecked={selectedSpace === "128MB"} change={() => onChangeSpace("128MB")} labelName={"128MB"} id={"128MB"}/>
                                <Filter name={"space"} htmlfor={"256MB"} isChecked={selectedSpace === "256MB"} change={() => onChangeSpace("256MB")} labelName={"256MB"} id={"256MB"}/>
                                <Filter name={"space"} htmlfor={"1GB"} isChecked={selectedSpace === "1GB"} change={() => onChangeSpace("1GB")} labelName={"1GB"} id={"1GB"}/>
                                <Filter name={"space"} htmlfor={"4GB"} isChecked={selectedSpace === "4GB"} change={() => onChangeSpace("4GB")} labelName={"4GB"} id={"4GB"}/>
                                <Filter name={"space"} htmlfor={"16GB"} isChecked={selectedSpace === "16GB"} change={() => onChangeSpace("16GB")} labelName={"16GB"} id={"16GB"}/>
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
                    <p className="text-2xl font-bold ml-2">SmartWatch</p>
                <div className="grid grid-cols-3 gap-2">
                    <MyContents  PhoneName={"Galaxy Watch 6 Preto"} Price={"1.619,00"} CardPrice={"1.799,99"} PhonePhoto={"/assets/gwatch/g7.webp"}/>
                    <MyContents  PhoneName={"Galaxy Fit 3 Preto"} Price={"350,00"} CardPrice={"369,99"} PhonePhoto={"/assets/gwatch/g8.webp"}/>
                    <MyContents  PhoneName={"Galaxy Watch 5"} Price={"1.519,00"} CardPrice={"1.699,99"} PhonePhoto={"/assets/gwatch/g6.webp"}/>
                    <MyContents  PhoneName={"Galaxy Watch 5 Pro"} Price={"1.656,00"} CardPrice={"1.840,99"} PhonePhoto={"/assets/gwatch/g10.webp"}/>
                    
                </div>
                </div>
            </div>
        </div>
    )
}