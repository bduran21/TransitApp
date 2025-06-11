import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomBottomSheet from "../components/CustomBottomSheet";
import NavigationBar from "@/components/NavigationBar";
import MapDisplay from "@/components/MapDisplay";

export default function Index() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.innerContainer}>
        <NavigationBar />
        <MapDisplay />
        <CustomBottomSheet />
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
});

