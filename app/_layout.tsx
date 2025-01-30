import { Stack } from "expo-router"
import { Image, StyleSheet } from "react-native"

function AppLogo() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  )
}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "¿Sabías qué?",
          headerTitleAlign: "center",
          headerTitle: () => <AppLogo />,
        }}
      />
      <Stack.Screen name="fact" options={{ title: "Curious Fact" }} />
    </Stack>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
})
