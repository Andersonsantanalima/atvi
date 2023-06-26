import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import TelaInicial from './componets/TelaInicial';
import TelaCatalogo from './componets/TelaCatalogo';
import TelaContato from './componets/TelaContato';
import Detalhes from './componets/Detalhes';

const Abas = createBottomTabNavigator();
const Tab = createBottomTabNavigator();



function MyTabs () {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
        headerStyle:{
          backgroundColor: '#400303'  
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center',

        tabBarStyle: {
          backgroundColor: "#fff"
        },
        tabBarLabelStyle:{
          fontSize: 14,
          fontWeight: "bold"
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: "#ab887c",
        tabBarActiveBackgroundColor: "#400303",
      }}>
        <Tab.Screen
          name="Início"
          component = { TelaInicial }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 20 } />
            ),
          }}
        />

        <Tab.Screen
          name="Catálogo"
          component = { TelaCatalogo }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="wine-bottle"  color={ color } size={ 20 }/>
            ),
          }}
        />

        <Tab.Screen
          name="Contato"
          component = { TelaContato }
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="contacts" color={ color } size={ 20 }/>
            ),
          }}
        />

        <Tab.Screen name="Tabs" component={MyTabs} />
				<Tab.Screen name="Detalhes" component={Detalhes} />
      </Tab.Navigator>
      
    </NavigationContainer>
  )
}
export default function App() {
	return (
    <NavigationContainer>

		<Abas.Navigator initialRouteName="Tabs"
      screenOptions={{
        headerShown: false}}>
			<Abas.Screen name="Home" component={ MyTabs } />
			<Abas.Screen name="VInhos" component={  TelaCatalogo} />
		</Abas.Navigator>
    </NavigationContainer>
	);
}