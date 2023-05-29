import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import TelaInicial from './componentes/TelaInicial/';
import TelaCatalogo from './componentes/TelaCatalogo';
import TelaContato from "./componentes/TelaContato";
import { color } from "react-native-reanimated";

const Aba = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Aba.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#400303'
        },
        headerTitleStyle:{
         color: 'red',
         fontWeight:14
        },
        // headerTitleAlignntColor:''
        tabBarStyle:{
        backgroundColor:'#fff'
        },
        tabBarLabelStyle:{
          fontSize:14,
          fontWeight:'bold'
        },
        tabBarActiveTintColor:'#fff'
        
      }}
      >
      <Aba.Screen  name="Inicio"    component={TelaInicial} 
      options={{
        tabBarIcon:({color})=>(<Entypo name="home" color={color} size={20} />)
      }}/>

      <Aba.Screen  name="Catalogo"  component={TelaCatalogo} 
           options={{
        tabBarIcon:({color})=>(<FontAwesome5 name="wine-bottle" color={color} size={20} />)
      }}/>

      <Aba.Screen  name="Contato"   component={TelaContato}  
           options={{
        tabBarIcon:({color})=>(<AntDesign name="contacts" color={color} size={20} />)
      }}/>
      </Aba.Navigator>
    </NavigationContainer>
  );
}


 