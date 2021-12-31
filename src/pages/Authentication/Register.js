import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Step1 from './Registration_steps/Step1'
import Step2 from './Registration_steps/Step2'
import Step3 from './Registration_steps/Step3'
import Step4 from './Registration_steps/Step4'
import styles from '../../css/style';

export default function Register() {
    const Stack = createNativeStackNavigator()
    const navigate = useNavigation()

    return (
        <SafeAreaProvider>
            <View style={tw`bg-gray-100 h-full `}>
                {/* title */} 
                <View style={tw`h-3/6 justify-end w-full bg-yellow-500`}>
                    <ImageBackground source={require("../../../assets/ice-cream.jpg")} style={styles.Imagebackdrop}>
                        <View style={[tw`flex-1 justify-center `]}>
                            <Text style={[tw`font-bold text-center text-white`, { fontSize: 60 }]}>
                                Register
                            </Text>
                            <Text style={[tw`text-center text-white w-1/2 self-center mt-3`, { fontSize: 20 }]}>
                                Extend your services to a larger population and earn more money.
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                {/* forms */}

                <Stack.Navigator>
                    <Stack.Screen name={"step1"} component={Step1} options={{ title: 'Authentication Details',headerShown:false }}/>
                    <Stack.Screen name={"step2"} component={Step2} options={{ title: 'Nationality' ,headerShown:false}}/>
                    <Stack.Screen name={"step3"} component={Step3} options={{ title: 'Contact',headerShown:false }}/>
                    <Stack.Screen name={"step4"} component={Step4} options={{ title: 'Business Info',headerShown:false }}/>
                </Stack.Navigator>

                {/* login link */}
                <TouchableOpacity style={[tw``, { justifyContent: 'center',height:100 }]}
                onPress={()=>{
                    navigate.navigate("login")
                }}
                >
                    <Text style={tw`text-center text-black text-lg`}>
                       Already have an account? 
                            <Text style={tw`text-center text-blue-400 text-lg p-3 mr-3 font-bold`}> Login</Text>
                    </Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    )
}
