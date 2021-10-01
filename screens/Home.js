import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Card,FAB} from 'react-native-paper';

const  Home=()=>{
const data = [
    {id:1, name:"Vicente",position:"web dev"},
    {id:2, name:"Ricardo",position:"web dev"},
    {id:3, name:"Oscar",position:"web dev"},
    {id:4, name:"Fer",position:"web dev"},
    {id:5, name:"Ricardo",position:"web dev"},
    {id:6, name:"Oscar",position:"web dev"},
    {id:7, name:"Fer",position:"web dev"},
    {id:8, name:"Fer",position:"web dev"},
] 
const renderList = ((item)=>{
    
    return(
        
        <Card style={styles.mycard} key={item.id} >
        <View style={styles.cardView}  >
          <Image 
          style={{width:60,height:60, borderRadius:50/2}}     //rounded img
          source ={{uri:"https://play-lh.googleusercontent.com/a-/AOh14GjGOVc8jPEdbWsyPQcy8N2vVMQrr8QT97f16bA"}}
          />
             <View style={{marginLeft:10}} >
                 <Text style={styles.text}>{item.name}</Text>  
                 <Text style={styles.text}>{item.position}</Text>  
             </View>
         </View>
        
     </Card>
    )
})
    return(
        <View>
            <FlatList
                data={data}
                renderItem={({item})=>{
                    return renderList(item)
            }}
            keyExtractor = {item=>`${item.id}`}
            />
            <FAB
                style={styles.fab}
                small = {false}
                icon="plus"
                theme={{colors:{accent:"#006aff"}}} //blue buton
                onPress={()=>console.log('Pressed')}
            />
        </View>
 
)
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
        padding:5,
        
    },
    cardView:{
       flexDirection:"row",
        padding:6
    },
    text:{
        fontSize:12,
    },
    fab:{
        position:'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
    
})
export {Home}