import React,{useState} from 'react'
import { View, Text ,TextInput, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import SearchMap from '../components/Maps/searchMap';
export default function Search() {
    
    const [search, setSearch] = useState('')
    
    const updateSearch = (search) => {
        setSearch(search);
      };
    return (
        <SafeAreaView>
            <View style={tw` h-full`}>
                <View
                style={tw`h-4/6`}
                >
                    <View style={tw`p-3`}>
                         {/* searchBar */}
                    
                    <TextInput
                        style={[tw`ml-2 text-xl w-5/6 text-gray-600`,]}
                        onChangeText={e => updateSearch(e)}
                        value={search}
                        placeholder="Search your favorite food or eatry here..."
                        keyboardType="default"
                    />
                    </View>
                    <SearchMap/>
                </View>

                <View
                style={tw`h-3/5 justify-start p-4 bg-white`}
                >
                   <View style={tw`self-center flex-row`}>
                    <TouchableOpacity style={tw`bg-white shadow-sm p-2 rounded-full`}>
                        <Text  style={tw`text-xl text-gray-500`}>Check in Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`bg-white shadow-sm ml-4 rounded-full p-2`}>
                        <Text style={tw`text-xl text-gray-500`}>Check in Place</Text>
                    </TouchableOpacity>
                   </View>

                {/* results */}
                <Text>Results</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
