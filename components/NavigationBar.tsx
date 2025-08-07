import React from "react";
import {StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "expo-router";

const NavigationBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topRow}>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        {/* <Text style={styles.buttonText}> Settings </Text> */}
        <Icon name="settings-outline" size={40} color="#000" />
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Bookmark </Text>
      </TouchableOpacity> */}

      <TouchableOpacity>
        <Icon name="refresh-sharp" size={40} color='#000' />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
});

export default NavigationBar;