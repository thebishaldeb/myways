import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CP1Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/favicon.png")} />
      <Text style={styles.text}>
        In this section, you will be asked different questions which help us
        personalize your experience further.
      </Text>
      <Text style={styles.text}>
        Please note that we do not share any of the responses you give in this
        section with the employers.
      </Text>
      <Text style={styles.text}>
        This section is completely to analyse you for better career planning and
        this section directly impacts the Career Insights Section and all your
        recommendations.
      </Text>
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("CareerProfile")}>
          <View style={styles.navigationView}>
            <AntDesign style={styles.navigationIcon} name='caretleft' />
            <Text style={styles.navigationText}>Previous</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CP4", { id: navigation.state.params.id })
          }
        >
          <View style={styles.navigationView}>
            <Text style={styles.navigationText}>Next</Text>
            <AntDesign style={styles.navigationIcon} name='caretright' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

CP1Screen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // marginBottom: 200,
  },
  logo: {
    // alignSelf: "center",
    width: 125,
    height: 120,
    // marginBottom: 5,
    marginTop: 50,
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
    marginTop: 40,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 36,
  },
  navigationView: {
    flexDirection: "row",
  },
  navigationIcon: {
    width: 20,
    height: 20,
    color: "black",
    marginHorizontal: 5,
  },
  navigationText: {
    color: "black",
    fontSize: 10,
  },
});

export default CP1Screen;
