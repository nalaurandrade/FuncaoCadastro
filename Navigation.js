import React from 'react';
import { createStackNavigator } 
from '@react-navigation/stack';
import { NavigationContainer } 
from '@react-navigation/native';
import Pagina1 from './src/Screens/Pagina1';
import Pagina2 from './src/Screens/Pagina2';
import HomeScreen from './src/Screens/HomeScreen';
import JokeDetailScreen from './src/Screens/JokeDetailScreen';
import Splash from './src/Screens/splash';
import exemploSkeleton from './src/Screens/exemploSkeleton';
import CadastroScreen from './src/Screens/CadastroScreen';
import ListaScreen from './src/Screens/ListaScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerMenu() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
       <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
        <Stack.Screen name="ListaScreen" component={ListaScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Pagina2" component={Pagina2} />
        <Stack.Screen name="exemploSkeleton" component={exemploSkeleton} />       
       
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pagina1">
        <Stack.Screen name="DrawerMenu" component={DrawerMenu}  options={{headerShown: false }}/>
         <Stack.Screen name="Pagina1" component={Pagina1} options={{headerShown: false }} />
          <Stack.Screen name="JokeDetail" component={JokeDetailScreen} options={{ title: 'Detalhe da Piada' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
