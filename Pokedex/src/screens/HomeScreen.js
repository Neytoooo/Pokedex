import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import GenerationItem from "../components/GenerationItem";

export default function HomSecreen() {

    const [generations,setGenerations] = useState([]);

    const getGenData = () => {
        fetch("https://api-pokemon-fr.vercel.app/api/v1/gen")
            .then((response) => {return response.json()})
            .then((generations) => {
                setGenerations(generations)
            })
    }

    //Permet d'executer du code au premier démarrage 
    useEffect(() => {
        getGenData()
    },[]);

    return (<View>
        <FlatList
            data={generations}
            numColumns={2}
            renderItem={({item}) => {
                return (<GenerationItem generation={item}/>)
              }}>
        </FlatList>
    </View>)
}