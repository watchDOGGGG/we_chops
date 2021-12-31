import { faAirFreshener, faCaretDown, faCartPlus, faClock, faCreditCard, faEnvelope, faLocationArrow, faMinus, faPen, faPencilAlt, faPhone, faPlus, faTrash, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { Card, Button, Icon, Divider } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import styles from '../css/style';
import cartList from '../components/apis/cartlist';
import { useNavigation } from '@react-navigation/core';
import CheckOutMap from '../components/Maps/checkoutmap';


export default function Cart() {
    const navigation = useNavigation()
    const food = "https://www.thekitchenmuseng.com/wp-content/uploads/2018/05/Egusi.jpeg"

    return (
        <SafeAreaView>
            <View style={tw`h-full`, { height: 900 }}>
                <View style={tw`p-7 bg-white mt-4 mr-3 ml-3 rounded-3xl h-full`}>
                    {/* contact address */}
                    <Text style={tw`font-bold text-2xl capitalize`}>
                        contact address information
                    </Text>
                    <View style={tw``}>
                        {/* email */}
                        <View style={tw`flex-row p-2 justify-start mt-7`}>
                            <View style={tw`bg-gray-300 p-4 rounded-2xl`}>
                                <FontAwesomeIcon icon={faEnvelope} size={20} />
                            </View>
                            <View style={tw`flex-grow`}>
                                <Text style={tw`text-xl ml-4`}>example@email.com</Text>
                                    <Text style={tw`text-gray-500 text-lg ml-4`}>Email</Text>
                                </View>
                            <View style={tw` p-4 `}>
                                <FontAwesomeIcon icon={faPencilAlt} size={20} />
                            </View>
                        </View>
                        {/* phone */}
                        <View style={tw`flex-row p-2 justify-start mt-7`}>
                            <View style={tw`bg-gray-300 p-4 rounded-2xl`}>
                                <FontAwesomeIcon icon={faPhone} size={20} />
                            </View>
                            <View style={tw`flex-grow`}>
                                <Text style={tw`text-xl ml-4`}>+234 87043345</Text>
                                <Text style={tw`text-gray-500 text-lg ml-4`}>Phone</Text>
                            </View>
                            <View style={tw` p-4 `}>
                                <FontAwesomeIcon icon={faPencilAlt} size={20} />
                            </View>
                        </View>


                        {/* map address */}
                        <View style={tw`p-2  mt-7`}>
                            <Text style={tw`font-bold text-2xl capitalize`}>
                                Address
                            </Text>
                            <View style={tw`mt-4`}>
                                <View style={tw`flex-row`}>
                                    <View style={tw`flex-grow`}>
                                        <Text style={tw`text-xl text-gray-500`}>7 Ibb way calabar</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <FontAwesomeIcon icon={faCaretDown} size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* map */}
                        <View>
                            <CheckOutMap />
                        </View>
                    </View>
                </View>
                <View>
                </View>

                <View style={tw` w-full `}>
                <View style={tw`rounded-3xl  bg-black`}>
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
                        onPress={() => {
                            navigation.navigate("pay")
                        }}
                    >
                        <Text style={tw`text-white text-center font-bold text-xl`}>
                            pay
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>

        </SafeAreaView>
    )
}
