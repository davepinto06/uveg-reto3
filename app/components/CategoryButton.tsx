import { Animated, Pressable, StyleSheet, Text } from "react-native"

type CategoryButtonProps = {
  title: string
  isSelected: boolean
  onPress: () => void
}

export default function CategoryButton({
  title,
  isSelected,
  onPress,
}: CategoryButtonProps) {
  const backgroundColorRef = new Animated.Value(isSelected ? 1 : 0)

  const handlePress = () => {
    Animated.timing(backgroundColorRef, {
      toValue: isSelected ? 1 : 0,
      useNativeDriver: true,
    }).start()
    onPress()
  }

  const backgroundColor = backgroundColorRef.interpolate({
    inputRange: [0, 1],
    outputRange: ["#FFF", "#008CBA"],
  })

  return (
    <Pressable onPress={handlePress}>
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
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
})
