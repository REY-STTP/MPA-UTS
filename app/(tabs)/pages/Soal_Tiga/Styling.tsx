import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Styling = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Tombol Pilihan</Text>

      <View style={styles.buttonContainer}>

        <Pressable
          style={[styles.button, styles.buttonBlue]}
          onPress={() => alert('Selamat Kamu Mendapat Uang 1M')}
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.buttonGreen]}
          onPress={() => alert('Selamat Kamu Mendapat Tiket Ke Surga')}
        >
          <Text style={styles.buttonText}>Button 2</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBlue: {
    backgroundColor: 'blue',
  },
  buttonGreen: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Styling;
