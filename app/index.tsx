import { Text, View } from "react-native"
import Button from "./components/Button"
import CategoriesGroup from "./components/CategoriesGroup"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <Text style={{ fontSize: 50 }}>Sabías qué...</Text>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <Button title="Start!" />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <View style={{ flex: 1, padding: 20 }}>
          <CategoriesGroup />
        </View>
      </View>
    </View>
  )
}
