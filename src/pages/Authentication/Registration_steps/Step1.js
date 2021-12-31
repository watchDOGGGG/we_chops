import React,{useState} from 'react'
import { View, Text,TouchableOpacity,CheckBox } from 'react-native';
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { selectEmail, selectFullname, selectPassword, setemail, setfullname, setpassword } from '../../../Slice/Authslice';
import { useDispatch, useSelector } from 'react-redux';

export default function Step1() {
    const [isSelected, setSelection] = useState(false);
    const email = useSelector(selectEmail)
    const password = useSelector(selectPassword)
    const fullname = useSelector(selectFullname)

    const dispatch = useDispatch()

    const navigation = useNavigation()
    return (
        <View style={tw`w-full h-5/6`}>
            <View style={tw`w-4/5 justify-center self-center h-4/5`}>
                <Input
                    placeholder='Name'
                    errorStyle={{ color: 'red' }}
                    errorMessage={fullname.length > 0? '': '*Required'}
                    value={fullname}
                    onChangeText={e =>dispatch(setfullname(e))}
                    style={tw`bg-white p-3 border-0`}
                />
                <Input
                    placeholder='Email'
                    errorStyle={{ color: 'red' }}
                    errorMessage={email.length > 0? '': '*Must be a valid email address'}
                    value={email}
                    onChangeText={e =>dispatch(setemail(e))}
                    style={tw`bg-white p-3 border-0`}
                />
                 <Input
                    placeholder='Password'
                    errorStyle={{ color: 'red' }}
                    errorMessage={password.length > 0 ?" ":'*Password must be more than 8 characters long'}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={e=>dispatch(setpassword(e))}
                    style={tw`bg-white p-3 border-0`}
                />
            </View>
            <View style={tw`flex-row justify-center`}>
                <CheckBox
                    value={isSelected}
                    onValueChange={r => setSelection(isSelected === true ? false : true)}
                    style={tw`border-blue-400 rounded-full`}
                />
                <Text style={tw`text-center text-black text-lg `}>
                    i agree to the <Text style={tw`text-blue-400 capitalize`}>terms and services</Text> and <Text style={tw`text-blue-400 capitalize`}>policy privacy</Text>
                </Text>
        </View>
        {/* next page */}
            <View style={tw`items-center justify-center pt-4  h-1/5`}>
                <TouchableOpacity
                    onPress={() => {
                        isSelected === true  && email !== "" && password  !== "" && fullname !== "" &&
                            navigation.push("step2")
                    }}
                    style={tw`mr-7 rounded-full ${isSelected === true  && email !== "" && password  !== "" && fullname !== "" ? 'bg-white' : 'bg-gray-200'} p-4 text-black self-end`}
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
