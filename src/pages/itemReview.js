import { faAirFreshener, faCartPlus, faClock, faMinus, faPlus, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { View, Text, Image,SafeAreaView, TouchableOpacity } from 'react-native'
import {Card, Button, Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import styles from '../css/style';


export default function ItemReview() {
    const food = "https://www.thekitchenmuseng.com/wp-content/uploads/2018/05/Egusi.jpeg"
    return (
        <SafeAreaView>
            {/* image */}
            <View style={tw` p-3`}>
            <Card
            containerStyle={[tw`p-0 rounded-xl overflow-hidden shadow-xl `,]}
            >
            <Card.Image
              style={tw`m-0 p-0`,{ padding: 0, height:380}}
              source={{
                uri:food,
              }}
            />
          </Card>
            </View>
            {/* item name */}
            <View style={tw`flex-row p-3 mt-5`}>
                <View style={tw`flex-grow`}>
                    <Text style={tw`text-3xl font-bold capitalize`}>
                        eba and egusi
                    </Text>
                </View>
                {/* item price */}
                <View>
                <Text style={tw`text-3xl font-bold`}>
                        $20.00
                    </Text>
                </View>
            </View>
            {/* item description */}
            <View style={tw``}>
                    <Text style={tw`text-xl text-center p-3 font-thin capitalize text-gray-500`}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    </Text>
                </View>
            {/* rating */}
           
            <View style={tw`justify-center h-2/6`}>
                <View style={tw`self-center flex-row`}>
                    <Text style={tw`mr-5 text-lg text-gray-500 italic`}>prepared by - madam-jay</Text>
                    <Text style={tw` mr-5 text-lg text-gray-500 italic`}>location - calabar south</Text>
                    <View style={tw`flex-row text-yellow-400 italic`}>
                        <Icon name={"star"} size={24} color={`#F4B400`} />
                        <Text style={tw`text-lg text-gray-500 `}>4.3</Text>
                    </View>
                </View>

            <View style={tw`h-1/3 justify-center`}>

                <View style={tw`flex-row`}>
                    {/* subtract */}
                    <TouchableOpacity style={tw`flex-grow p-4`}>
                        <FontAwesomeIcon icon={faPlus} style={tw`text-2xl text-black `}/>
                    </TouchableOpacity>
                    {/* total */}
                    <View style={tw`flex-grow p-4`}>
                        <Text style={tw`text-2xl font-bold`}>30</Text>
                    </View>
                {/* add */}
                    <TouchableOpacity style={tw`p-4`}>
                        <FontAwesomeIcon icon={faMinus} style={tw`text-2xl text-black `}/>
                    </TouchableOpacity>

                </View>
            </View>
                <View style={tw`flex-row self-center`}>
                    {/* delivery time */}
                    <View style={tw`mr-6 bg-white p-7 rounded-3xl`}>
                        <Text style={[tw`font-thin text-lg`, styles.display_block]}>
                            Delivery time
                        </Text>
                        <Text style={[tw`font-bold text-lg capitalize`, styles.display_block]}>
                            <FontAwesomeIcon icon={faClock}/> 20 min
                        </Text>
                    </View>
                    {/* quantity calculation */}
                    <View style={tw`mr-6 bg-white p-7 rounded-3xl`}>
                        <Text style={[tw`font-thin text-lg`, styles.display_block]}>
                            Total price
                        </Text>
                        <Text style={[tw`font-bold text-lg text-center`, styles.display_block]}>
                            $20
                        </Text>
                    </View>

                </View>
            </View>
            {/* add to cart */}
            <View style={tw`bg-black rounded-3xl`}>
                <TouchableOpacity style={tw` h-2/6 self-center flex-row justify-center pt-7`}>
                    <FontAwesomeIcon icon={faCartPlus} style={tw`text-white text-center p-3 mr-3 font-bold text-xl `}/>
                    <Text style={tw`text-white text-center  font-bold text-xl`}>
                        Add to cart
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
