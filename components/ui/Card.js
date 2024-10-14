import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
	card: {
    // flex: "column", // default
    // top to bottom
    justifyContent: "center",
    // left to right default is stretch`
    alignItems: "center",
    marginTop: 36,
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