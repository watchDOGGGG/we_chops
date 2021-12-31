import { faAirFreshener, faCartPlus, faClock, faMinus, faPlus, faTrash, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { View, Text, Image,SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import {Card, Button, Icon, Divider } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import styles from '../css/style';
import cartList from '../components/apis/cartlist';
import { useNavigation } from '@react-navigation/core';


export default function Cart() {
    const navigation = useNavigation()
    const food = "https://www.thekitchenmuseng.com/wp-content/uploads/2018/05/Egusi.jpeg"
    
    return (
        <SafeAreaView>
            <Text style={tw`font-bold text-3xl text-gray-700 mb-2 ml-3 p-3`}>My cart list</Text>

            <View style={tw`flex-1`, { height: 700 }}>
                {/* items */}
                <View style={tw`h-full `}>
                       <ScrollView
                       showsVerticalScrollIndicator={false}
                       >
                       {
                        cartList.map((item)=>{
                            return(
                                <View 
                                key={item.id}
                                style={tw`bg-gray-200 rounded-2xl overflow-hidden flex-row mt-5 p-3`}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: 150, height: 150, borderRadius: 70}}
                                />
                                {/* cart list */}

                                <View style={tw`items-center p-3 flex-row`}>
                                    <View style={tw`w-4/6`}>
                                        <View style={tw`self-start`}>
                                            <Text style={tw`font-bold text-2xl `}>{item.name}</Text>
                                        </View>
                                        <View style={tw`self-start`}>
                                            <Text style={tw`font-thin text-gray-500 text-xl`}>N{item.price}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={tw`flex-grow`}>
                                        <FontAwesomeIcon icon={faTrash} size={22} style={tw`text-red-500`} />
                                    </TouchableOpacity>
                                    <View style={tw`flex-grow`}>
                                        <View>
                                            <TouchableOpacity style={tw`p-2`}>
                                                <FontAwesomeIcon icon={faPlus} size={25} style={tw``} />
                                            </TouchableOpacity>
                                            <View style={tw`mr-4 rounded-3xl bg-black p-3`}>
                                                <Text style={tw`text-2xl text-white font-bold `}>{item.number_of_order}</Text>
                                            </View>
                                            <TouchableOpacity style={tw`p-2`}>
                                                <FontAwesomeIcon icon={faMinus} size={22} style={tw``} />
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                                {/* end cart list */}
                            </View>
                            )
                        })
                    }
                       </ScrollView>
                   
                </View>
                {/* summary */}
            </View>

            {/* add to cart */}
            <View style={tw`absolute bottom-0 w-full`, { height: 358 }}>
                <View style={tw`rounded-3xl  bg-black  flex-1 justify-center `}>
                    <View style={tw``}>
                    <View style={tw`flex-row`}>
                            <Text style={tw`text-white text-left p-3 font-bold text-xl flex-grow`}>
                                Discount
                        </Text>
                        <Text style={tw`text-white text-left p-3 font-bold text-xl`}>
                                300
                        </Text>
                    </View>
                        <Divider />
                        <View style={tw`mt-7 flex-row`}>
                            <Text style={tw`text-white text-left p-3 font-bold text-xl flex-grow`}>
                                Total
                        </Text>
                        <Text style={tw`text-white text-left p-3 font-bold text-xl`}>
                                300
                        </Text>
                    </View>
                    <Divider />
                </View>
                    <TouchableOpacity style={tw`mb-7 mt-4 bg-gray-500 p-4 w-2/4 self-center rounded-xl`}
                    onPress={()=>{
                        navigation.navigate("checkout")
                    }}
                    >
                        <Text style={tw`text-white text-center font-bold text-xl`}>
                            Checkout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
