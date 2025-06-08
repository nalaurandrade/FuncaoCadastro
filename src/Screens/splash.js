import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    
 const animacao = require('../../assets/splash.json');
 
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        speed={0.5}
        style={{
            width: '100%',
            height: '100%',
          backgroundColor: '#000',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={animacao}
        onAnimationFinish={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Splash;