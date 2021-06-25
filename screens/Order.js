import React from "react";
import{
 View,
 Text,
 StyleSheet

} from "react-native";

const Order = () => {
    return (
        <View style={styles.contentView} forceInset={{ top: "always" }}>

        <Text style={{ fontSize: 30, fontWeight: "500", color: "#9C9696", textAlign:"center", marginTop:100 }}>
              Your Order is Empty
            </Text>
</View>
    );
};


const styles = StyleSheet.create({
    contentView: {
      backgroundColor: "#F2F2F2",
      flex: 1,
      justifyContent: "space-between"
    }
    });




export default Order;