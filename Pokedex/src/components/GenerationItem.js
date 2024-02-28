import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function GenerationItem({ generation }) {

    const navigation = useNavigation();

    const onGenerationPressed = () => {
        navigation.navigate("PokeList", { 
            genNb: generation.generation 
        })
    }

    return (
        <Pressable
            style={style.container}
            onPress={onGenerationPressed}
        >
            <View style={style.numberContainer}>
                <Text style={style.numberText}>{generation.generation}</Text>
            </View>
            <View style={style.bottomContainer}>
                <Text style={style.bottomText}>{generation.from}</Text>
                <Text style={style.bottomText}>{generation.to}</Text>
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    bottomText: {
        fontSize: 14,
        color: "#aaa",
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
    },
    container: {
        flex: 1,
        aspectRatio: 1,
        justifyContent: "center",
        backgroundColor: "#ddd",
        margin: 5,
        borderRadius: 20,
    },
    numberContainer: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    },
    numberText: {
        fontSize: 100,
        color: "#999"
    }
})