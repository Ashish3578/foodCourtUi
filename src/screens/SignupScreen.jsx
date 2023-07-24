import { View, Text ,StyleSheet,TouchableOpacity,StatusBar,TextInput,Image} from 'react-native'
import React,{useState} from 'react'
import Colors from '../constants/Colors'
import Fonts from '../constants/Fonts';
import Seprator from '../components/Seprator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Display from '../utils/Display';
import Images from '../constants/Images';
const SignupScreen=({navigation})=> {
    const [isPasswordShown,setPasswordShown] = useState(false);
  return (
    <View>
           <StatusBar barStyle="default" 
      backgroundColor={Colors.DEFAULT_WHITE}
      translucent/>
      <Seprator height={StatusBar.currentHeight}/>
      <View style={styles.headerContainer}>
        <Ionicons name="chevron-back-outline" size={30} onPress={()=>navigation.goBack()}/>
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.content}>Enter your email,choose a username and password.</Text>
      <View style={styles.inputContainer}>  
        <View style={styles.inputSubContainer}> 
            <Feather name="user" size={22} color={Colors.DEFAULT_GREY} style={{marginRight:10}}/>
            <TextInput placeholder='Username' 
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            />
        </View>
      </View>
      <Seprator height={15}/>
      <View style={styles.inputContainer}>  
        <View style={styles.inputSubContainer}> 
            <Feather name="mail" size={22} color={Colors.DEFAULT_GREY} style={{marginRight:10}}/>
            <TextInput placeholder='Email' 
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            />
        </View>
      </View>
      <Seprator height={15}/>
      <View  style={styles.inputContainer}>
        <View  style={styles.inputSubContainer}>
            <Feather name="lock" size={22} color={Colors.DEFAULT_GREY} style={{marginRight:10}}/>
            <TextInput placeholder='Password' 
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            secureTextEntry={isPasswordShown?false:true}
            style={styles.inputText}/>
            <Feather name={isPasswordShown?"eye":'eye-off'} 
            size={22}
             color={Colors.DEFAULT_GREY}
              style={{marginRight:10}} 
              onPress={()=>setPasswordShown(!isPasswordShown)} />
        </View>
      </View>
      <Text></Text>
      <TouchableOpacity style={styles.signInButton} onPress={()=>navigation.navigate('RegisterPhoneScreen')}>
        <Text style={styles.signInButtonText}>Create Account</Text>
      </TouchableOpacity>
      <Seprator height={18}/>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonContainer}>
            <View style={styles.signUpButtonLogoContainer}>
                <Image source={Images.FACEBOOK} style={styles.signInButtonLogo}/>
            </View>
            <Text style={styles.socialSignInButtonText}>Connect With Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonContainer}>
            <View style={styles.signUpButtonLogoContainer}>
                <Image source={Images.GOOGLE} style={styles.signInButtonLogo}/>
            </View>
            <Text style={styles.socialSignInButtonText}>Connect With Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{ 
    backgroundColor:Colors.DEFAULT_WHITE,
    alignItems:'center'
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
inputContainer:{
    backgroundColor:Colors.LIGHT_GREY,
    paddingHorizontal:20,
    marginHorizontal:20,
    borderRadius:8,
    borderWidth:0.5,
    borderColor:Colors.LIGHT_GREY2,
    justifyContent:'center'
},
inputSubContainer:{
    flexDirection:'row',
    alignItems:"center"
},
inputText:{
    fontSize:18,
    textAlignVertical:'center',
    padding:0,
    height:Display.setHeight(6),
    color:Colors.DEFAULT_BLACK,
    flex:1
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
orText:{
    fontSize:15,
    lineHeight:15*1.4,
    fontFamily:Fonts.POPPINS_MEDIUM,
    color:Colors.DEFAULT_GREY,
    alignSelf:'center'
},
facebookButton:{
    backgroundColor:Colors.FABEBOOK_BLUE,
    paddingVertical:15,
    marginHorizontal:20,
    borderRadius:8,
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center'
},
googleButton:{
    backgroundColor:Colors.GOOGLE_BLUE,
    paddingVertical:15,
    marginHorizontal:20,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
},
signInButtonLogo:{
    width:18,
    height:18
},
signUpButtonLogoContainer:{
    backgroundColor:Colors.DEFAULT_WHITE,
    padding:2,
    borderRadius:3,
    position:'absolute',
    left:25
},
socialButtonContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
},
socialSignInButtonText:{
    color:Colors.DEFAULT_WHITE,
    fontSize:13,
    lineHeight:13*1.4,
    fontFamily:Fonts.POPPINS_MEDIUM
},
})

export default SignupScreen;