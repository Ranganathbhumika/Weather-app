import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface WelcomePageProps {
  handleTransition: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ handleTransition }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = () => {
    // Perform any necessary logic with the submitted mobile number
    // For example, you can make an API request to validate the number or save it to a database
    console.log('Submitted mobile number:', mobileNumber);
    // Transition to the OTP page
    handleTransition();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Weather App!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your mobile number"
        value={mobileNumber}
        onChangeText={text => setMobileNumber(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
    color: 'green',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    marginTop:150,
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
});

export default WelcomePage;
