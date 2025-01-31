import { Text, View } from "react-native"
import Button from "./components/Button"
import CategoriesGroup from "./components/CategoriesGroup"
import { useState } from "react"

export default function Index() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null)

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
        <Button title="Start!" selectedCategory={selectedButton} />
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
          <CategoriesGroup
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
        </View>
      </View>
    </View>
  )
}
