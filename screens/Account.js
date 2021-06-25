import React from "react";
import{
 View,
 Text,
 StyleSheet,
 Image  
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const Account =({ navigation }) =>{
    return (
      <View style={styles.contentView} forceInset={{ top: "always" }}>
      <View style={styles.titleView}>
      <View style={styles.profileView}>
        <Image
          source={{
            // uri: "https://avatars1.githubusercontent.com/u/7048105?s=460&v=4",
            // image={require('custom_pin.png')}
          }}
          style={styles.imageStyle}
        />
        <View style={{ marginLeft: 10 }}>
          <Text h4 style={{ color: "#383838" }}>
            Qwami Amakye
          </Text>
          <Text style={{ color: "#7B7B7B" }}>ramakye36@gmail.com</Text>
        </View>
      </View>
    </View>
    <View style={styles.listView}>

      {/* view Orders */}
      <TouchableOpacity onPress={() => navigation.navigate("Order")}>
        <View style={styles.options}>
          <Text style={styles.optionsText}>View Orders</Text>
        </View>
      </TouchableOpacity>

      {/* View Payment Methods */}
      <TouchableOpacity onPress={() => alert("This app currently takes Payment on Delivery")}>
        <View style={styles.options}>
          <Text style={styles.optionsText}>Payment Options</Text>
        </View>
      </TouchableOpacity>

      {/* Edit Profile */}
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.options}>
          <Text style={styles.optionsText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>

      {/* Contact Us */}
      <TouchableOpacity onPress={() => alert("call +233 209623677 for any enquires")}>
        <View style={styles.options}>
          <Text style={styles.optionsText}>Contact Support</Text>
        </View>

      </TouchableOpacity>
      {/* Logout */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.options}>
          <Text style={styles.optionsText}>Sign In</Text>
        </View>
      </TouchableOpacity>
    </View>
    </View>
    );
};






const styles = StyleSheet.create({
  contentView: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    justifyContent: "space-between",
  },
  titleView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listView: {
    flex: 9,
    backgroundColor: "white",
  },
  bottomView: {
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileView: {
    margin: 10,
    padding: 10,
    flex: 1,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  options: {
    display: "flex",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    borderTopColor: "#DFDFDF",
    borderTopWidth: 0.5,
    borderBottomColor: "#DFDFDF",
    borderBottomWidth: 0.5,
  },
  optionsText: {
    fontSize: 18,
  },
  signoutButton: {
    marginTop: 7,
    width: 300,
    height: 50,
    backgroundColor: "#A3A2A2",
    alignSelf: "center",
    borderRadius: 30,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginTop: 3,
  },
});

export default Account;
