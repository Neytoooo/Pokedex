import { Text, View } from "react-native";

export default function AboutTab({ route }) {
    const pokemon = route.params.pokemon

    return (<View>
        <Text>{pokemon.name.fr}</Text>
        <Text>{pokemon.name.fr}</Text>
        <Text>{pokemon.name.fr}</Text>
        <Text>{pokemon.name.fr}</Text>
    </View>)
}
