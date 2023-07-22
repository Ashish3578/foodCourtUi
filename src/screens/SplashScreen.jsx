import React,{useEffect} from 'react'
import {StyleSheet, Text, View,StatusBar,Image} from 'react-native';
import Colors from '../constants/Colors';
import Images from '../constants/Images';
import Fonts from '../constants/Fonts';
import Display from '../utils/Display';

export const SplashScreen = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('WelcomeScreen')
    },3000)
  },[])

  return (
    <View style={styles.container}>
      <StatusBar  barStyle="light-content"
      backgroundColor={Colors.DEFAULT_GREEN}
      translucent/>
    <Image source={Images.PLATE} 
     resizeMode='contain'  
     style={styles.image}
    />

    <Text style={styles.titleText}>Food Delivery With love</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.DEFAULT_GREEN,
  },
  image:{
    height:Display.setHeight(30),
    width:Display.setWidth(60)
  },
  titleText:{
    position:'absolute',  
    bottom:0,
    textAlign:'center',
    color:Colors.DEFAULT_WHITE,
    fontSize:20,
    fontFamily:Fonts.POPPINS_LIGHT
  }
});
