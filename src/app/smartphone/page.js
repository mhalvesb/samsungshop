"use client"

import MyHeader from "../components/header";
import MyContents from "../boxes/contents";
import Filter from "../boxes/filters";
import { useState, useEffect } from "react";
export default function SmartPhones(){

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
                            <Filter name={"space"} htmlfor={"s20"} isChecked={selectedModels === "s20"} change={() => onChangeModels("s20")} labelName={"Samsung Galaxy S20"} id={"s20"}/>
                            <Filter name={"space"} htmlfor={"s21"} isChecked={selectedModels === "s21"} change={() => onChangeModels("s21")} labelName={"Samsung Galaxy S21"} id={"s21"}/>
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-lg font-medium border-b-2 border-gray-400 mb-2">Espaço</p>
                            <div >
                                <Filter name={"space"} htmlfor={"32gb"} isChecked={selectedSpace === "32gb"} change={() => onChangeSpace("32gb")} labelName={"32GB"} id={"32gb"}/>
                                <Filter name={"space"} htmlfor={"64gb"} isChecked={selectedSpace === "64gb"} change={() => onChangeSpace("64gb")} labelName={"64GB"} id={"64gb"}/>
                                <Filter name={"space"} htmlfor={"128gb"} isChecked={selectedSpace === "128gb"} change={() => onChangeSpace("128gb")} labelName={"128GB"} id={"128gb"}/>
                                <Filter name={"space"} htmlfor={"256gb"} isChecked={selectedSpace === "256gb"} change={() => onChangeSpace("256gb")} labelName={"256GB"} id={"256gb"}/>
                                <Filter name={"space"} htmlfor={"512gb"} isChecked={selectedSpace === "512gb"} change={() => onChangeSpace("512gb")} labelName={"512GB"} id={"512gb"}/>
                                <Filter name={"space"} htmlfor={"todosgb"} isChecked={selectedSpace === "todosgb"} change={() => onChangeSpace("todosgb")} labelName={"Todos"} id={"todosgb"}/>
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-lg font-medium border-b-2 border-gray-400 mb-2">Preço</p>
                            <div>
                                <Filter name={"price"} htmlfor={"999"} isChecked={selectedPrice === "999"} change={() => onChangePrice("999")} labelName={"R$ 999,00"} id={"999"}/>
                                <Filter name={"price"} htmlfor={"1999"} isChecked={selectedPrice === "1999"} change={() => onChangePrice("1999")} labelName={"R$ 1.999,00"} id={"1999"}/>
                                <Filter name={"price"} htmlfor={"2999"} isChecked={selectedPrice === "2999"} change={() => onChangePrice("2999")} labelName={"R$ 2.999,00"} id={"2999"}/>
                                <Filter name={"price"} htmlfor={"3999"} isChecked={selectedPrice === "3999"} change={() => onChangePrice("3999")} labelName={"R$ 3.999,00"} id={"3999"}/>
                            </div>
                        </div>
                    </div>
                    
                </aside>
                <div className="ml-10">
                    <p className="text-2xl font-bold ml-2">Celulares samsung</p>
                <div className="grid grid-cols-3 gap-2">
                    <MyContents  PhoneName={"Samsung Galaxy S23"} Price={"1.799,00"} CardPrice={"1.899,99"} PhonePhoto={"/assets/phone/s23fe.webp"}/>
                    <MyContents  PhoneName={"Samsung Galaxy S23"} Price={"1.799,00"} CardPrice={"1.899,99"} PhonePhoto={"/assets/phone/s23fe.webp"}/>
                    <MyContents  PhoneName={"Samsung Galaxy S23"} Price={"1.799,00"} CardPrice={"1.899,99"} PhonePhoto={"/assets/phone/s23fe.webp"}/>
                    <MyContents  PhoneName={"Samsung Galaxy S23"} Price={"1.799,00"} CardPrice={"1.899,99"} PhonePhoto={"/assets/phone/s23fe.webp"}/>
                    <MyContents  PhoneName={"Samsung Galaxy S23"} Price={"1.799,00"} CardPrice={"1.899,99"} PhonePhoto={"/assets/phone/s23fe.webp"}/>
                </div>
                </div>
            </div>
        </div>
    )
}