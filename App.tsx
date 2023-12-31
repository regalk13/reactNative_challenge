/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  Pressable
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import EnvioInfo from "./src/pages/envioInfo.tsx";

import CapturaTensio from "./src/pages/capturaTensio.tsx";
import CapturaOxi from "./src/pages/capturaOxi.tsx";
import CapturaTermo from "./src/pages/capturaTermo.tsx";
import Home from "./src/pages/home.tsx";


import Icon from 'react-native-vector-icons/FontAwesome6';

const seperatorStyles: viewStyle = {
    height: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ddd',
};

const Seperator = () => <View style={seperatorStyles} />

const Drawer = createDrawerNavigator();
const App = () => {
    return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Envia Información" screenOptions={{drawerPosition:'right',headerShown:false }}>
        <Drawer.Screen  name="Envia Información" component={EnvioInfo} options={{ headerShown: false }}/>
        <Drawer.Screen  name="Captura Tensiometro" component={CapturaTensio} options={{ headerShown: false }}/>
        <Drawer.Screen  name="Captura Termometro" component={CapturaTermo} options={{ headerShown: false }}/>
        <Drawer.Screen  name="Captura Oximetro" component={CapturaOxi} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    );
};

export default App;
