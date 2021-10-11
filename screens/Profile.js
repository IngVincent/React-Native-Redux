import * as React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import {MaterialIcons, Entypo} from '@expo/vector-icons';

const Profile = ()=>{


    const openDial=()=>
    {
        if(Platform.OS=== "android")
            {
                Linking.openURL("tel:12345")
            }
        else{
            Linking.openURL("telprompt:12345")
            }
    }
    return (
        <View style={styles.root}>
            <LinearGradient
            colors={['#0033ff', '#6bc1ff']}
            style={{height:"25%"}}
        />
           <View style={{alignItems:"center"}}>
               <Image
               style={{width:100,height:100, borderRadius:140/2, marginTop:-50}}
               source={{uri:"https://images.unsplash.com/photo-1513258496099-48168024aec0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"}}
               />
           </View>
            <View style={{alignItems:'center', margin:15}}>
                <Title>
                  Vicente
               </Title>
               <Text style={{fontSize:15}}> 
                   Web developer
                </Text>
            </View>
            <Card style={styles.mycard} onPress={()=>{
                Linking.openURL("mailto:abc@abc.com")
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="#006aff"/>
                    <Text style={styles.mytext}>abc@abc.com </Text>
                </View>
            </Card>
            <Card style={styles.mycard} onPress={()=>openDial()}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="phone" size={32} color="#006aff"/>
                    <Text style={styles.mytext}>1234567890 </Text>
                </View>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff"/>
                    <Text style={styles.mytext}>8 MXN </Text>
                </View>
            </Card>
            <View style={{flexDirection:"row", justifyContent:"space-around", padding:10}}>
                <Button 
                icon="account-edit" 
                mode="contained"
                theme= {theme}
                 onPress={() => console.log('Pressed')}>
                     Edit
                </Button>
                <Button 
                icon="delete" 
                mode="contained"
                theme= {theme}
                 onPress={() => console.log('Pressed')}>
                     Fire Employee
                </Button>
            </View>
        </View>
    )
} 
const theme = {
    colors:{
        primary:"#006aff"
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    }
})

export default Profile