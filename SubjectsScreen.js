import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import MyHeader from '../components/MyHeader';
import db from "../config";
import firebase from "firebase";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

export default class SubjectsScreen extends Component {
 
  render(){
    return(
      <View  style={styles.container}>
         <MyHeader title="subjects" navigation ={this.props.navigation}/>
         
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Drawer")}} style={styles.subjectBox}>
        <Text>Maths</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subjectBox}>
        <Text>Biology </Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.subjectBox}>
          <Text> Chemistry </Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.subjectBox}>
          <Text> literature </Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.subjectBox}>
          <Text> language </Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.subjectBox}>
          <Text> hindi </Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.subjectBox}>
          <Text> marathi</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.subjectBox}>
          <Text> french </Text> 
        </TouchableOpacity>
 
 
 
 </View>
 
    )
 }
}


 const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#6fc0b8",
    marginTop:50,
  },
  subjectBox:{
    width: "95%",
    height: RFValue(50),
    backgroundColor:"lightblue",
    borderWidth: 3.5,
    borderColor: "black",
    fontSize: RFValue(20),
    margin:10,
    paddingLeft: RFValue(120),
    justifyContent:'center',
    textAlign:'center',
  },
    })