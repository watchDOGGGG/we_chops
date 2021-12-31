import { faHome, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'


export default function Footer() {
    const navigation = useNavigation()
    return (
        <View style={[tw`h-full justify-center bg-black ml-3 mr-3 rounded-full`]}>
            <View style={tw` flex-row self-center`}>
                <TouchableOpacity style={tw`text-white font-bold text-3xl flex-grow `} onPress={()=>(navigation.navigate("menu"))}>
                    <FontAwesomeIcon icon={faHome} size={30} style={tw`text-white font-bold text-3xl self-center`} />
                </TouchableOpacity>
                <TouchableOpacity style={tw`text-white font-bold text-3xl flex-grow`}  onPress={()=>(navigation.navigate("cart"))}>
                    <FontAwesomeIcon icon={faShoppingBag} size={30} style={tw`text-white font-bold text-3xl self-center`} />
                </TouchableOpacity>
                <TouchableOpacity style={tw`text-white font-bold text-3xl flex-grow`} onPress={()=>(navigation.navigate("dashboard"))}>
                    <FontAwesomeIcon icon={faUser} size={30} style={tw`text-white font-bold text-3xl self-center`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
