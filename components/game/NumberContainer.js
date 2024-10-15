import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

// window includes the status bar, while screen doesn't on Android
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: deviceWidth < 300 ? 16 : 20,
		margin: deviceWidth < 300 ? 16 : 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent500,
    fontSize: deviceWidth < 300 ? 25 : 36,
    fontFamily: "open-sans-bold",
  },
});
