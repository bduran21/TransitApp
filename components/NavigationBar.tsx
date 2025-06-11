import React from "react";
import {StyleSheet, Text, View, TouchableOpacity } from "react-native";

const NavigationBar = () => {
    return (
        <View style={styles.topRow}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Settings </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Bookmark </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Refresh </Text>
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default NavigationBar;