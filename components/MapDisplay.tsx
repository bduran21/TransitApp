import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, {Marker } from "react-native-maps";

const MapDisplay = () => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
            latitude: 41.8781,
            longitude: -87.6298,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
            <Marker coordinate={{ latitude: 41.8781, longitude: -87.6298 }} title="Chicago" />
        </MapView>

    )
}

const styles = StyleSheet.create({
    map: {
    width: '90%',
    height: '60%',
    marginTop: 10,
  },
})

export default MapDisplay;