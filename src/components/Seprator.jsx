import React from 'react';
import {View} from 'react-native';


const Seprator=({height,width,...extraPops})=>{
    return(
    <View style={{height,width,...extraPops}}/>
    )
};

Seprator.defaultProps = {
    height:0,
    width:0
};


export default Seprator;