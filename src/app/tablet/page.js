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
                            <Filter name={"space"} htmlfor={"gt6"} isChecked={selectedModels === "gt6"} change={() => onChangeModels("gt6")} labelName={"Galaxy Tab 6"} id={"gt6"}/>
                            <Filter name={"space"} htmlfor={"ga9"} isChecked={selectedModels === "ga9"} change={() => onChangeModels("ga9")} labelName={"Galaxy Tab A9"} id={"ga9"}/>
                            <Filter name={"space"} htmlfor={"gs9"} isChecked={selectedModels === "gs9"} change={() => onChangeModels("gs9")} labelName={"Galaxy Tab S9"} id={"gs9"}/>
                            <Filter name={"space"} htmlfor={"ga7"} isChecked={selectedModels === "ga7"} change={() => onChangeModels("ga7")} labelName={"Galaxy Tab A7"} id={"ga7"}/>
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-lg font-medium border-b-2 border-gray-400 mb-2">Memoria Interna</p>
                            <div >
                                <Filter name={"space"} htmlfor={"16GB"} isChecked={selectedSpace === "16GB"} change={() => onChangeSpace("16GB")} labelName={"16GB"} id={"16GB"}/>
                                <Filter name={"space"} htmlfor={"32GB"} isChecked={selectedSpace === "32GB"} change={() => onChangeSpace("32GB")} labelName={"32GB"} id={"32GB"}/>
                                <Filter name={"space"} htmlfor={"64GB"} isChecked={selectedSpace === "64GB"} change={() => onChangeSpace("64GB")} labelName={"64GB"} id={"64GB"}/>
                                <Filter name={"space"} htmlfor={"128GB"} isChecked={selectedSpace === "128GB"} change={() => onChangeSpace("128GB")} labelName={"128GB"} id={"128GB"}/>
                                <Filter name={"space"} htmlfor={"256GB"} isChecked={selectedSpace === "256GB"} change={() => onChangeSpace("256GB")} labelName={"256GB"} id={"256GB"}/>
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
                    <p className="text-2xl font-bold ml-2">Tablets</p>
                <div className="grid grid-cols-3 gap-2">
                    <MyContents  PhoneName={"Galaxy Tab S6"} Price={"1.994,00"} CardPrice={"2.099,99"} PhonePhoto={"/assets/tablets/gtab1.webp"}/>
                    <MyContents  PhoneName={"Galaxy Tab A9"} Price={"929,00"} CardPrice={"1299,99"} PhonePhoto={"/assets/tablets/gtab2.webp"}/>
                    <MyContents  PhoneName={"Galaxy Tab S9"} Price={"2.763,00"} CardPrice={"3.799,99"} PhonePhoto={"/assets/tablets/gtab3.webp"}/>
                    <MyContents  PhoneName={"Galaxy Tab A7"} Price={"999,00"} CardPrice={"1.140,99"} PhonePhoto={"/assets/tablets/gtab4.webp"}/>
                    
                </div>
                </div>
            </div>
        </div>
    )
}