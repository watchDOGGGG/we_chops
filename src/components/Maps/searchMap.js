import React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'

export default function SearchMap() {
    return (
        <View style={tw`bg-gray-300 p-0 h-full`}>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={tw`flex-1 p-0 h-full`}
            >

            </MapView>
        </View>
    )
}
