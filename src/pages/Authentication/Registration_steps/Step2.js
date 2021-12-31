import React,{useState} from 'react'
import { View, Text,TouchableOpacity,CheckBox } from 'react-native';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { selectLocation, selectPhone, } from '../../../Slice/Authslice';
import { useDispatch, useSelector } from 'react-redux';
import PhoneNumInput from '../../../components/phoneInput';
import GooglePlacesInput from '../../../components/googleplaces';

export default function Step1() {
    const [isSelected, setSelection] = useState(false);
    
    const phone = useSelector(selectPhone)
    const location = useSelector(selectLocation)
    
    const dispatch = useDispatch()

    const navigation = useNavigation()
    return (
        <View style={tw`w-full`}>
            <View style={tw`w-4/5 justify-center self-center h-4/5`}>
               <PhoneNumInput/>

               <View style={tw`p-2 mt-4`}>
                   <Text style={tw`font-semibold text-xl p-2 text-black`}>Location</Text>
                   <GooglePlacesInput/>
               </View>
        </View>
        {/* next page */}
            <View style={tw`items-center justify-center pt-4  h-1/5`}>
               <TouchableOpacity
               onPress={()=>{
                   phone !== "" && location !== null && 
                    navigation.push("step3")
               }}
               style={tw`mr-7 rounded-full ${phone  !== "" && location !== null ? 'bg-white' : 'bg-gray-200'} p-4 text-black self-end`}
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
