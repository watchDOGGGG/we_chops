import React from 'react'
import { View, Text, FlatList, Image, ImageBackground ,} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import styles from '../css/style'
import Resturants from './apis/resturant'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, ListItem, Button, } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/core'


export default function Recommend() {
    const navigation = useNavigation()
    return (
        <View style={[tw`ml-2 mr-2 `,{marginBottom:80}]}>
             {/* resturants */}
            <View>
            <Text style={tw`font-bold text-2xl text-gray-700 mb-2 ml-3`}>Hotlist</Text>           
                <FlatList
                data={Resturants}
                keyExtractor={item=>item.id}
                maxToRenderPerBatch={3}
                initialNumToRender={5}
                horizontal
                showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Card
                            containerStyle={[tw`p-0 rounded-xl overflow-hidden`,]}
                        >
                            <Card.Image source={item.coverImg} style={{ height: 200, width:300 }} onPress={()=>{
                                navigation.navigate("itemreview")
                            }}/>
                            <View style={{ height: 100 }}>
                                <Text style={tw`text-lg text-black p-3 font-bold text-2xl`}>{item.name}</Text>
                                <View style={tw`flex-row ml-4 text-yellow-400`}>
                                    <Icon name={"star"} size={24} color={`#F4B400`} />
                                    <Text style={tw`text-xl text-gray-500 ml-1 p-1 pt-0`}>{item.rate}</Text>
                                </View>
                            </View>

                        </Card>
                    )}
                />

            </View>

        </View>
    )
}
