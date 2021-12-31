import React,{useState} from 'react'
import { View, Text,TouchableOpacity,CheckBox,Picker } from 'react-native';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { selectFood,setfood } from '../../../Slice/Authslice';
import { useDispatch, useSelector } from 'react-redux';
import { FoodList } from '../../../components/apis/foodList';

export default function Step1() {
    const dispatch = useDispatch()
    const food = useSelector(selectFood)

    const navigation = useNavigation()

    return (
        <View style={tw`w-full`}>
            <View style={tw`w-4/5 justify-center self-center h-4/5`}>
                <Text style={tw`font-semibold text-xl p-2 text-black`}>What your favorite food</Text>
                <View
                style={tw`bg-white`}
                >
                <Picker
                    selectedValue={food == ""?"":food}
                    style={{height: 50, }}
                    onValueChange={(itemValue, itemIndex) => dispatch(setfood(itemValue))}
                >
                    {
                        FoodList.map((item)=>{
                            return (
                                <Picker.Item key={item.id} label={item.name} value={item.name} />
                            )
                        })
                    }
                </Picker>
                </View>
            </View>
        {/* next page */}
            <View style={tw`items-center justify-center pt-4  h-1/5`}>
                <TouchableOpacity
                    onPress={() => {
                        food !== "" &&
                            navigation.push("step4")
                    }}
                    style={tw`mr-7 rounded-full ${food !== "" ? 'bg-white' : 'bg-gray-200'} p-4 text-black self-end`}
                >
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        type="ionicon"
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
