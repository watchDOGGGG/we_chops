import React from 'react'
import { View, Text, FlatList, Image, ImageBackground ,} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import styles from '../css/style'
import Resturants from './apis/resturant'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, ListItem, Button, } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import Recommend from './reCommen'


export default function ItemList() {
    return (
        <View>
            <Recommend/>
             {/* resturants */}
            <View>
            <Text style={tw`font-bold text-2xl text-gray-700 mb-2 ml-3`}>Restaurants</Text>
           
                <FlatList
                data={Resturants}
                keyExtractor={item=>item.id}
                maxToRenderPerBatch={3}
                initialNumToRender={5}
                showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Card
                            containerStyle={[tw`p-0 rounded-xl overflow-hidden`,]}
                        >
                            <Card.Image source={item.coverImg} style={{ height: 300 }} />
                            <View style={{ height: 100 }}>
                                <Text style={tw`text-lg text-black p-3 font-bold text-2xl`}>{item.name}</Text>
                                <View style={tw`flex-row ml-4 text-yellow-400`}>
                                    <Icon name={"star"} size={24} color={`#F4B400`} />
                                    <Text style={tw`text-xl text-gray-500 ml-1 p-1 pt-0`}>{item.rate}</Text>
                                    <Text style={tw`text-xl text-gray-500 ml-0 p-1 pt-0`}>({item.like})</Text>
                                    <View style={tw`flex-row flex-grow`}>
                                        <FontAwesomeIcon size={8} icon={faCircle} style={{ marginTop: 9 }} color={'#0F9D58'} />
                                        <Text style={tw`font-light text-xl text-gray-500 ml-1 flex-grow`}>{item.location}</Text>
                                    </View>
                                    <View style={tw`flex-row-reverse `}>
                                        <Text style={tw`font-bold text-xl text-gray-600 mr-2  text-right`}>25-35 min</Text>
                                    </View>
                                </View>
                            </View>

                        </Card>
                    )}
                />

            </View>

        </View>
    )
}
