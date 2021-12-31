import React,{ useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input"
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectPhone,setphone } from "../Slice/Authslice";


const App: React.FC = () => {
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);

    const dispatch = useDispatch()
    const phone = useSelector(selectPhone)

    return (
          <View>
            <Text style={tw`font-semibold text-xl p-2 text-black`}>Phone</Text>
            <PhoneInput
              ref={phoneInput}
              defaultValue={phone}
              defaultCode="NG"
              onChangeFormattedText={(text) => {
                dispatch(setphone(text));
              }}
              // withDarkTheme
              // withShadow
              autoFocus
            />
          </View>
    );
  };
  
  export default App;