import React, { useState } from "react"
import CategoryButton from "./CategoryButton"
import { View, StyleSheet } from "react-native"

type CategoriesGroupProps = {
  selectedButton: string | null
  setSelectedButton: (value: string | null) => void
}

export default function CategoriesGroup({
  selectedButton,
  setSelectedButton,
}: CategoriesGroupProps) {
  const handleButtonPress = (title: string) => {
    if (title === selectedButton) {
      return
    }
    setSelectedButton(title === selectedButton ? null : title)
  }

  const mathButtonTitle = "Matemáticas"
  const scienceButtonTitle = "Ciencia"
  const cinemaButtonTitle = "Cine"

  return (
    <View style={styles.groupContainer}>
      <CategoryButton
        title={mathButtonTitle}
        isSelected={selectedButton === mathButtonTitle}
        onPress={() => handleButtonPress(mathButtonTitle)}
      />
      <CategoryButton
        title={scienceButtonTitle}
        isSelected={selectedButton === scienceButtonTitle}
        onPress={() => handleButtonPress(scienceButtonTitle)}
      />
      <CategoryButton
        title={cinemaButtonTitle}
        isSelected={selectedButton === cinemaButtonTitle}
        onPress={() => handleButtonPress(cinemaButtonTitle)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  groupContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
})
