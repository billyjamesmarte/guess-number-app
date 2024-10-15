import { View, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	card: {
    // flex: "column", // default
    // top to bottom
    justifyContent: "center",
    // left to right default is stretch`
    alignItems: "center",
    marginTop: deviceWidth < 300 ? 18 : 25,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 5,
    // shadow properties
    elevation: 10, // Android only
    shadowColor: "black", // iOS only.
    shadowOffset: { width: 0, height: 2 }, // iOS only.
    shadowRadius: 6, // iOS only.
    shadowOpacity: 0.26, // iOS only.
  },
});