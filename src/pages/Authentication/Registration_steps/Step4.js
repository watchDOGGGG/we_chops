import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import Buttonstyles from '../../../components/verification/styles';
//import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';


import Spinner from 'react-native-loading-spinner-overlay';
import tw from 'tailwind-react-native-classnames';

export default function Step4(){
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("verification")
    }, 3000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={loading}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          All set? Click the sign up button 
        </Text>
        <TouchableOpacity style={Buttonstyles.nextButton}
        onPress={()=>{
          startLoading()
        }}
        >
        <Text style={Buttonstyles.nextButtonText}>Sign up</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});


