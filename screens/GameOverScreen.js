import { View, Image, StyleSheet, Text } from "react-native";

import Title from "../components/ui/Title";

import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text>Your phone needed</Text>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center", // horizontal left to right
    justifyContent: "center", // vertical top to bottom
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    // this is important for borderRadius to work
    // to hide the square corners of the image
    overflow: "hidden", 
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
