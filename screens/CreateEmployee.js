import React, {useState} from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import {TextInput, Button, Modal, Provider } from 'react-native-paper';


const CreateEmployee = ()=>{
    const [Name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [salary,setSalary] = useState("")
    const [picture,setPicture] = useState("")
    const [modal, setModal] = useState(false)
  

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
                onChangeText={text =>this.setEmail(text)}
            />
                <TextInput 
                label='phone'
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text =>this.setPhone(text)}
            />
               <TextInput 
                label='salary'
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                mode="outlined"
                onChangeText={text =>this.setSalary(text)}
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
                onPress={() => console.log("presses")}>
                   Camera
                </Button>
               <Button icon="image-area" 
               mode="contained" 
               theme={theme}
                onPress={() => setModal(false)}>
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