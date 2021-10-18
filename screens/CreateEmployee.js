import React, {useState} from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import {TextInput, Button, Modal, Alert } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const CreateEmployee = ()=>{
    const [Name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [salary,setSalary] = useState("")
    const [picture,setPicture] = useState("")
    const [modal, setModal] = useState(false)
  
    const pickFromGallery = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if(granted){
                await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newfile = { 
                  uri:data.uri,
                  type:`test/${data.uri.split(".")[1]}`,
                  name:`test.${data.uri.split(".")[1]}`
                  }
              handleUpload(newfile) 
             }
        }
        else{
            alert("You nedd to give permission to work");
        }
    }
    const pickFromCamera = async ()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if(granted){
            let data= await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
           if(!data.cancelled){
              let newfile = { 
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}`
                }
            handleUpload(newfile) 
           }
        }
        else{
            alert("You nedd to give permission to work")
        }
    }
    const handleUpload = (Image)=>{
        const data = new FormData()
        data.append('file',Image)
        data.append('upload_preset', 'employeeApp')
        data.append('cloud_name','dzlsldhsu')

        fetch("https://api.cloudinary.com/v1_1/dzlsldhsu/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json())
        then(data=>{
            console.log(data)
        })
    }
    return(
        <View style={styles.root}>
            <TextInput 
                label='Name'
                style={styles.inputStyle}
                value={Name}
                theme={theme}
                mode="outlined"
                onChangeText={text =>setName(text)}
            />
                <TextInput 
                label='Email'
                style={styles.inputStyle}
                value={email}
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
                <TextInput 
                label='phone'
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text =>setPhone(text)}
            />
               <TextInput 
                label='salary'
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                mode="outlined"
                onChangeText={text =>setSalary(text)}
            />         
  <Button  
    style={styles.inputStyle} 
    icon="upload"
    mode="contained" 
    theme={theme}
    onPress={() => setModal(true)}>
        Upload Image
   </Button>
   <Button  
    style={styles.inputStyle} 
    icon="content-save"
    mode="contained" 
    theme={theme}
    onPress={() => setModal(true)}>
        Save
   </Button>
   <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={()=>setModal(false)}
        >
          <View style={styles.modalView}>
           <View style= {styles.modalButtonView}>
               <Button icon="camera" 
                mode="contained" 
                onPress={() => pickFromCamera()&console.log("open camera")}>
                   Camera
                </Button>
               <Button icon="image-area" 
               mode="contained" 
               theme={theme}
                onPress={() => pickFromGallery()& console.log("open gallery")}>
                   gallery
                </Button>            
            </View>
            <Button 
                theme={theme}
                onPress={() => setModal(false)}>
                   Cancel
                </Button>    
            </View>
        </Modal>
    </View>    
    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}
const styles=StyleSheet.create({
    root:{
        flex:1
    },
    inputStyle:{
        margin:5
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent: "space-around",
        padding:10
    },
    modalView:{
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "white"
    }
    })

export default CreateEmployee