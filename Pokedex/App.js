import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokeListScreen from './src/screens/PokeListScreen';
import PokemonTabs from './src/screens/PokemonTabs';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Accueil"
          }} />

        <Stack.Screen
          name="PokeList"
          component={PokeListScreen}
          options={{
            title: "Generation"
          }}
        />

        <Stack.Screen
          name="PokeDetails"
          component={PokemonTabs}
          options={{
            title: "Pokemon"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

