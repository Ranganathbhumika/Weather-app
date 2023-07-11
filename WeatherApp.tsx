import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface WeatherData {
  location: string;
  temperature: number;
  conditions: string;
  // Add any additional properties for weather data as needed
}

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState<null | WeatherData>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=f8b867f7b57442eda8e71101231007&q=${location}&days=5&aqi=no&alerts=yes`
      );
      // Update the state with the retrieved weather data
      setWeatherData({
        location: response.data.location.name,
        temperature: response.data.current.temp_c,
        conditions: response.data.current.condition.text,
      });
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Forecast</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={text => setLocation(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      
      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.location}>{weatherData.location}</Text>
          <Text style={styles.temperature}>{weatherData.temperature}°C</Text>
          <Text style={styles.conditions}>{weatherData.conditions}</Text>
          {/* Additional weather information and forecast can be displayed here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 40,
    textAlign: 'center',
    color: 'purple',
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 170,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  conditions: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default WeatherApp;
