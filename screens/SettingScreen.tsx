import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const apiKey = Constants.expoConfig?.extra?.API_KEY;

const SettingScreen = () => {
  const [vehicles, setVehicles] = useState([]);
  const [route, setRoute] = useState('22');
  const [inputRoute, setInputRoute] = useState('22');

  const fetchVehicleData = async (selectedRoute: string) => {
    try {
        const response = await Axios.get('https://www.ctabustracker.com/bustime/api/v3/getvehicles', {
          params: {
            key: apiKey,
            format: 'json',
            rt: selectedRoute,
          },
        }
    );
    const vehicleData = response.data?.['bustime-response']?.vehicle || [];
    setVehicles(vehicleData);
    } catch (error) {
        console.error('Error fetching CTA data:', error);
    }
  };

    useEffect(() => {
        fetchVehicleData(route);
        const intervalId = setInterval(() => fetchVehicleData(route), 15000);
        return () => clearInterval(intervalId);
    
    }, [route]);

    const handleRouteChange = () => {
        setRoute(inputRoute.trim());
    }
  
  return (
        <View style={styles.searchContainer}>
          {vehicles.length > 0 ? (
          vehicles.map((vehicle, index) => (
            <View key={index} style={styles.vehicleContainer}>
              <Text style={styles.header}>Bus #{vehicle.vid}</Text>
              <Text>Route: {vehicle.rt}</Text>
              <Text>Destination: {vehicle.des}</Text>
              <Text>Location: {vehicle.lat}, {vehicle.lon}</Text>
            </View>
          ))
        ) : (
          <Text>Loading vehicle data...</Text>
        )}
        </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  vehicleContainer: {
    marginBottom: 16,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  }
});
export default SettingScreen;