import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AboutTab from "./tabs/AboutTab";
import StatsTab from "./tabs/StatsTab";
import EvolveTab from "./tabs/EvolveTab";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function PokemonTabs({ route }) {

    const navigation = useNavigation();
    const pokemon = route.params.pokemon;
    const maxStats = route.params.maxStats;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: pokemon.name.fr
        })
    })


    return (<Tab.Navigator>
        <Tab.Screen
            name="PokeAbout"
            component={AboutTab}
            initialParams={{
                pokemon: pokemon,
            }}
            options={{
                title: "A propos"
            }} />
        <Tab.Screen
            name="PokeStats"
            component={StatsTab}
            initialParams={{
                pokemon: pokemon,
                maxStats: maxStats
            }}
            options={{
                title: "Stats"
            }} />
        <Tab.Screen
            name="PokeEvolve"
            component={EvolveTab}
            initialParams={{
                pokemon: pokemon,
            }}
            options={{
                title: "Évolutions"
            }} />
    </Tab.Navigator>);
}