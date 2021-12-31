import React,{useState} from 'react'
import { View, Text, TextInput, Image, FlatList, TouchableOpacity,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../css/style';
import tw from 'tailwind-react-native-classnames'
import Category from '../components/apis/categories';
import ItemList from '../components/ItemsList';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/core';

export default function Menu() {

    const [selectedId, setSelectedId] = useState(1);

      
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            {/* search  */}
            <View style={tw`w-full h-full `}>
                <TouchableOpacity style={[tw`w-5/6 rounded-full flex-row justify-center bg-white self-center  overflow-hidden p-3`,{height:55}]}
                onPress={()=>{
                    navigation.navigate("search")
                }}
                >
                    <Text style={[tw`ml-2 text-xl w-5/6 text-gray-500`,]}>Search here</Text>
                       <FontAwesomeIcon size={30} icon={faSearchLocation} color={'gray'} style={tw`mr-3 self-end`}/>
                </TouchableOpacity>
            {/* categories */}
            <View style={tw`pt-5`}>
            <Text style={tw`font-bold text-2xl text-gray-700 mb-0 ml-3 p-2`}>Discover food</Text>
                   <FlatList
                   data={Category}
                   renderItem={({item})=>(
                    <View style={tw`pt-2`}>
                        <TouchableOpacity
                        onPress={()=>{
                            setSelectedId(item.id)
                        }}
                        style={[tw`shadow-md self-center p-3 ml-3 mr-4 rounded-3xl mt-0`,item.id === selectedId?tw`bg-green-600`:tw`bg-gray-200`]}>
                            <Image
                                style={styles.tinyLogo}
                                source={item.img}
                            />
                        </TouchableOpacity>
                        <Text style={tw`text-center text-gray-400 font-semibold p-1 mr-4 ml-3 text-lg`}>{item.name}</Text>
                    </View>
                   )}
                   keyExtractor={item => item.id}
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   />
                </View>

            {/* all items */}
                <View style={[tw`ml-2 mr-2 `,{marginBottom:225}]}>
                    <ScrollView
                    showsVerticalScrollIndicator={false}
                    >
                        <ItemList />
                    </ScrollView>
            </View>
            </View>
        </SafeAreaView>
    )
}
