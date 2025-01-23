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
                            <Filter name={"space"} htmlfor={"21p"} isChecked={selectedModels === "21p"} change={() => onChangeModels("21p")} labelName={"21 Polegadas"} id={"21p"}/>
                            <Filter name={"space"} htmlfor={"24p"} isChecked={selectedModels === "24p"} change={() => onChangeModels("24p")} labelName={"24 Polegadas"} id={"24p"}/>
                            <Filter name={"space"} htmlfor={"27p"} isChecked={selectedModels === "27p"} change={() => onChangeModels("27p")} labelName={"27 Polegadas"} id={"27p"}/>
                            <Filter name={"space"} htmlfor={"28p"} isChecked={selectedModels === "28p"} change={() => onChangeModels("28p")} labelName={"28 Polegadas"} id={"28p"}/>
                            <Filter name={"space"} htmlfor={"28p"} isChecked={selectedModels === "30p"} change={() => onChangeModels("30p")} labelName={"30 Polegadas"} id={"30p"}/>
                            <Filter name={"space"} htmlfor={"28p"} isChecked={selectedModels === "34p"} change={() => onChangeModels("34p")} labelName={"34 Polegadas"} id={"34p"}/>
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-lg font-medium border-b-2 border-gray-400 mb-2">Hz</p>
                            <div >
                                <Filter name={"space"} htmlfor={"60Hz"} isChecked={selectedSpace === "60Hz"} change={() => onChangeSpace("60Hz")} labelName={"60Hz"} id={"60Hz"}/>
                                <Filter name={"space"} htmlfor={"75Hz"} isChecked={selectedSpace === "75Hz"} change={() => onChangeSpace("75Hz")} labelName={"75Hz"} id={"75Hz"}/>
                                <Filter name={"space"} htmlfor={"120Hz"} isChecked={selectedSpace === "120Hz"} change={() => onChangeSpace("120Hz")} labelName={"120Hz"} id={"120Hz"}/>
                                <Filter name={"space"} htmlfor={"144Hz"} isChecked={selectedSpace === "144Hz"} change={() => onChangeSpace("144Hz")} labelName={"144Hz"} id={"144Hz"}/>
                                <Filter name={"space"} htmlfor={"240Hz"} isChecked={selectedSpace === "240Hz"} change={() => onChangeSpace("240Hz")} labelName={"240Hz"} id={"240Hz"}/>
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
                    <MyContents  PhoneName={"Monitor Samsung T450 24 75HZ FHD"} Price={"881,00"} CardPrice={"979,99"} PhonePhoto={"/assets/monitores/monitorsamsung1.webp"}/>
                    <MyContents  PhoneName={"Monitor Gamer Samsung Odyssey Oled G6 27 360hz"} Price={"7.039,15"} CardPrice={"7165,99"} PhonePhoto={"/assets/monitores/monitorsamsung2.webp"}/>
                    <MyContents  PhoneName={"Monitor Gamer Samsung Odyssey G32 27 Full HD"} Price={"1.564,54"} CardPrice={"1.651,99"} PhonePhoto={"/assets/monitores/monitorsamsung3.webp"}/>
                    <MyContents  PhoneName={"Monitor Samsung Uhd 28'' Painel IPS 4k"} Price={"1.657,00"} CardPrice={"1.840,99"} PhonePhoto={"/assets/monitores/monitorsamsung4.webp"}/>
                    <MyContents  PhoneName={"Monitor Gamer Samsung Odyssey G5 34 Ultrawide"} Price={"3.239,00"} CardPrice={"3.540,99"} PhonePhoto={"/assets/monitores/monitorsamsung5.webp"}/>
                    
                </div>
                </div>
            </div>
        </div>
    )
}