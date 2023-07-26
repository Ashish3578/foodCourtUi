import { View, Text,StyleSheet,StatusBar,TouchableOpacity, TextInput ,Image,FlatList} from 'react-native'
import React,{useState} from 'react'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts';
import Seprator from '../components/Seprator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Display from '../utils/Display';
import { staticService } from '../services';
import CountryCodes from '../constants/CountryCodes';
import { FlagItem } from '../components';



const getDropdownStyle =(y) =>( {...styles.countryDropdown,top:y+60})



const RegisterPhoneScreen = ({navigation}) => {
    const [selectedCountry,setSeletedCountry] = useState(CountryCodes.find(country =>country.name  === "India") )
    const [inputContainerY,setInputContainerY] = useState(0)
    const [isDropdownOpen,setIsDropdownOpen] = useState(false);
    const [dropdownLayout,setDropdownLayout] = useState({})
    const [phoneNumber , setPhoneNumber] = useState("");

    const closeDropdown =(pageX,pageY) =>{ //used to close the dropdown when click outer screen other then list of dropdown
    if(isDropdownOpen){
        if(pageX<dropdownLayout?.x ||
             pageX>dropdownLayout?.x+dropdownLayout?.width ||
             pageY<dropdownLayout?.y ||
             pageY>dropdownLayout?.y+dropdownLayout?.height
             ){
            setIsDropdownOpen(false)
        }
    }
    }
  return (
    <View style={styles.container} onStartShouldSetResponder={({nativeEvent:{pageX,pageY}}) => closeDropdown(pageX,pageY)}>
               <StatusBar barStyle="default" 
      backgroundColor={Colors.DEFAULT_WHITE}
      translucent/>
      <Seprator height={StatusBar.currentHeight}/>
      <View style={styles.headerContainer}>
        <Ionicons name="chevron-back-outline" size={30} onPress={()=>navigation.goBack()}/>
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.content}>Enter your registerd phone number to login.</Text>

      <View style={styles.inputsContainer} onLayout={({nativeEvent:{layout:{y}}}) => setInputContainerY(y)}>
        <TouchableOpacity style={styles.countryListContainer} onPress={()=>setIsDropdownOpen(!isDropdownOpen)}>
            <Image source={{uri:staticService.getFlagIcon(selectedCountry.code)}} style={styles.flagIconStyle}/>
            <Text style={styles.countryCodeText}> {selectedCountry.dial_code}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={18}/>
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
        <TextInput placeholder='Phone Number' 
        placeholderTextColor={Colors.DEFAULT_GREY}
        selectionColor={Colors.DEFAULT_GREY}
        keyboardType='number-pad' 
        style={styles.inputText}
        onFocus={()=>setIsDropdownOpen(false)}
        onChangeText={(text)=>setPhoneNumber(selectedCountry?.dial_code+text)}
        />
        </View>
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={()=>navigation.navigate('VerificationScreen',{phoneNumber})}>
        <Text style={styles.signInButtonText}>Continue</Text>
      </TouchableOpacity>
      { isDropdownOpen &&(
      <View style={getDropdownStyle(inputContainerY)} onLayout={({nativeEvent:{layout:{x,y,height,width}}})=> setDropdownLayout({x,y,height,width})}>
        <FlatList 
        data={CountryCodes}
        keyExtractor={(item)=>item.code}
        renderItem={({item})=> <FlagItem {...item} onPress={(country)=>{
            setSeletedCountry(country)
            setIsDropdownOpen(false)
        }}
        
        />}
        />
      </View>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor:Colors.DEFAULT_WHITE,
        flex:1
       },
       headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20
    },
    headerTitle:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_MEDIUM,
        lineHeight:20*1.4,
        width:Display.setWidth(80),
        textAlign:'center'
    },
    title:{
        fontSize:20,
        fontFamily:Fonts.POPPINS_MEDIUM,
        lineHeight:20*1.4,
        marginTop:50,
        marginBottom:10,
        marginHorizontal:20,
    },
    content:{
        fontSize:14,
        fontFamily:Fonts.POPPINS_MEDIUM,
        //lineHeight:18*1.4,
        marginTop:10,
        marginBottom:20,
      //  width:Display.setWidth(80),
        marginHorizontal:20,
    },
    inputsContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        marginVertical:50,
    },
    countryListContainer:{
        backgroundColor:Colors.LIGHT_GREY,
        width:Display.setWidth(22),
        marginRight:10,
        borderRadius:8,
        height:Display.setHeight(6),
        justifyContent:'space-evenly',
        alignItems:'center',
        borderWidth:0.5,
        borderColor:Colors.LIGHT_GREY2,
        flexDirection:'row'
    },
    phoneInputContainer:{
        backgroundColor:Colors.LIGHT_GREY,
        paddingHorizontal:10,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:Colors.LIGHT_GREY2,
        justifyContent:'center',
        flex:1
    },
    flagIconStyle:{
        height:20,
        width:20
    },
    countryCodeText:{
        fontSize:14,
        lineHeight:14*1.4,
        color:Colors.DEFAULT_BLACK,
        fontFamily:Fonts.POPPINS_MEDIUM
    },
    inputText:{
        fontSize:18,
        textAlignVertical:'center',
        padding:0,
        height:Display.setHeight(6),
        color:Colors.DEFAULT_BLACK
    },
    countryDropdown:{
        backgroundColor:Colors.LIGHT_GREY,
        position:'absolute',
        width:Display.setWidth(80),
        height:Display.setHeight(50),
        marginLeft:20,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:Colors.LIGHT_GREY,
        zIndex:3,
    },
    signInButton:{
        backgroundColor:Colors.DEFAULT_GREEN,
        borderRadius:8,
        marginHorizontal:20,
        height:Display.setHeight(6),
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
    },
    signInButtonText:{
        fontSize:18,
        lineHeight:18*1.4,
        fontFamily:Fonts.POPPINS_MEDIUM,
        color:Colors.DEFAULT_WHITE,
    },
})
export default RegisterPhoneScreen