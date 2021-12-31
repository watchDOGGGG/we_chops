import React, { useState } from 'react'
import { View, Text, TouchableOpacity,TextInput,TouchableWithoutFeedback } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../css/style';
import { useNavigation } from '@react-navigation/core';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = () =>{
        alert(email)
    }
    const navigate = useNavigation()
    return (
        <SafeAreaProvider>
            <View style={tw`bg-gray-100 h-full `}>
                {/* title */}
                {/* sub title */}
                <View style={tw`flex-1 justify-center text-center w-full`}>
                    <Text style={[tw`font-bold text-center`,{fontSize:60}]}>
                        Sign in
                    </Text>
                    <Text style={[tw`text-center w-1/2 justify-center text-gray-400 self-center mt-3`,{fontSize:20}]}>
                        Enter your credentials here to continue.
                    </Text>
                </View>
                 {/* forms */}
                 <View style={tw`mt-5 w-full `}>
                    <View style={tw`w-4/5 self-center `}>
                        {/* <Input */}
                        <TextInput
                            style={[tw`rounded-lg p-4 text-lg`, styles.input]}
                            onChangeText={(e)=>setEmail(e)}
                            value={email}
                            placeholder="example@email.com"
                            keyboardType="default"
                            type="email"

                        />
                        <TextInput
                            style={[tw`rounded-lg p-4 text-lg`, styles.input]}
                            onChangeText={(e)=>setPassword(e)}
                            value={password}
                            placeholder="password"
                            keyboardType="default"
                            type="password"
                            secureTextEntry={true}
                        />
                        
                        <Text style={tw`text-gray-400 text-right`}>forgot your password?</Text>
                    </View>
                    {/* button */}
                    <TouchableWithoutFeedback  
                    onPress={()=>{
                        onSubmit()
                    }}
                    >
                        <Text style={tw`text-white mt-4 text-center bg-blue-400 w-4/5 p-5 text-xl rounded-lg self-center`}>sign in</Text>
                    </TouchableWithoutFeedback>

                    {/* auth with networks */}

                    <View style={tw`flex-row justify-center pt-4 mt-10`}>
                        <TouchableOpacity>
                            <Icon
                                style={tw`mr-7 rounded-full bg-white p-4 text-blue-400`}
                                name={'twitter'}
                                type="ionicon"
                                size={30}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                style={tw`mr-5 rounded-full bg-white p-4 text-red-400`}
                                name={'google'}
                                type="ionicon"
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Register link */}
                <TouchableOpacity style={[tw`flex-1 h-1`, { justifyContent: 'center' }]}
                    onPress={() => {
                        navigate.navigate("register")
                    }}
                >
                    <Text style={tw`text-center text-black text-lg`}>
                        Dont have an account?
                        <Text style={tw`text-center text-blue-400 text-lg p-3 mr-3 font-bold`}> Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    )
}
