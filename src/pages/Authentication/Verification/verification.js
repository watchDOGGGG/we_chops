import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import Verification_Code from '../../../components/verification/verifictaion'
export default function Verification() {
    return (
        <SafeAreaView>
            <View style={tw``}>
            <Verification_Code/>
        </View>
        </SafeAreaView>
    )
}
