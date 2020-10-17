import React from 'react'
import { Keyboard, Image,Alert,StyleSheet, Button,Text,TextInput, View ,TouchableOpacity, ProgressViewIOSComponent} from 'react-native';
const Home = (props) => {
   Keyboard.dismiss();

   return (
      <View style={styles.container}>
      <View style={{alignItems:'center',alignContent:'center'}}>
      <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>
              ONLINE GROCERY SHOPPING
         </Text>
      </View>
     <View style={styles.container1}>
     
         <View style={{marginBottom:10}}>
      <Button   onPress={()=>props.navigation.navigate('Login')} title="Login as Customer">
      </Button>
    </View>
    <View style={{marginBottom:10}}>
   <Button onPress={()=>props.navigation.navigate('Register')} title="New User?  Register">
      </Button>
      </View>
      </View>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
     flex: 1,
    backgroundColor: 'white',
     alignItems: 'center',
     justifyContent: 'flex-start',
   },
   container1: {
      flex: 1,
     backgroundColor: 'white',
     alignItems:'center',
      justifyContent: 'center',
    },
    
 });
export default Home;