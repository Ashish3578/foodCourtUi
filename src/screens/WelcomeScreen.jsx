import { View, Text ,StyleSheet,StatusBar,FlatList,TouchableOpacity} from 'react-native'
import React,{useState,useRef} from 'react'
import Colors from '../constants/Colors'
import General from '../constants/General'
import WelcomeCard from '../components/WelcomeCard';
import Seprator from '../components/Seprator';
import Display from '../utils/Display'
import Fonts from '../constants/Fonts';


const pageStyle = isActive=>
  isActive?styles.page:{...styles.page,backgroundColor:Colors.DEFAULT_GREY}


const Pagination=({index})=>{
  return (
    <View style={styles.pageContainer}>
      {
        [...Array(General.WELCOME_CONTENTS.length).keys()].map( (_,i)=>
        i===index ?(
          
          <View style={pageStyle(true)} key={i} />
        ):(
          <View style={pageStyle(false)} key={i} />
        )
        )
      }
    </View>
  )
}

const WelcomeScreen = ({navigation})=> {
  const [welcomeListIndex,setWelcomeListIndex] = useState(0);
  const welcomeList = useRef(null)

  const viewRef = useRef(({changed})=>{
    setWelcomeListIndex(changed[0].index);
  })

  const viewConifRef = useRef({viewAreaCoveragePercentThreshold: 50});


  const pageScroll = ()=>{
      welcomeList.current.scrollToIndex({
        index:welcomeListIndex<2? welcomeListIndex+1:welcomeListIndex
      })
  }
  return (
    <View style={styles.conatiner}>
        <StatusBar barStyle={'dark-content'} 
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
        />
        <View height={StatusBar.currentHeight}></View>
        <Seprator height={Display.setHeight(4)}/>
        
        <View style={styles.welcomeListContainer}>
            
            <FlatList 
            ref={welcomeList}
            data={General.WELCOME_CONTENTS}
            keyExtractor={item=>item.title}
            horizontal
            pagingEnabled
            overScrollMode='never'
            viewabilityConfig={viewConifRef.current}
            onViewableItemsChanged={viewRef.current}            
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> <WelcomeCard {...item}/>}
            />
          
        </View>
        <Seprator height={Display.setHeight(4)}/>
        <Pagination index={welcomeListIndex}/>
        <Seprator height={Display.setHeight(2)}/>
        {welcomeListIndex ===2 ? (
          <TouchableOpacity 
          style={styles.gettingStartedButton} 
          activeOpacity={0.8}
          onPress={()=>navigation.navigate('SignInScreen')}>
            <Text style={styles.gettingStartedText}>Get Started</Text>
          </TouchableOpacity>
        ):(
        <View style={styles.buttonConatiner}>
          <TouchableOpacity activeOpacity={0.8} style={{marginLeft:10}} 
          onPress={()=>welcomeList.current.scrollToEnd()}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>pageScroll()}> 
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.DEFAULT_WHITE,

    },
    welcomeListContainer:{
      height:Display.setHeight(70),    
    },
    pageContainer:{
      flexDirection:"row",
    }
    ,
    page:{
      height:8,
      width:15,
      backgroundColor:Colors.DEFAULT_GREEN,
      borderRadius:32,
      marginHorizontal:5,
    }
    ,
    buttonConatiner:
    {
      marginTop:40,
      flexDirection:'row',
      justifyContent:'space-between',
      width:Display.setWidth(90),
      alignItems:'center'
    }
    ,
    buttonText:
    {
      fontSize:14,
      fontFamily:Fonts.POPPINS_BOLD,
      lineHeight:14*1.4,
    },
    button:{
      backgroundColor:Colors.LIGHT_GREEN,
      paddingHorizontal:11,
      paddingVertical:20,
      borderRadius:32
    }
    ,
    gettingStartedButton:{
      backgroundColor:Colors.DEFAULT_GREEN,
      paddingVertical:5,
      paddingHorizontal:40,
      borderRadius:8,
      marginTop:40,
      justifyContent:'center',
      alignContent:'center',
      elevation:2
    },
    gettingStartedText:{
      fontSize:20,
      color:Colors.DEFAULT_WHITE,
      lineHeight:20*1.4,
      fontFamily:Fonts.POPPINS_MEDIUM,
    }
})

export default WelcomeScreen;