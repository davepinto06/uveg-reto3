import { useLocalSearchParams } from "expo-router"
import { Text, View, StyleSheet } from "react-native"
import { getRandomFact } from "./_data/facts"

export default function FactScreen() {
  const { category } = useLocalSearchParams()

  // Manejar caso donde category podría ser un array
  const categoryName = Array.isArray(category) ? category[0] : category
  const factText = getRandomFact(categoryName || "")

  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>{categoryName}</Text>
      <Text style={styles.factText}>{factText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  categoryText: {
    color: "#ffd700",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  factText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 28,
    paddingHorizontal: 15,
  },
})
