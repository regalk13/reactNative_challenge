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

import NavBar from "../components/NavBar.tsx"
import MainInfo from "../components/MainInfo.tsx"
import ListItem from "../components/listItem.tsx"
import ButtonAction from "../components/ButtonAction.tsx"

import Icon from 'react-native-vector-icons/FontAwesome6';

const seperatorStyles: viewStyle = {
    height: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ddd',
};

const Seperator = () => <View style={seperatorStyles} />

const EnvioInfo = (props) => {
    return (
        <View>
            <NavBar>
            </NavBar>

            <MainInfo>
            </MainInfo>

            <ListItem main={require( "../iconos/ICONOS-12.png")} name="Tensiometro" page="Captura Tensiometro">
            </ListItem>

            <Seperator />
            <ListItem main={require( "../iconos/ICONOS-14.png")} name="Termometro" page="Captura Termometro">
            </ListItem>
            
            <Seperator />
            <ListItem main={require( "../iconos/ICONOS-16.png")} name="Oximetro" page="Captura Oximetro">
            </ListItem>
            
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: 60, marginTop: 20}}>
                <ButtonAction name="Enviar" color="#0586e1" >
                </ButtonAction>
                <ButtonAction name="Atras" color="#acb0b3" >
                </ButtonAction>
            </View>
       </View>
    );
};

export default EnvioInfo;
