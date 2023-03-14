import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const Homescreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.container}>Homescreen</Text>
      <MaterialCommunityIcons
        name="plus-box-outline"
        size={50}
        style={{
          marginLeft: 20,
          marginTop: 200,
        }}
        onPress={() => navigation.navigate("Post")}
      />
      <MaterialCommunityIcons
        name="account-circle"
        size={50}
        style={{
          marginTop: 10,
          marginLeft: 20,
        }}
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const Profile = () => {
  return (
    <View>
      <Text style={styles.container}>Profile Screen</Text>
    </View>
  );
};

const Post = () => {
  return (
    <View>
      <Text style={styles.container}>Post</Text>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{
            title: "Home",
            headerTitleAlign: "center",

            headerStyle: {
              backgroundColor: "lightblue",
              borderRadius: 30,
              borderColor: "black",
              borderWidth: 1,
            },
            headerTitleStyle: {
              fontSize: 25,
              marginTop: 0,
              marginBottom: 20,
            },
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 250,
  },
});
