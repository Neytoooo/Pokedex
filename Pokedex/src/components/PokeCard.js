import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function PokeCard({ pokemon, maxStats }) {
    const mainType = pokemon.types[0];
    const navigation = useNavigation();

    const onPokemonPressed = () => {
        navigation.navigate("PokeDetails", {
            pokemon: pokemon,
            maxStats: maxStats
        })
    }

    return (
        <Pressable
            style={styles.container}
            onPress={onPokemonPressed}
        >
            <View style={styles.leftContainer}>
                <Text style={styles.pokedexId}>#{pokemon.pokedexId}</Text>
                <Text style={styles.pokeName}>{pokemon.name.fr}</Text>
                <View style={styles.typeContainer}>
                    {pokemon.types.map((type) => {
                        return (<View style={styles.typeItem}>
                            <Text style={styles.typeText}>{type.name}</Text>
                        </View>)
                    })}
                </View>
            </View>
            <Image
                style={styles.image}
                source={{ uri: pokemon.sprites.regular }}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "lightgray",
        margin: 10,
        borderRadius: 20,
    },
    leftContainer: {
        marginStart: 20,
    },
    image: {
        height: "100%",
        aspectRatio: 1,
    },
    pokedexId: {
        fontSize: 13,
        color: "#888"
    },
    pokeName: {
        fontSize: 18,
        color: "#555",
        marginVertical: 3,

    },
    typeContainer: {
        flexDirection: "row",
    },
    typeItem: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: "#999",
        marginHorizontal: 3,
        borderRadius: 5,
    },
    typeText: {
        color: "white"
    }
})