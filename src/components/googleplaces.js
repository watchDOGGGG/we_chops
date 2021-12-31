import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { selectLocation,setlocation } from "../Slice/Authslice";
import { useDispatch, useSelector } from 'react-redux';

const GooglePlacesInput = () => {
  const dispatch = useDispatch()

  return (
    <View styles={tw`border rounded-full border-black p-3`}>
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0
          },
          textInput: {
            fontSize: 20,
            padding: 20,
          }
        }}

        onPress={(data, details = null) => {
          dispatch(setlocation({
            location: details.geometry.location,
            description: data.description,

          }))

        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
        minLength={2}

        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en'
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder="Current address"
      />
    </View>
  );
};

export default GooglePlacesInput;