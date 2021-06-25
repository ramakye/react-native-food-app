import React from "react";
import { StyleSheet, Text, TextInput, View,TouchableOpacity} from "react-native";
import * as firebase from "firebase";

export default class SignUp extends React.Component {
  state = { email: "", password: "", errorMessage: null };
 

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Order"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Upsa Food</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <View style={styles.inputView} >
          <TextInput  
            // style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            // style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}/>
        </View>
        
        <TouchableOpacity style={styles.loginBtn} onPress={this.handleSignUp}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.forgot} onPress={() => this.props.navigation.navigate("Login")}>
          Already have an account? Sign In
          </Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color: "#373B44",  
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#F6F6F6",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#FC6D3F",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});



