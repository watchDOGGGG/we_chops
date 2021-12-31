import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Footer from '../components/footer'
import Menu from './menu'

export default function Layout() {
    return (
        <View>
            <View style={tw`bg-red-400 mb-9`,{height:'91.8%'}}>
                <Menu />
            </View>
            <View style={tw`flex-1 absolute bottom-0 w-full bg-black`,{height:'8%'}}>
                <Footer />
            </View>
        </View>
    )
}
