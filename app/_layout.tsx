import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "¿Sabías qué?", headerTitleAlign: "center" }}
      />
      <Stack.Screen name="fact" options={{ title: "Curious Fact" }} />
    </Stack>
  )
}
