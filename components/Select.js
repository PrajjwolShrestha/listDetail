import React, {useState} from 'react'
import {StyleSheet,Text, View, ScrollView, TouchableOpacity, Modal,Image} from 'react-native'
//import_end________________________________________________________________

//export
export const Select = (props) => {
    const [selected,setSelected] = useState('select category')
    return (
        <View style={selectStyles.selectView}>
            <TouchableOpacity >
                <Text>
                    {selected}
                </Text>
                <Image  
                    style={selectStyles.selectImage} 
                    source={require('../assets/chevron-circle-down-solid.png')}/>
            </TouchableOpacity>
        </View>
    )
}
//exort_end___________________________________________________________________

//stylesheet
const selectStyles = StyleSheet.create({
    selectView:{
        padding:10,
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
    },
    selectImage:{
        width:15,
        height:15,
        position:'absolute',
        right:10,
        top:3,
    }
})
//------------