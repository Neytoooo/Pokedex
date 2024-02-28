import { Text, View } from "react-native";

export default function EvolveTab({ route }) {
    const pokemon = route.params.pokemon

    return (<View>
        <Text>{pokemon.name.fr}</Text>
    </View>)
}
