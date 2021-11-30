import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./App-Style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./components/navigator/RootStack";
import InicioStack from "./components/navigator/InicioStack";
import store from "./redux/store";
import { Provider } from "react-redux";
import Authentication from "./components/Authentication/Authentication";
import Shifts from "./components/Training/Shifts";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [log, setLog] = useState(true)


  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name= 'Auth' component={RootStack} options = {{headerShown: false}}/> 
              <Stack.Screen name= 'Inicio' component={InicioStack} options = {{headerShown: false}} />
              <Stack.Screen name= 'Shifts' component={Shifts} options={{
                   
                    title:'Turnos',
                    headerTitleStyle:{ color: '#fff'}, 
                    headerStyle:{ backgroundColor: '#041D25'},}}
                    />
          </Stack.Navigator>
          <StatusBar/>
        </NavigationContainer>
      </Provider>
    </>
  );
}
