import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView
} from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 300) {
    imageSize = 150;
  }
  if (height < 500) {
    imageSize = 80;
  }

  const imageStyle = {
    borderRadius: imageSize / 2,
    width: imageSize,
    height: imageSize,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.hightLight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.hightLight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// Dimensions API
// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center", // horizontal left to right
    justifyContent: "center", // vertical top to bottom
  },
  imageContainer: {
    // borderRadius: deviceWidth < 300 ? 75 : 150,
    // width: deviceWidth < 300 ? 150 : 300,
    // height: deviceWidth < 300 ? 150 : 300,
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
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  hightLight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
});
