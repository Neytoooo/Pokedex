import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import PokeCard from "../components/PokeCard";

export default function PokeListScreen({ route }) {
    const generationNumber = route.params.genNb
    const navigation = useNavigation();
    const [pokemons, setPokemons] = useState([]);
    const [maxStats, setMaxstats] = useState({});

    //Executé une seule fois au lancement 
    useLayoutEffect(() => {
        //Permet de modifier les options de navigation
        navigation.setOptions({
            //On change le titre
            title: "Génération n°" + generationNumber
        })
    })

    const getGenPokemons = () => {
        fetch("https://api-pokemon-fr.vercel.app/api/v1/gen/" + generationNumber)
            .then((response) => { return response.json() })
            .then((response) => {
                setPokemons(response)

                let maxStats = {};
                for (const poke of response) {
                    for (const stat of [
                        "hp",
                        "atk",
                        "def",
                        "spe_atk",
                        "spe_def",
                        "vit"]) {
                        if (maxStats[stat] == undefined) {
                            maxStats[stat] = poke.stats[stat];
                        } else {
                            if (poke.stats[stat] > maxStats[stat]) {
                                maxStats[stat] = poke.stats[stat];
                            }
                        }
                    }
                }
                setMaxstats(maxStats);
                
            })
    }

    //Permet d'executer du code au premier démarrage 
    useEffect(() => {
        getGenPokemons()
    }, []);


    return (<FlatList
        data={pokemons}
        renderItem={({ item }) => {
            return <PokeCard pokemon={item} maxStats={maxStats} />
        }}
    />)
}