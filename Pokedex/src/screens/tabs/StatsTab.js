import { Text, View } from "react-native";
import * as Progress from 'react-native-progress';

export default function StatsTab({ route }) {
    const pokemon = route.params.pokemon
    const maxStats = route.params.maxStats
    return (<View>
        <Text>{pokemon.name.fr}</Text>
        <Progress.Bar progress={0.3} width={200} />
    </View>)
}
