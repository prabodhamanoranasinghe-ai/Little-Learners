export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Learn', href: '#learn' },
  { label: 'Videos', href: '#videos' },
  { label: 'Activities', href: '#activities' },
  { label: 'About', href: '#about' },
] as const

export const categories = [
  {
    id: 'letters',
    emoji: '🔤',
    title: 'ABC Letters',
    description: 'Learn A–Z with simple words.',
    example: 'A → Apple 🍎',
    color: 'bg-sky-soft',
    accent: 'from-sky to-sky-deep',
    ring: 'hover:ring-sky-deep/40',
  },
  {
    id: 'fruits',
    emoji: '🍎',
    title: 'Fruits',
    description: 'Learn fruit names with colorful pictures.',
    example: 'Apple, Banana, Orange',
    color: 'bg-blush/20',
    accent: 'from-blush to-blush-deep',
    ring: 'hover:ring-blush-deep/40',
  },
  {
    id: 'vegetables',
    emoji: '🥕',
    title: 'Vegetables',
    description: 'Learn common vegetable names.',
    example: 'Carrot, Tomato, Cucumber',
    color: 'bg-mint/25',
    accent: 'from-mint to-mint-deep',
    ring: 'hover:ring-mint-deep/40',
  },
  {
    id: 'animals',
    emoji: '🐶',
    title: 'Animals',
    description: 'Learn animal names and sounds.',
    example: 'Dog, Cat, Lion',
    color: 'bg-sun/40',
    accent: 'from-sun to-sun-deep',
    ring: 'hover:ring-sun-deep/40',
  },
  {
    id: 'colors',
    emoji: '🎨',
    title: 'Colors',
    description: 'Learn basic colors through fun objects.',
    example: 'Red, Blue, Green, Yellow',
    color: 'bg-lilac/25',
    accent: 'from-lilac to-lilac-deep',
    ring: 'hover:ring-lilac-deep/40',
  },
  {
    id: 'numbers',
    emoji: '🔢',
    title: 'Numbers',
    description: 'Learn numbers 1–20.',
    example: '1, 2, 3… Count with me!',
    color: 'bg-sky-soft',
    accent: 'from-sky to-lilac-deep',
    ring: 'hover:ring-sky-deep/40',
  },
  {
    id: 'shapes',
    emoji: '🔺',
    title: 'Shapes',
    description: 'Learn Circle, Square, Triangle and more.',
    example: 'Circle, Square, Triangle',
    color: 'bg-blush/20',
    accent: 'from-blush-deep to-sun-deep',
    ring: 'hover:ring-blush-deep/40',
  },
  {
    id: 'everyday',
    emoji: '🏠',
    title: 'Everyday Words',
    description: 'Learn useful words from home, school and daily life.',
    example: 'Book, Ball, Chair, Door',
    color: 'bg-mint/25',
    accent: 'from-mint-deep to-sky-deep',
    ring: 'hover:ring-mint-deep/40',
  },
] as const

export const howItWorks = [
  {
    step: '01',
    title: 'Choose a Lesson',
    description: 'Pick a topic your child wants to learn.',
    emoji: '📚',
    color: 'bg-sky-soft',
  },
  {
    step: '02',
    title: 'Watch & Learn',
    description: 'Learn through colorful pictures, sounds and simple explanations.',
    emoji: '👀',
    color: 'bg-sun/50',
  },
  {
    step: '03',
    title: 'Practice & Play',
    description: 'Complete fun activities to remember new words.',
    emoji: '🎮',
    color: 'bg-mint/40',
  },
] as const

export const socialLinks = {
  facebook: 'https://www.facebook.com/cutelearn/',
  tiktok: 'https://www.tiktok.com/@littlelearners260',
} as const

export const videos = [
  {
    id: 'tt-colors',
    title: 'Learn Colors',
    description: 'Red, blue, yellow and green — cute color learning for little ones.',
    duration: '1:00',
    emoji: '🎨',
    gradient: 'from-lilac to-blush',
    source: 'tiktok' as const,
    url: 'https://www.tiktok.com/@littlelearners260/video/7672834022413094164',
    embedId: '7672834022413094164',
  },
  {
    id: 'tt-vegetables',
    title: 'Learn Vegetables',
    description: 'Tomato, carrot and cucumber — everyday veggie words made cute.',
    duration: '1:00',
    emoji: '🥕',
    gradient: 'from-mint to-sun',
    source: 'tiktok' as const,
    url: 'https://www.tiktok.com/@littlelearners260/video/7672833222198578452',
    embedId: '7672833222198578452',
  },
  {
    id: 'tt-cucumber',
    title: 'Learn Vegetables: Cucumber',
    description: 'Practice saying cucumber and more vegetable words in English.',
    duration: '1:00',
    emoji: '🥒',
    gradient: 'from-mint to-sky',
    source: 'tiktok' as const,
    url: 'https://www.tiktok.com/@littlelearners260/video/7672832998771548436',
    embedId: '7672832998771548436',
  },
  {
    id: 'fb-household',
    title: 'Everyday Words at Home',
    description: 'Cup, chair, table and spoon — useful home vocabulary.',
    duration: 'Reel',
    emoji: '🏠',
    gradient: 'from-sky to-lilac',
    source: 'facebook' as const,
    url: 'https://www.facebook.com/reel/997001780051033',
    embedId: '997001780051033',
  },
  {
    id: 'fb-blue',
    title: 'Learn the Color Blue',
    description: 'A short Facebook reel to practice the color blue.',
    duration: 'Reel',
    emoji: '💙',
    gradient: 'from-sky to-sky-deep',
    source: 'facebook' as const,
    url: 'https://www.facebook.com/reel/2480974462400756',
    embedId: '2480974462400756',
  },
  {
    id: 'fb-tomato',
    title: 'Learn Vegetables: Tomato',
    description: 'Fun vegetable vocabulary with tomato and friends.',
    duration: 'Reel',
    emoji: '🍅',
    gradient: 'from-blush to-sun',
    source: 'facebook' as const,
    url: 'https://www.facebook.com/reel/1730584538770689',
    embedId: '1730584538770689',
  },
] as const

export const activities = [
  {
    id: 'match-letter',
    emoji: '🔤',
    title: 'Match the Letter',
    description: 'Match each letter with the right word and picture.',
    color: 'bg-sky-soft',
    lessonId: 'letters',
  },
  {
    id: 'match-fruit',
    emoji: '🍎',
    title: 'Match the Fruit',
    description: 'Find the fruit that matches the word you hear.',
    color: 'bg-blush/25',
    lessonId: 'fruits',
  },
  {
    id: 'find-color',
    emoji: '🎨',
    title: 'Find the Color',
    description: 'Tap the object that shows the color you need.',
    color: 'bg-lilac/30',
    lessonId: 'colors',
  },
  {
    id: 'guess-animal',
    emoji: '🐶',
    title: 'Guess the Animal',
    description: 'Listen to the sound and guess which animal it is.',
    color: 'bg-sun/45',
    lessonId: 'animals',
  },
  {
    id: 'count-objects',
    emoji: '🔢',
    title: 'Count the Objects',
    description: 'Count the objects and pick the correct number.',
    color: 'bg-mint/35',
    lessonId: 'numbers',
  },
  {
    id: 'match-shape',
    emoji: '🔺',
    title: 'Match the Shape',
    description: 'Match circles, squares, triangles and more.',
    color: 'bg-sky-soft',
    lessonId: 'shapes',
  },
] as const

export const parentBenefits = [
  'Easy lessons',
  'Visual learning',
  'Short videos',
  'Vocabulary building',
  'Fun practice activities',
  'Progress-friendly learning',
] as const

export const features = [
  {
    emoji: '🌟',
    title: 'Simple Learning',
    description: 'Easy words and explanations designed for young learners.',
    color: 'bg-sun/45',
  },
  {
    emoji: '🎨',
    title: 'Visual Learning',
    description: 'Colorful pictures help children understand and remember words.',
    color: 'bg-blush/25',
  },
  {
    emoji: '🎵',
    title: 'Fun Learning',
    description: 'Songs, videos and activities make learning enjoyable.',
    color: 'bg-lilac/30',
  },
  {
    emoji: '❤️',
    title: 'Kid Friendly',
    description: 'A positive and welcoming learning environment.',
    color: 'bg-mint/35',
  },
] as const

export const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Parent of a 4-year-old',
    quote:
      'My child loves the animal lessons! Learning English has become part of our daily routine.',
    emoji: '🌈',
  },
  {
    name: 'James K.',
    role: 'Dad & home educator',
    quote:
      'The short videos keep my son focused. He asks to practice letters every morning before breakfast.',
    emoji: '⭐',
  },
  {
    name: 'Priya R.',
    role: 'Mom of twins',
    quote:
      'Simple, colorful, and so easy to use together. Our twins now shout out fruit names at the market!',
    emoji: '💫',
  },
] as const

export const faqs = [
  {
    question: 'What age group is Little Learners for?',
    answer:
      'Little Learners is designed for young children roughly ages 3–8 who are starting to explore English vocabulary, letters, numbers, and simple sentences.',
  },
  {
    question: 'What can children learn?',
    answer:
      'Kids can learn ABC letters, fruits, vegetables, animals, colors, numbers, shapes, everyday words, and simple sentences through visual lessons and activities.',
  },
  {
    question: 'Are the lessons free?',
    answer:
      'Many starter lessons and activities are free to explore. Premium content unlocks extra videos, practice packs, and progress tracking for families who want more.',
  },
  {
    question: 'Can parents learn together with their children?',
    answer:
      'Absolutely! Lessons are short and visual so parents and children can explore together, pause, repeat, and celebrate every small win.',
  },
  {
    question: 'Are there learning videos?',
    answer:
      'Yes. Short, colorful learning videos cover the alphabet, fruits, animals, colors, numbers, and more — perfect for quick daily practice.',
  },
  {
    question: 'How often should children practice?',
    answer:
      'Little and often works best. About 10–15 minutes a day helps children remember new words without feeling tired or overwhelmed.',
  },
] as const

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Learn', href: '#learn' },
  { label: 'Videos', href: '#videos' },
  { label: 'Activities', href: '#activities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
] as const
