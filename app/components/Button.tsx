import { useRouter, useLocalSearchParams } from "expo-router"
import { Animated, Pressable, StyleSheet, Text } from "react-native"

type ButtonProps = {
  title: string
  selectedCategory: string | null
}
export default function Button({ title, selectedCategory }: ButtonProps) {
  const router = useRouter()
  const params = useLocalSearchParams()
  const { category = selectedCategory } = params
  const backgroundColorRef = new Animated.Value(0)

  // 2. The handlers
  const handlePress = () => {
    Animated.timing(backgroundColorRef, {
      toValue: 1,
      duration: 80,
      useNativeDriver: true,
    }).start()
  }
  const handleRelease = () => {
    Animated.timing(backgroundColorRef, {
      toValue: 0,
      duration: 80,
      useNativeDriver: true,
    }).start()
  }

  const handleNavigate = () => {
    router.push({ pathname: "/fact", params: { category } })
  }

  const backgroundColor = backgroundColorRef.interpolate({
    inputRange: [0, 1],
    outputRange: ["#008CBA", "#FFF"],
  })

  return (
    <Pressable
      onPressIn={handlePress}
      onPressOut={handleRelease}
      onPress={handleNavigate}
    >
      <Animated.View style={[styles.buttonContainer, { backgroundColor }]}>
        <Text style={styles.buttonText}>{title}</Text>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 150,
    minWidth: 300,
    minHeight: 300,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
})
