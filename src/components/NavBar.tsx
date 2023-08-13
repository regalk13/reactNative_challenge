import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';


const NavBar = () => {
  return (
    <View style={styles.container}>

      <View style={styles.icons_container}>
            <Icon name="chevron-left" size={14} color="#fff" />
        <Icon name="bars" size={15} color="#fff" />
      </View>
      <Text style={styles.text}>Gestiona salud</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#0b73c2',
    minHeight: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  icons_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  text: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 30,
    color: "#fff",  
  }
});


export default NavBar;
