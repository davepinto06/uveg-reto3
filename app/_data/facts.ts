// facts.ts
type FactCategories = {
  [key: string]: string[]
}

export const facts: FactCategories = {
  Matemáticas: [
    "El cero (0) es el único número que no puede representarse en números romanos.",
    "Un círculo tiene 360 grados porque los antiguos babilonios usaban un sistema numérico de base 60.",
    "El símbolo matemático para el infinito (∞) se llama lemniscata.",
    "El número pi (π) se conoce desde hace más de 4000 años.",
    "Hay más formas de barajar un mazo de cartas que átomos en la Tierra.",
  ],
  Ciencia: [
    "Los diamantes pueden quemarse a temperaturas extremadamente altas.",
    "El elemento más abundante en el universo es el hidrógeno.",
    "El cerebro humano genera alrededor de 20 vatios de energía cuando está despierto.",
    "Los osos polares tienen la piel negra debajo de su pelaje blanco.",
    "Una cucharadita de estrella de neutrones pesaría 6,000 millones de toneladas.",
  ],
  Cine: [
    "La primera película con sonido fue 'El cantante de jazz' en 1927.",
    "Stanley Kubrick filmó 127 tomas del asesinato en la ducha de 'Psicosis'.",
    "La máscara de Hannibal Lecter en 'El silencio de los corderos' costó $30,000 dólares.",
    "La película 'Titanic' usó 100,000 galones de agua por minuto durante las escenas de hundimiento.",
    "La famosa frase 'No soy un animal' en 'El hombre elefante' fue improvisada.",
  ],
}

// Función para obtener un hecho aleatorio
export const getRandomFact = (category: string): string => {
  const categoryFacts = facts[category] || []
  return (
    categoryFacts[Math.floor(Math.random() * categoryFacts.length)] ||
    "No hay datos para esta categoría"
  )
}
