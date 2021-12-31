import React from 'react'
import styles from '../css/style'
import { View, Text, SafeAreaView, ImageBackground, Image,Button, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';

export default function Auth() {

    const navigation = useNavigation(0)
    const Stack = createNativeStackNavigator()
    return (
        <SafeAreaView style={styles.Content}>
            <View style={styles.topContent}>
            <ImageBackground source={require("../../assets/food.jpg")} style={styles.Imagebackdrop}>
                <View style={styles.topTextView}>
                    <Text style={styles.topText}>Wechops</Text>
                    <Text style={styles.title}>
                        We sever the best foods
                    </Text>
                <Text style={styles.subtitle}>
                    Enjoy food at your comfort zone from your favorite eatries
                        </Text>
                        <TouchableOpacity>
                        <Text style={tw`p-4 mt-4 text-black font-bold bg-white text-lg mr-10 shadow-lg rounded-lg w-40 text-center`}
                        onPress={()=>{
                            navigation.navigate("menu")
                        }}
                        >
                            Order food
                        </Text>
                        </TouchableOpacity>
                    </View>
                    {/* content below */}
                    <View style={tw`flex-row items-center p-5 text-center justify-center `}>
                        {/* button */}
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("Authentication")
                        }}>
                        <Text style={tw`p-4 text-white bg-yellow-400 mr-10 text-lg shadow-lg rounded-lg w-40 text-center`}>
                            Login
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("Authentication")
                        }}>
                        <Text style={tw`p-4 text-white bg-red-500 text-lg mr-10 shadow-lg rounded-lg w-40 text-center`}>
                            Register
                        </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}
