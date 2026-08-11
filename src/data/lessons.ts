export type LessonCategoryId =
  | 'letters'
  | 'fruits'
  | 'vegetables'
  | 'animals'
  | 'colors'
  | 'numbers'
  | 'shapes'
  | 'everyday'

export interface LessonItem {
  id: string
  label: string
  word: string
  emoji: string
  sentence: string
  hint?: string
  color?: string
}

export interface LessonCategory {
  id: LessonCategoryId
  title: string
  emoji: string
  subtitle: string
  accent: string
  cardGradient: string
  items: LessonItem[]
}

export const letterLessons: LessonItem[] = [
  { id: 'a', label: 'A', word: 'Apple', emoji: '🍎', sentence: 'Apple starts with the letter A.' },
  { id: 'b', label: 'B', word: 'Ball', emoji: '⚽', sentence: 'Ball starts with the letter B.' },
  { id: 'c', label: 'C', word: 'Cat', emoji: '🐱', sentence: 'Cat starts with the letter C.' },
  { id: 'd', label: 'D', word: 'Dog', emoji: '🐶', sentence: 'Dog starts with the letter D.' },
  { id: 'e', label: 'E', word: 'Elephant', emoji: '🐘', sentence: 'Elephant starts with the letter E.' },
  { id: 'f', label: 'F', word: 'Fish', emoji: '🐟', sentence: 'Fish starts with the letter F.' },
  { id: 'g', label: 'G', word: 'Grapes', emoji: '🍇', sentence: 'Grapes starts with the letter G.' },
  { id: 'h', label: 'H', word: 'Hat', emoji: '🎩', sentence: 'Hat starts with the letter H.' },
  { id: 'i', label: 'I', word: 'Ice cream', emoji: '🍦', sentence: 'Ice cream starts with the letter I.' },
  { id: 'j', label: 'J', word: 'Juice', emoji: '🧃', sentence: 'Juice starts with the letter J.' },
  { id: 'k', label: 'K', word: 'Kite', emoji: '🪁', sentence: 'Kite starts with the letter K.' },
  { id: 'l', label: 'L', word: 'Lion', emoji: '🦁', sentence: 'Lion starts with the letter L.' },
  { id: 'm', label: 'M', word: 'Moon', emoji: '🌙', sentence: 'Moon starts with the letter M.' },
  { id: 'n', label: 'N', word: 'Nest', emoji: '🪺', sentence: 'Nest starts with the letter N.' },
  { id: 'o', label: 'O', word: 'Orange', emoji: '🍊', sentence: 'Orange starts with the letter O.' },
  { id: 'p', label: 'P', word: 'Pencil', emoji: '✏️', sentence: 'Pencil starts with the letter P.' },
  { id: 'q', label: 'Q', word: 'Queen', emoji: '👑', sentence: 'Queen starts with the letter Q.' },
  { id: 'r', label: 'R', word: 'Rabbit', emoji: '🐰', sentence: 'Rabbit starts with the letter R.' },
  { id: 's', label: 'S', word: 'Sun', emoji: '☀️', sentence: 'Sun starts with the letter S.' },
  { id: 't', label: 'T', word: 'Tree', emoji: '🌳', sentence: 'Tree starts with the letter T.' },
  { id: 'u', label: 'U', word: 'Umbrella', emoji: '☂️', sentence: 'Umbrella starts with the letter U.' },
  { id: 'v', label: 'V', word: 'Violin', emoji: '🎻', sentence: 'Violin starts with the letter V.' },
  { id: 'w', label: 'W', word: 'Watermelon', emoji: '🍉', sentence: 'Watermelon starts with the letter W.' },
  { id: 'x', label: 'X', word: 'Xylophone', emoji: '🎼', sentence: 'Xylophone starts with the letter X.' },
  { id: 'y', label: 'Y', word: 'Yo-yo', emoji: '🪀', sentence: 'Yo-yo starts with the letter Y.' },
  { id: 'z', label: 'Z', word: 'Zebra', emoji: '🦓', sentence: 'Zebra starts with the letter Z.' },
]

export const fruitLessons: LessonItem[] = [
  { id: 'apple', label: '1', word: 'Apple', emoji: '🍎', sentence: 'This is an apple. Apples are red and sweet.' },
  { id: 'banana', label: '2', word: 'Banana', emoji: '🍌', sentence: 'This is a banana. Bananas are yellow.' },
  { id: 'orange', label: '3', word: 'Orange', emoji: '🍊', sentence: 'This is an orange. Oranges are juicy.' },
  { id: 'grapes', label: '4', word: 'Grapes', emoji: '🍇', sentence: 'These are grapes. Grapes grow in bunches.' },
  { id: 'strawberry', label: '5', word: 'Strawberry', emoji: '🍓', sentence: 'This is a strawberry. Strawberries are sweet.' },
  { id: 'mango', label: '6', word: 'Mango', emoji: '🥭', sentence: 'This is a mango. Mangoes are tropical fruits.' },
  { id: 'pineapple', label: '7', word: 'Pineapple', emoji: '🍍', sentence: 'This is a pineapple. Pineapples are spiky and sweet.' },
  { id: 'watermelon', label: '8', word: 'Watermelon', emoji: '🍉', sentence: 'This is a watermelon. Watermelons are big and juicy.' },
  { id: 'cherry', label: '9', word: 'Cherry', emoji: '🍒', sentence: 'These are cherries. Cherries are small and red.' },
  { id: 'peach', label: '10', word: 'Peach', emoji: '🍑', sentence: 'This is a peach. Peaches are soft and fuzzy.' },
  { id: 'pear', label: '11', word: 'Pear', emoji: '🍐', sentence: 'This is a pear. Pears are green or yellow.' },
  { id: 'lemon', label: '12', word: 'Lemon', emoji: '🍋', sentence: 'This is a lemon. Lemons taste sour.' },
  { id: 'coconut', label: '13', word: 'Coconut', emoji: '🥥', sentence: 'This is a coconut. Coconuts have water inside.' },
  { id: 'kiwi', label: '14', word: 'Kiwi', emoji: '🥝', sentence: 'This is a kiwi. Kiwis are brown outside and green inside.' },
  { id: 'blueberry', label: '15', word: 'Blueberry', emoji: '🫐', sentence: 'These are blueberries. Blueberries are small and blue.' },
]

export const vegetableLessons: LessonItem[] = [
  { id: 'carrot', label: '1', word: 'Carrot', emoji: '🥕', sentence: 'This is a carrot. Carrots are orange and crunchy.' },
  { id: 'tomato', label: '2', word: 'Tomato', emoji: '🍅', sentence: 'This is a tomato. Tomatoes are red and juicy.' },
  { id: 'cucumber', label: '3', word: 'Cucumber', emoji: '🥒', sentence: 'This is a cucumber. Cucumbers are green and cool.' },
  { id: 'broccoli', label: '4', word: 'Broccoli', emoji: '🥦', sentence: 'This is broccoli. Broccoli looks like a tiny tree.' },
  { id: 'potato', label: '5', word: 'Potato', emoji: '🥔', sentence: 'This is a potato. Potatoes grow under the ground.' },
  { id: 'corn', label: '6', word: 'Corn', emoji: '🌽', sentence: 'This is corn. Corn is yellow and sweet.' },
  { id: 'onion', label: '7', word: 'Onion', emoji: '🧅', sentence: 'This is an onion. Onions can make you cry!' },
  { id: 'pepper', label: '8', word: 'Pepper', emoji: '🫑', sentence: 'This is a pepper. Peppers can be green, red, or yellow.' },
  { id: 'lettuce', label: '9', word: 'Lettuce', emoji: '🥬', sentence: 'This is lettuce. Lettuce is leafy and green.' },
  { id: 'pumpkin', label: '10', word: 'Pumpkin', emoji: '🎃', sentence: 'This is a pumpkin. Pumpkins are big and orange.' },
  { id: 'peas', label: '11', word: 'Peas', emoji: '🟢', sentence: 'These are peas. Peas are little and green.' },
  { id: 'eggplant', label: '12', word: 'Eggplant', emoji: '🍆', sentence: 'This is an eggplant. Eggplants are purple.' },
  { id: 'mushroom', label: '13', word: 'Mushroom', emoji: '🍄', sentence: 'This is a mushroom. Mushrooms grow in damp places.' },
  { id: 'garlic', label: '14', word: 'Garlic', emoji: '🧄', sentence: 'This is garlic. Garlic has a strong smell.' },
  { id: 'avocado', label: '15', word: 'Avocado', emoji: '🥑', sentence: 'This is an avocado. Avocados are creamy and green.' },
]

export const animalLessons: LessonItem[] = [
  { id: 'dog', label: '1', word: 'Dog', emoji: '🐶', sentence: 'This is a dog. A dog says woof!', hint: 'Woof!' },
  { id: 'cat', label: '2', word: 'Cat', emoji: '🐱', sentence: 'This is a cat. A cat says meow!', hint: 'Meow!' },
  { id: 'lion', label: '3', word: 'Lion', emoji: '🦁', sentence: 'This is a lion. A lion says roar!', hint: 'Roar!' },
  { id: 'elephant', label: '4', word: 'Elephant', emoji: '🐘', sentence: 'This is an elephant. Elephants have long trunks.', hint: 'Trumpet!' },
  { id: 'monkey', label: '5', word: 'Monkey', emoji: '🐵', sentence: 'This is a monkey. Monkeys love to climb trees.', hint: 'Ooh ooh!' },
  { id: 'bird', label: '6', word: 'Bird', emoji: '🐦', sentence: 'This is a bird. A bird says tweet!', hint: 'Tweet!' },
  { id: 'fish', label: '7', word: 'Fish', emoji: '🐠', sentence: 'This is a fish. Fish swim in the water.', hint: 'Blub!' },
  { id: 'rabbit', label: '8', word: 'Rabbit', emoji: '🐰', sentence: 'This is a rabbit. Rabbits hop and have long ears.', hint: 'Hop!' },
  { id: 'bear', label: '9', word: 'Bear', emoji: '🐻', sentence: 'This is a bear. Bears are big and furry.', hint: 'Grrr!' },
  { id: 'tiger', label: '10', word: 'Tiger', emoji: '🐯', sentence: 'This is a tiger. Tigers have orange and black stripes.', hint: 'Growl!' },
  { id: 'cow', label: '11', word: 'Cow', emoji: '🐮', sentence: 'This is a cow. A cow says moo!', hint: 'Moo!' },
  { id: 'horse', label: '12', word: 'Horse', emoji: '🐴', sentence: 'This is a horse. Horses can run very fast.', hint: 'Neigh!' },
  { id: 'duck', label: '13', word: 'Duck', emoji: '🦆', sentence: 'This is a duck. A duck says quack!', hint: 'Quack!' },
  { id: 'frog', label: '14', word: 'Frog', emoji: '🐸', sentence: 'This is a frog. A frog says ribbit!', hint: 'Ribbit!' },
  { id: 'butterfly', label: '15', word: 'Butterfly', emoji: '🦋', sentence: 'This is a butterfly. Butterflies have pretty wings.', hint: 'Flutter!' },
  { id: 'pig', label: '16', word: 'Pig', emoji: '🐷', sentence: 'This is a pig. A pig says oink!', hint: 'Oink!' },
  { id: 'sheep', label: '17', word: 'Sheep', emoji: '🐑', sentence: 'This is a sheep. A sheep says baa!', hint: 'Baa!' },
  { id: 'chicken', label: '18', word: 'Chicken', emoji: '🐔', sentence: 'This is a chicken. A chicken says cluck!', hint: 'Cluck!' },
]

export const colorLessons: LessonItem[] = [
  { id: 'red', label: '1', word: 'Red', emoji: '❤️', sentence: 'Red like an apple or a heart.', color: '#F87171', hint: 'Apple 🍎' },
  { id: 'blue', label: '2', word: 'Blue', emoji: '💙', sentence: 'Blue like the sky or the ocean.', color: '#60A5FA', hint: 'Sky 🌤️' },
  { id: 'green', label: '3', word: 'Green', emoji: '💚', sentence: 'Green like grass and leaves.', color: '#4ADE80', hint: 'Leaf 🍃' },
  { id: 'yellow', label: '4', word: 'Yellow', emoji: '💛', sentence: 'Yellow like the sun and bananas.', color: '#FACC15', hint: 'Sun ☀️' },
  { id: 'orange', label: '5', word: 'Orange', emoji: '🧡', sentence: 'Orange like a carrot or an orange.', color: '#FB923C', hint: 'Orange 🍊' },
  { id: 'purple', label: '6', word: 'Purple', emoji: '💜', sentence: 'Purple like grapes and violets.', color: '#A78BFA', hint: 'Grapes 🍇' },
  { id: 'pink', label: '7', word: 'Pink', emoji: '💗', sentence: 'Pink like a flower or cotton candy.', color: '#F9A8D4', hint: 'Flower 🌸' },
  { id: 'brown', label: '8', word: 'Brown', emoji: '🤎', sentence: 'Brown like chocolate and wood.', color: '#A16207', hint: 'Bear 🐻' },
  { id: 'black', label: '9', word: 'Black', emoji: '🖤', sentence: 'Black like the night sky.', color: '#1E293B', hint: 'Night 🌙' },
  { id: 'white', label: '10', word: 'White', emoji: '🤍', sentence: 'White like snow and clouds.', color: '#F8FAFC', hint: 'Snow ❄️' },
  { id: 'gray', label: '11', word: 'Gray', emoji: '🐘', sentence: 'Gray like an elephant or a cloudy day.', color: '#94A3B8', hint: 'Cloud ☁️' },
]

const numberWords = [
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
  'eighteen', 'nineteen', 'twenty',
] as const

const numberObjects = ['⭐', '🍎', '🔵', '🌸', '🐠', '🎈', '🍪', '🧩', '🦋', '🚗'] as const

export const numberLessons: LessonItem[] = Array.from({ length: 20 }, (_, i) => {
  const n = i + 1
  const object = numberObjects[i % numberObjects.length]
  return {
    id: `n${n}`,
    label: String(n),
    word: String(n),
    emoji: n <= 5 ? object.repeat(n) : `${object} × ${n}`,
    sentence: `This is the number ${n} (${numberWords[i]}). Let's count to ${n}!`,
    hint: `Count: ${n} · ${numberWords[i]}`,
  }
})

export const shapeLessons: LessonItem[] = [
  { id: 'circle', label: '1', word: 'Circle', emoji: '⭕', sentence: 'A circle is round like a ball or the sun.' },
  { id: 'square', label: '2', word: 'Square', emoji: '⬛', sentence: 'A square has 4 equal sides.' },
  { id: 'triangle', label: '3', word: 'Triangle', emoji: '🔺', sentence: 'A triangle has 3 sides and 3 corners.' },
  { id: 'rectangle', label: '4', word: 'Rectangle', emoji: '▭', sentence: 'A rectangle has 2 long sides and 2 short sides.' },
  { id: 'star', label: '5', word: 'Star', emoji: '⭐', sentence: 'A star has points that shine bright.' },
  { id: 'heart', label: '6', word: 'Heart', emoji: '❤️', sentence: 'A heart is the shape of love.' },
  { id: 'oval', label: '7', word: 'Oval', emoji: '⬭', sentence: 'An oval is like a stretched circle.' },
  { id: 'diamond', label: '8', word: 'Diamond', emoji: '💎', sentence: 'A diamond looks like a kite shape.' },
  { id: 'pentagon', label: '9', word: 'Pentagon', emoji: '⬠', sentence: 'A pentagon has 5 sides.' },
  { id: 'hexagon', label: '10', word: 'Hexagon', emoji: '⬡', sentence: 'A hexagon has 6 sides like a honeycomb.' },
  { id: 'crescent', label: '11', word: 'Crescent', emoji: '🌙', sentence: 'A crescent looks like a curved moon.' },
  { id: 'arrow', label: '12', word: 'Arrow', emoji: '➡️', sentence: 'An arrow points the way to go.' },
]

export const everydayLessons: LessonItem[] = [
  { id: 'book', label: '1', word: 'Book', emoji: '📚', sentence: 'A book is for reading stories.' },
  { id: 'ball', label: '2', word: 'Ball', emoji: '⚽', sentence: 'A ball is for playing and kicking.' },
  { id: 'chair', label: '3', word: 'Chair', emoji: '🪑', sentence: 'A chair is for sitting.' },
  { id: 'door', label: '4', word: 'Door', emoji: '🚪', sentence: 'A door opens and closes.' },
  { id: 'bed', label: '5', word: 'Bed', emoji: '🛏️', sentence: 'A bed is for sleeping.' },
  { id: 'cup', label: '6', word: 'Cup', emoji: '🥤', sentence: 'A cup is for drinking.' },
  { id: 'bag', label: '7', word: 'Bag', emoji: '🎒', sentence: 'A bag carries your things.' },
  { id: 'shoe', label: '8', word: 'Shoe', emoji: '👟', sentence: 'Shoes go on your feet.' },
  { id: 'shirt', label: '9', word: 'Shirt', emoji: '👕', sentence: 'A shirt is clothes for your body.' },
  { id: 'pencil', label: '10', word: 'Pencil', emoji: '✏️', sentence: 'A pencil is for writing and drawing.' },
  { id: 'school', label: '11', word: 'School', emoji: '🏫', sentence: 'School is where we learn.' },
  { id: 'home', label: '12', word: 'Home', emoji: '🏠', sentence: 'Home is where your family lives.' },
  { id: 'table', label: '13', word: 'Table', emoji: '🪵', sentence: 'A table is for eating and working.' },
  { id: 'window', label: '14', word: 'Window', emoji: '🪟', sentence: 'A window lets us see outside.' },
  { id: 'clock', label: '15', word: 'Clock', emoji: '🕐', sentence: 'A clock tells us the time.' },
  { id: 'car', label: '16', word: 'Car', emoji: '🚗', sentence: 'A car takes us places.' },
  { id: 'bus', label: '17', word: 'Bus', emoji: '🚌', sentence: 'A bus carries many people.' },
  { id: 'tree', label: '18', word: 'Tree', emoji: '🌳', sentence: 'A tree grows tall with leaves.' },
  { id: 'flower', label: '19', word: 'Flower', emoji: '🌸', sentence: 'A flower is pretty and colorful.' },
  { id: 'phone', label: '20', word: 'Phone', emoji: '📱', sentence: 'A phone helps us talk to people.' },
]

export const lessonCategories: LessonCategory[] = [
  {
    id: 'letters',
    title: 'ABC Letters',
    emoji: '🔤',
    subtitle: 'Learn A–Z with simple words.',
    accent: 'bg-sky-deep',
    cardGradient: 'from-sky to-lilac',
    items: letterLessons,
  },
  {
    id: 'fruits',
    title: 'Fruits',
    emoji: '🍎',
    subtitle: 'Learn fruit names with colorful pictures.',
    accent: 'bg-blush-deep',
    cardGradient: 'from-blush to-sun',
    items: fruitLessons,
  },
  {
    id: 'vegetables',
    title: 'Vegetables',
    emoji: '🥕',
    subtitle: 'Learn common vegetable names.',
    accent: 'bg-mint-deep',
    cardGradient: 'from-mint to-sky',
    items: vegetableLessons,
  },
  {
    id: 'animals',
    title: 'Animals',
    emoji: '🐶',
    subtitle: 'Learn animal names and sounds.',
    accent: 'bg-sun-deep',
    cardGradient: 'from-sun to-mint',
    items: animalLessons,
  },
  {
    id: 'colors',
    title: 'Colors',
    emoji: '🎨',
    subtitle: 'Learn basic colors through fun objects.',
    accent: 'bg-lilac-deep',
    cardGradient: 'from-lilac to-blush',
    items: colorLessons,
  },
  {
    id: 'numbers',
    title: 'Numbers',
    emoji: '🔢',
    subtitle: 'Learn numbers 1–20.',
    accent: 'bg-sky-deep',
    cardGradient: 'from-sky to-mint',
    items: numberLessons,
  },
  {
    id: 'shapes',
    title: 'Shapes',
    emoji: '🔺',
    subtitle: 'Learn Circle, Square, Triangle and more.',
    accent: 'bg-blush-deep',
    cardGradient: 'from-blush-deep to-sun-deep',
    items: shapeLessons,
  },
  {
    id: 'everyday',
    title: 'Everyday Words',
    emoji: '🏠',
    subtitle: 'Learn useful words from home, school and daily life.',
    accent: 'bg-mint-deep',
    cardGradient: 'from-mint-deep to-sky-deep',
    items: everydayLessons,
  },
]

export function getLessonCategory(id: LessonCategoryId): LessonCategory {
  return lessonCategories.find((c) => c.id === id) ?? lessonCategories[0]
}

export function isLessonCategoryId(value: string): value is LessonCategoryId {
  return lessonCategories.some((c) => c.id === value)
}
