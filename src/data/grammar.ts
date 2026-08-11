export type GrammarFilter = 'beginner' | 'elementary' | 'intermediate' | 'advanced'

export type PracticeType = 'mcq' | 'fill'

export interface GrammarExample {
  sentence: string
  highlight: string
  emoji: string
}

export interface GrammarQuestion {
  id: string
  type: PracticeType
  prompt: string
  options?: string[]
  answer: string
  hint?: string
}

export interface GrammarGame {
  type: 'pick' | 'match'
  prompt: string
  items: { id: string; label: string; emoji: string; correct: boolean }[]
}

export interface GrammarLesson {
  id: string
  title: string
  emoji: string
  summary: string
  explanation: string
  examples: GrammarExample[]
  practice: GrammarQuestion[]
  game: GrammarGame
  quiz: GrammarQuestion[]
}

export interface GrammarYear {
  id: string
  year: number
  title: string
  emoji: string
  filter: GrammarFilter
  levelLabel: string
  description: string
  color: string
  accent: string
  lessons: GrammarLesson[]
}

function q(
  id: string,
  type: PracticeType,
  prompt: string,
  answer: string,
  options?: string[],
  hint?: string,
): GrammarQuestion {
  return { id, type, prompt, answer, options, hint }
}

function lesson(
  partial: Omit<GrammarLesson, 'practice' | 'game' | 'quiz'> & {
    practice: GrammarQuestion[]
    quiz: GrammarQuestion[]
    game: GrammarGame
  },
): GrammarLesson {
  return partial
}

export const grammarFilters: { id: GrammarFilter | 'all'; label: string }[] = [
  { id: 'all', label: 'All Levels' },
  { id: 'beginner', label: 'Beginner' },
  { id: 'elementary', label: 'Elementary' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
]

export const grammarYears: GrammarYear[] = [
  {
    id: 'year-1',
    year: 1,
    title: 'Grammar Basics',
    emoji: '🌱',
    filter: 'beginner',
    levelLabel: 'Beginner',
    description: 'For absolute beginners.',
    color: 'bg-mint/35',
    accent: 'from-mint to-mint-deep',
    lessons: [
      lesson({
        id: 'y1-alphabet-words',
        title: 'Alphabet and words',
        emoji: '🔤',
        summary: 'Letters make words we can read and say.',
        explanation:
          'The alphabet has 26 letters. We put letters together to make words. Words help us name things and talk about the world.',
        examples: [
          { sentence: 'A B C are letters.', highlight: 'letters', emoji: '🔤' },
          { sentence: 'Cat is a word.', highlight: 'word', emoji: '🐱' },
          { sentence: 'Sun is a word.', highlight: 'Sun', emoji: '☀️' },
        ],
        practice: [
          q('p1', 'mcq', 'How many letters are in the English alphabet?', '26', ['10', '26', '100']),
          q('p2', 'mcq', 'Which one is a word?', 'Dog', ['D', 'Dog', '123']),
          q('p3', 'fill', 'C-A-T makes the word ____.', 'cat'),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap the real words!',
          items: [
            { id: 'a', label: 'Ball', emoji: '⚽', correct: true },
            { id: 'b', label: 'Xyzq', emoji: '❓', correct: false },
            { id: 'c', label: 'Moon', emoji: '🌙', correct: true },
            { id: 'd', label: 'Bbb', emoji: '❓', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Letters join together to make…', 'words', ['numbers', 'words', 'colors']),
          q('z2', 'mcq', 'Which is a letter?', 'B', ['Bus', 'B', 'Bluebird']),
          q('z3', 'fill', 'A ____ is made of letters.', 'word'),
        ],
      }),
      lesson({
        id: 'y1-naming-words',
        title: 'Naming words',
        emoji: '🏷️',
        summary: 'Naming words tell us the name of a person, place, or thing.',
        explanation:
          'Naming words are special words that name people, places, and things. Cat, school, and Mom are naming words.',
        examples: [
          { sentence: 'Cat is a naming word.', highlight: 'Cat', emoji: '🐱' },
          { sentence: 'School is a naming word.', highlight: 'School', emoji: '🏫' },
          { sentence: 'Ball is a naming word.', highlight: 'Ball', emoji: '⚽' },
        ],
        practice: [
          q('p1', 'mcq', 'Which is a naming word?', 'Apple', ['run', 'Apple', 'happy']),
          q('p2', 'mcq', 'A naming word can name a…', 'thing', ['jump', 'thing', 'quickly']),
          q('p3', 'fill', '____ is a naming word for an animal. (dog/run)', 'dog'),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick the naming words!',
          items: [
            { id: 'a', label: 'Tree', emoji: '🌳', correct: true },
            { id: 'b', label: 'Jump', emoji: '🏃', correct: false },
            { id: 'c', label: 'Book', emoji: '📚', correct: true },
            { id: 'd', label: 'Happy', emoji: '😊', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Naming words name…', 'people, places, things', ['only actions', 'people, places, things', 'only colors']),
          q('z2', 'fill', '____ is a naming word. (chair/sit)', 'chair'),
          q('z3', 'mcq', 'Which is NOT a naming word?', 'run', ['bag', 'run', 'home']),
        ],
      }),
      lesson({
        id: 'y1-singular-plural',
        title: 'Singular and plural',
        emoji: '➕',
        summary: 'Singular means one. Plural means more than one.',
        explanation:
          'When we talk about one thing, we use a singular word: cat. When we talk about more than one, we often add -s: cats.',
        examples: [
          { sentence: 'One cat.', highlight: 'cat', emoji: '🐱' },
          { sentence: 'Two cats.', highlight: 'cats', emoji: '🐱🐱' },
          { sentence: 'One book → two books.', highlight: 'books', emoji: '📚' },
        ],
        practice: [
          q('p1', 'mcq', 'Which word means more than one?', 'dogs', ['dog', 'dogs', 'Dog']),
          q('p2', 'fill', 'One apple → two ____.', 'apples'),
          q('p3', 'mcq', 'Singular means…', 'one', ['one', 'many', 'none']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap the plural words!',
          items: [
            { id: 'a', label: 'stars', emoji: '⭐⭐', correct: true },
            { id: 'b', label: 'star', emoji: '⭐', correct: false },
            { id: 'c', label: 'bags', emoji: '🎒🎒', correct: true },
            { id: 'd', label: 'bag', emoji: '🎒', correct: false },
          ],
        },
        quiz: [
          q('z1', 'fill', 'One ball → two ____.', 'balls'),
          q('z2', 'mcq', 'Plural means…', 'more than one', ['one', 'more than one', 'zero']),
          q('z3', 'mcq', 'Which is singular?', 'flower', ['flowers', 'flower', 'trees']),
        ],
      }),
      lesson({
        id: 'y1-a-an',
        title: 'A / An',
        emoji: '🅰️',
        summary: 'Use a and an before naming words.',
        explanation:
          'We say a before words that start with a consonant sound: a cat, a bag. We say an before words that start with a vowel sound (a, e, i, o, u): an apple, an egg.',
        examples: [
          { sentence: 'This is a cat.', highlight: 'a', emoji: '🐱' },
          { sentence: 'That is an apple.', highlight: 'an', emoji: '🍎' },
          { sentence: 'I see an elephant.', highlight: 'an', emoji: '🐘' },
        ],
        practice: [
          q('p1', 'mcq', '___ apple', 'an', ['a', 'an', 'the']),
          q('p2', 'mcq', '___ dog', 'a', ['a', 'an', 'and']),
          q('p3', 'fill', 'I have ___ umbrella. (a/an)', 'an'),
        ],
        game: {
          type: 'pick',
          prompt: 'Which pairs use “an” correctly?',
          items: [
            { id: 'a', label: 'an egg', emoji: '🥚', correct: true },
            { id: 'b', label: 'a egg', emoji: '❌', correct: false },
            { id: 'c', label: 'an orange', emoji: '🍊', correct: true },
            { id: 'd', label: 'an ball', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'We use an before…', 'vowel sounds', ['numbers', 'vowel sounds', 'plural words']),
          q('z2', 'fill', '___ ice cream (a/an)', 'an'),
          q('z3', 'mcq', '___ book', 'a', ['an', 'a', 'and']),
        ],
      }),
      lesson({
        id: 'y1-this-that',
        title: 'This / That',
        emoji: '👆',
        summary: 'This is near. That is far.',
        explanation:
          'Use this for one thing near you. Use that for one thing farther away.',
        examples: [
          { sentence: 'This is a cat.', highlight: 'This', emoji: '🐱' },
          { sentence: 'That is an apple.', highlight: 'That', emoji: '🍎' },
          { sentence: 'This is my bag.', highlight: 'This', emoji: '🎒' },
        ],
        practice: [
          q('p1', 'mcq', 'Something near you: ___ is my book.', 'This', ['This', 'That', 'These']),
          q('p2', 'mcq', 'Something far away: ___ is a tree.', 'That', ['This', 'That', 'Those']),
          q('p3', 'fill', '____ is a star far away. (This/That)', 'That'),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick correct “this/that” sentences!',
          items: [
            { id: 'a', label: 'This is my nose', emoji: '👃', correct: true },
            { id: 'b', label: 'That is the moon', emoji: '🌙', correct: true },
            { id: 'c', label: 'This are cats', emoji: '❌', correct: false },
            { id: 'd', label: 'That is cars', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'This is used for things that are…', 'near', ['far', 'near', 'many']),
          q('z2', 'fill', '____ is a bird in the sky. (This/That)', 'That'),
          q('z3', 'mcq', '___ is my pencil (near).', 'This', ['That', 'These', 'This']),
        ],
      }),
      lesson({
        id: 'y1-these-those',
        title: 'These / Those',
        emoji: '✌️',
        summary: 'These are near. Those are far. Both mean more than one.',
        explanation:
          'Use these for many things near you. Use those for many things farther away.',
        examples: [
          { sentence: 'These are my books.', highlight: 'These', emoji: '📚' },
          { sentence: 'Those are stars.', highlight: 'Those', emoji: '⭐⭐' },
          { sentence: 'These are red apples.', highlight: 'These', emoji: '🍎🍎' },
        ],
        practice: [
          q('p1', 'mcq', 'Many things near you: ___ are my shoes.', 'These', ['This', 'These', 'That']),
          q('p2', 'mcq', 'Many things far away: ___ are birds.', 'Those', ['These', 'Those', 'This']),
          q('p3', 'fill', '____ are my crayons. (These/Those — near)', 'These'),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap the plural pointing words!',
          items: [
            { id: 'a', label: 'These', emoji: '📚', correct: true },
            { id: 'b', label: 'This', emoji: '📖', correct: false },
            { id: 'c', label: 'Those', emoji: '🌟🌟', correct: true },
            { id: 'd', label: 'That', emoji: '🌟', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'These / Those are used for…', 'more than one', ['one only', 'more than one', 'no things']),
          q('z2', 'fill', '____ are mountains far away.', 'Those'),
          q('z3', 'mcq', '___ are my toys (near).', 'These', ['That', 'This', 'These']),
        ],
      }),
      lesson({
        id: 'y1-pronouns-basic',
        title: 'I / You / He / She / It',
        emoji: '👤',
        summary: 'Little words that take the place of names.',
        explanation:
          'I means me. You means the person I talk to. He is a boy. She is a girl. It is a thing or animal.',
        examples: [
          { sentence: 'I am happy.', highlight: 'I', emoji: '😊' },
          { sentence: 'She is my sister.', highlight: 'She', emoji: '👧' },
          { sentence: 'It is a ball.', highlight: 'It', emoji: '⚽' },
        ],
        practice: [
          q('p1', 'mcq', 'A girl → ___ is kind.', 'She', ['He', 'She', 'It']),
          q('p2', 'mcq', 'A book → ___ is new.', 'It', ['He', 'She', 'It']),
          q('p3', 'fill', 'A boy → ____ is tall. (He/She)', 'He'),
        ],
        game: {
          type: 'pick',
          prompt: 'Match the right word idea!',
          items: [
            { id: 'a', label: 'She = girl', emoji: '👧', correct: true },
            { id: 'b', label: 'He = girl', emoji: '❌', correct: false },
            { id: 'c', label: 'It = thing', emoji: '📦', correct: true },
            { id: 'd', label: 'I = you', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'We use He for…', 'a boy', ['a girl', 'a boy', 'a book']),
          q('z2', 'fill', '____ am a student. (I/He)', 'I'),
          q('z3', 'mcq', 'A cat can be called…', 'It', ['She always', 'He always', 'It']),
        ],
      }),
      lesson({
        id: 'y1-naming-sentences',
        title: 'Simple naming sentences',
        emoji: '📝',
        summary: 'Make easy sentences that name things.',
        explanation:
          'A simple naming sentence can be: This is a… / That is an… We name one thing clearly.',
        examples: [
          { sentence: 'This is a cat.', highlight: 'This is a cat', emoji: '🐱' },
          { sentence: 'That is an apple.', highlight: 'That is an apple', emoji: '🍎' },
          { sentence: 'This is my bag.', highlight: 'This is my bag', emoji: '🎒' },
        ],
        practice: [
          q('p1', 'mcq', 'Choose a complete sentence.', 'This is a dog.', ['This dog', 'This is a dog.', 'Dog this']),
          q('p2', 'fill', 'That is ___ orange. (a/an)', 'an'),
          q('p3', 'mcq', 'Sentences start with a…', 'capital letter', ['number', 'capital letter', 'comma']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick complete naming sentences!',
          items: [
            { id: 'a', label: 'This is a sun.', emoji: '☀️', correct: true },
            { id: 'b', label: 'is cat', emoji: '❌', correct: false },
            { id: 'c', label: 'That is a fish.', emoji: '🐠', correct: true },
            { id: 'd', label: 'apple that', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'fill', 'This is ___ ball. (a/an)', 'a'),
          q('z2', 'mcq', 'A naming sentence tells…', 'what something is', ['only a color', 'what something is', 'only a number']),
          q('z3', 'mcq', 'Which is correct?', 'That is an egg.', ['That is a egg.', 'That is an egg.', 'That egg is an.']),
        ],
      }),
      lesson({
        id: 'y1-action-words',
        title: 'Basic action words',
        emoji: '🏃',
        summary: 'Action words tell us what someone does.',
        explanation:
          'Action words show doing: run, jump, eat, play. They tell us what is happening.',
        examples: [
          { sentence: 'I run.', highlight: 'run', emoji: '🏃' },
          { sentence: 'Birds fly.', highlight: 'fly', emoji: '🐦' },
          { sentence: 'We play.', highlight: 'play', emoji: '🎮' },
        ],
        practice: [
          q('p1', 'mcq', 'Which is an action word?', 'jump', ['happy', 'jump', 'blue']),
          q('p2', 'fill', 'Fish ____ in water. (swim/blue)', 'swim'),
          q('p3', 'mcq', 'Action words show…', 'doing', ['naming only', 'doing', 'counting only']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap the action words!',
          items: [
            { id: 'a', label: 'eat', emoji: '🍽️', correct: true },
            { id: 'b', label: 'table', emoji: '🪵', correct: false },
            { id: 'c', label: 'sing', emoji: '🎤', correct: true },
            { id: 'd', label: 'green', emoji: '🟢', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Which sentence has an action word?', 'I read.', ['A red bag', 'I read.', 'My book']),
          q('z2', 'fill', 'Cats ____ milk. (drink/milk)', 'drink'),
          q('z3', 'mcq', 'Sleep is an…', 'action word', ['naming word', 'action word', 'color word']),
        ],
      }),
      lesson({
        id: 'y1-describing-words',
        title: 'Basic describing words',
        emoji: '🌈',
        summary: 'Describing words tell us more about a thing.',
        explanation:
          'Describing words tell size, color, or feeling: big, small, red, happy. They make sentences more interesting.',
        examples: [
          { sentence: 'A big dog.', highlight: 'big', emoji: '🐶' },
          { sentence: 'A red apple.', highlight: 'red', emoji: '🍎' },
          { sentence: 'A happy child.', highlight: 'happy', emoji: '😄' },
        ],
        practice: [
          q('p1', 'mcq', 'Which is a describing word?', 'soft', ['ball', 'soft', 'run']),
          q('p2', 'fill', 'A ____ sun. (bright/run)', 'bright'),
          q('p3', 'mcq', 'Describing words tell us…', 'more about a thing', ['only actions', 'more about a thing', 'only names']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick describing words!',
          items: [
            { id: 'a', label: 'tiny', emoji: '🔎', correct: true },
            { id: 'b', label: 'chair', emoji: '🪑', correct: false },
            { id: 'c', label: 'cold', emoji: '❄️', correct: true },
            { id: 'd', label: 'jump', emoji: '🏃', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'In “a blue sky”, the describing word is…', 'blue', ['sky', 'blue', 'a']),
          q('z2', 'fill', 'A ____ flower. (pretty/flower)', 'pretty'),
          q('z3', 'mcq', 'Which word describes size?', 'small', ['run', 'small', 'school']),
        ],
      }),
    ],
  },
  {
    id: 'year-2',
    year: 2,
    title: 'Building Sentences',
    emoji: '🌿',
    filter: 'elementary',
    levelLabel: 'Elementary',
    description: 'Learn the building blocks of clear sentences.',
    color: 'bg-sky-soft',
    accent: 'from-sky to-sky-deep',
    lessons: [
      lesson({
        id: 'y2-nouns',
        title: 'Nouns',
        emoji: '📦',
        summary: 'Nouns are naming words for people, places, and things.',
        explanation:
          'A noun names a person (teacher), a place (park), or a thing (pencil). Nouns are the “who” or “what” in a sentence.',
        examples: [
          { sentence: 'The teacher smiles.', highlight: 'teacher', emoji: '👩‍🏫' },
          { sentence: 'We go to the park.', highlight: 'park', emoji: '🏞️' },
          { sentence: 'My pencil is sharp.', highlight: 'pencil', emoji: '✏️' },
        ],
        practice: [
          q('p1', 'mcq', 'Which word is a noun?', 'school', ['quickly', 'school', 'happy']),
          q('p2', 'fill', 'The ____ is blue. (sky/run)', 'sky'),
          q('p3', 'mcq', 'Nouns name…', 'people, places, things', ['only feelings', 'people, places, things', 'only actions']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap the nouns!',
          items: [
            { id: 'a', label: 'doctor', emoji: '🩺', correct: true },
            { id: 'b', label: 'fast', emoji: '⚡', correct: false },
            { id: 'c', label: 'river', emoji: '🏞️', correct: true },
            { id: 'd', label: 'eat', emoji: '🍽️', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'In “The cat sleeps”, the noun is…', 'cat', ['sleeps', 'cat', 'The']),
          q('z2', 'fill', 'A ____ grows in the garden. (flower/pretty)', 'flower'),
          q('z3', 'mcq', 'Which is a place noun?', 'market', ['run', 'soft', 'market']),
        ],
      }),
      lesson({
        id: 'y2-pronouns',
        title: 'Pronouns',
        emoji: '🔄',
        summary: 'Pronouns replace nouns so we do not repeat names.',
        explanation:
          'Instead of saying “Maya likes Maya’s bag,” we say “She likes her bag.” Pronouns like he, she, they, we, it help sentences sound natural.',
        examples: [
          { sentence: 'She has a red bag.', highlight: 'She', emoji: '🎒' },
          { sentence: 'They are friends.', highlight: 'They', emoji: '👯' },
          { sentence: 'We love books.', highlight: 'We', emoji: '📚' },
        ],
        practice: [
          q('p1', 'mcq', 'Replace “Tom”: ___ is kind.', 'He', ['She', 'He', 'They']),
          q('p2', 'fill', 'The children play. ____ are happy. (They/It)', 'They'),
          q('p3', 'mcq', 'Pronouns replace…', 'nouns', ['verbs only', 'nouns', 'commas']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick the pronouns!',
          items: [
            { id: 'a', label: 'we', emoji: '👥', correct: true },
            { id: 'b', label: 'apple', emoji: '🍎', correct: false },
            { id: 'c', label: 'them', emoji: '👉', correct: true },
            { id: 'd', label: 'jump', emoji: '🏃', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“She has a red bag.” She is a…', 'pronoun', ['noun', 'pronoun', 'adjective']),
          q('z2', 'fill', 'Sara is here. ____ is smiling. (She/He)', 'She'),
          q('z3', 'mcq', 'Which is a pronoun?', 'it', ['bag', 'it', 'red']),
        ],
      }),
      lesson({
        id: 'y2-verbs',
        title: 'Verbs',
        emoji: '⚡',
        summary: 'Verbs show actions or being.',
        explanation:
          'Verbs tell what the subject does or is: play, write, is, are. Every complete sentence needs a verb.',
        examples: [
          { sentence: 'Birds sing.', highlight: 'sing', emoji: '🎵' },
          { sentence: 'I write neatly.', highlight: 'write', emoji: '✍️' },
          { sentence: 'She is ready.', highlight: 'is', emoji: '✅' },
        ],
        practice: [
          q('p1', 'mcq', 'Which word is a verb?', 'dance', ['happy', 'dance', 'blue']),
          q('p2', 'fill', 'Children ____ outside. (play/happy)', 'play'),
          q('p3', 'mcq', 'A sentence needs a…', 'verb', ['only emoji', 'verb', 'only color']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap the verbs!',
          items: [
            { id: 'a', label: 'read', emoji: '📖', correct: true },
            { id: 'b', label: 'pencil', emoji: '✏️', correct: false },
            { id: 'c', label: 'climb', emoji: '🧗', correct: true },
            { id: 'd', label: 'green', emoji: '🟢', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'In “We cook rice”, the verb is…', 'cook', ['We', 'cook', 'rice']),
          q('z2', 'fill', 'Fish ____. (swim/water)', 'swim'),
          q('z3', 'mcq', 'Which sentence has a verb?', 'They laugh.', ['A red hat', 'They laugh.', 'My bag']),
        ],
      }),
      lesson({
        id: 'y2-adjectives',
        title: 'Adjectives',
        emoji: '🎨',
        summary: 'Adjectives describe nouns.',
        explanation:
          'Adjectives tell us what kind: tall tree, sweet mango, loud drum. They describe people, places, and things.',
        examples: [
          { sentence: 'She has a red bag.', highlight: 'red', emoji: '🎒' },
          { sentence: 'A tall giraffe.', highlight: 'tall', emoji: '🦒' },
          { sentence: 'Warm soup tastes good.', highlight: 'Warm', emoji: '🥣' },
        ],
        practice: [
          q('p1', 'mcq', 'Which is an adjective?', 'soft', ['soft', 'run', 'school']),
          q('p2', 'fill', 'A ____ lemon. (sour/jump)', 'sour'),
          q('p3', 'mcq', 'Adjectives describe…', 'nouns', ['only verbs', 'nouns', 'only commas']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick the adjectives!',
          items: [
            { id: 'a', label: 'shiny', emoji: '✨', correct: true },
            { id: 'b', label: 'chair', emoji: '🪑', correct: false },
            { id: 'c', label: 'noisy', emoji: '🔊', correct: true },
            { id: 'd', label: 'sleep', emoji: '😴', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'In “a red bag”, red is an…', 'adjective', ['verb', 'adjective', 'pronoun']),
          q('z2', 'fill', 'The ____ puppy wagged its tail. (cute/run)', 'cute'),
          q('z3', 'mcq', 'Which word describes color?', 'yellow', ['jump', 'yellow', 'they']),
        ],
      }),
      lesson({
        id: 'y2-articles',
        title: 'Articles',
        emoji: '📰',
        summary: 'A, an, and the are little helper words before nouns.',
        explanation:
          'A/an mean one (not special). The points to a specific thing we both know: the sun, the teacher.',
        examples: [
          { sentence: 'I see a bird.', highlight: 'a', emoji: '🐦' },
          { sentence: 'I eat an orange.', highlight: 'an', emoji: '🍊' },
          { sentence: 'Look at the moon.', highlight: 'the', emoji: '🌙' },
        ],
        practice: [
          q('p1', 'mcq', '___ sun is bright.', 'The', ['A', 'An', 'The']),
          q('p2', 'fill', 'She wants ___ ice cream. (a/an)', 'an'),
          q('p3', 'mcq', 'Articles come before…', 'nouns', ['verbs only', 'nouns', 'questions only']),
        ],
        game: {
          type: 'pick',
          prompt: 'Correct article pairs!',
          items: [
            { id: 'a', label: 'the sky', emoji: '🌤️', correct: true },
            { id: 'b', label: 'a elephant', emoji: '❌', correct: false },
            { id: 'c', label: 'an umbrella', emoji: '☂️', correct: true },
            { id: 'd', label: 'an car', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'We often use “the” for something…', 'specific', ['unknown always', 'specific', 'plural only']),
          q('z2', 'fill', '___ ant is tiny. (A/An)', 'An'),
          q('z3', 'mcq', '___ book on my desk is new.', 'The', ['An', 'The', 'And']),
        ],
      }),
      lesson({
        id: 'y2-plural-nouns',
        title: 'Singular and plural nouns',
        emoji: '🔢',
        summary: 'Change nouns to show one or many.',
        explanation:
          'Many nouns add -s or -es for plural: bus → buses, box → boxes. Some change in special ways: child → children.',
        examples: [
          { sentence: 'One box → two boxes.', highlight: 'boxes', emoji: '📦' },
          { sentence: 'One child → three children.', highlight: 'children', emoji: '👧👦' },
          { sentence: 'One leaf → many leaves.', highlight: 'leaves', emoji: '🍃' },
        ],
        practice: [
          q('p1', 'mcq', 'Plural of bus is…', 'buses', ['buss', 'buses', 'busies']),
          q('p2', 'fill', 'One baby → two ____.', 'babies'),
          q('p3', 'mcq', 'Plural of child is…', 'children', ['childs', 'children', 'childes']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap correct plurals!',
          items: [
            { id: 'a', label: 'boxes', emoji: '📦📦', correct: true },
            { id: 'b', label: 'boxs', emoji: '❌', correct: false },
            { id: 'c', label: 'teeth', emoji: '😁', correct: true },
            { id: 'd', label: 'tooths', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'fill', 'One fox → two ____.', 'foxes'),
          q('z2', 'mcq', 'Which is plural?', 'leaves', ['leaf', 'leaves', 'leafe']),
          q('z3', 'mcq', 'One mouse → many…', 'mice', ['mouses', 'mice', 'mousees']),
        ],
      }),
      lesson({
        id: 'y2-possessive',
        title: 'Possessive words',
        emoji: '🤝',
        summary: 'Show who something belongs to.',
        explanation:
          'Possessive words show belonging: my, your, his, her, our, their. We can also use ’s: Maya’s bag.',
        examples: [
          { sentence: 'This is my book.', highlight: 'my', emoji: '📘' },
          { sentence: 'That is her doll.', highlight: 'her', emoji: '🧸' },
          { sentence: 'Tom’s bike is red.', highlight: "Tom’s", emoji: '🚲' },
        ],
        practice: [
          q('p1', 'mcq', 'Belonging to me: ___ bag.', 'my', ['me', 'my', 'I']),
          q('p2', 'fill', 'This is ____ pencil. (your/you)', 'your'),
          q('p3', 'mcq', "Maya’s bag means the bag belongs to…", 'Maya', ['me', 'Maya', 'nobody']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick possessive words!',
          items: [
            { id: 'a', label: 'our', emoji: '👨‍👩‍👧‍👦', correct: true },
            { id: 'b', label: 'run', emoji: '🏃', correct: false },
            { id: 'c', label: 'their', emoji: '👥', correct: true },
            { id: 'd', label: 'happy', emoji: '😊', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Which shows belonging?', 'his', ['run', 'his', 'blue']),
          q('z2', 'fill', 'This is ____ house. (our/we)', 'our'),
          q('z3', 'mcq', "The girl’s hat — ’s shows…", 'possession', ['plural only', 'possession', 'a question']),
        ],
      }),
      lesson({
        id: 'y2-has-have',
        title: 'Has / Have',
        emoji: '✋',
        summary: 'Talk about what someone owns or holds.',
        explanation:
          'Use have with I, you, we, they. Use has with he, she, it. Example: She has a red bag.',
        examples: [
          { sentence: 'She has a red bag.', highlight: 'has', emoji: '🎒' },
          { sentence: 'I have a pencil.', highlight: 'have', emoji: '✏️' },
          { sentence: 'They have two pets.', highlight: 'have', emoji: '🐶🐱' },
        ],
        practice: [
          q('p1', 'mcq', 'He ___ a kite.', 'has', ['have', 'has', 'having']),
          q('p2', 'fill', 'We ____ lunch boxes. (has/have)', 'have'),
          q('p3', 'mcq', 'She ___ a smile.', 'has', ['have', 'has', 'haves']),
        ],
        game: {
          type: 'pick',
          prompt: 'Correct has/have sentences!',
          items: [
            { id: 'a', label: 'I have a book', emoji: '📚', correct: true },
            { id: 'b', label: 'I has a book', emoji: '❌', correct: false },
            { id: 'c', label: 'She has a hat', emoji: '🎩', correct: true },
            { id: 'd', label: 'She have a hat', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Use has with…', 'he/she/it', ['I/you', 'he/she/it', 'we/they']),
          q('z2', 'fill', 'You ____ kind eyes. (has/have)', 'have'),
          q('z3', 'mcq', 'It ___ four legs.', 'has', ['have', 'has', 'having']),
        ],
      }),
      lesson({
        id: 'y2-is-am-are',
        title: 'Is / Am / Are',
        emoji: '🧩',
        summary: 'Little verbs that help us say what something is.',
        explanation:
          'Use am with I. Use is with he, she, it. Use are with you, we, they. Example: I am happy. She is ready. They are friends.',
        examples: [
          { sentence: 'I am a learner.', highlight: 'am', emoji: '🌟' },
          { sentence: 'He is tall.', highlight: 'is', emoji: '📏' },
          { sentence: 'We are classmates.', highlight: 'are', emoji: '🏫' },
        ],
        practice: [
          q('p1', 'mcq', 'I ___ excited.', 'am', ['is', 'am', 'are']),
          q('p2', 'fill', 'She ____ kind. (is/are)', 'is'),
          q('p3', 'mcq', 'They ___ here.', 'are', ['is', 'am', 'are']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick correct pairs!',
          items: [
            { id: 'a', label: 'I am', emoji: '🙂', correct: true },
            { id: 'b', label: 'I is', emoji: '❌', correct: false },
            { id: 'c', label: 'They are', emoji: '👥', correct: true },
            { id: 'd', label: 'He are', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Use am with…', 'I', ['he', 'I', 'they']),
          q('z2', 'fill', 'You ____ my friend. (is/are)', 'are'),
          q('z3', 'mcq', 'The sky ___ blue.', 'is', ['am', 'are', 'is']),
        ],
      }),
      lesson({
        id: 'y2-sentence-structure',
        title: 'Simple sentence structure',
        emoji: '🧱',
        summary: 'Most easy sentences need a who/what + a verb.',
        explanation:
          'A simple sentence often follows: Subject + Verb (+ more). Example: Birds fly. She reads books.',
        examples: [
          { sentence: 'Birds fly.', highlight: 'Birds fly', emoji: '🐦' },
          { sentence: 'She reads books.', highlight: 'She reads', emoji: '📖' },
          { sentence: 'The baby sleeps.', highlight: 'baby sleeps', emoji: '👶' },
        ],
        practice: [
          q('p1', 'mcq', 'Which is a complete sentence?', 'Tom runs.', ['Tom', 'runs fast', 'Tom runs.']),
          q('p2', 'fill', 'Subject of “Cats sleep” is ____.', 'Cats'),
          q('p3', 'mcq', 'A simple sentence needs at least…', 'a subject and a verb', ['two commas', 'a subject and a verb', 'five nouns']),
        ],
        game: {
          type: 'pick',
          prompt: 'Complete sentences only!',
          items: [
            { id: 'a', label: 'Fish swim.', emoji: '🐠', correct: true },
            { id: 'b', label: 'Under the', emoji: '❌', correct: false },
            { id: 'c', label: 'Kids laugh.', emoji: '😄', correct: true },
            { id: 'd', label: 'Happy very', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'In “Dogs bark”, Dogs is the…', 'subject', ['verb', 'subject', 'adjective']),
          q('z2', 'fill', 'Verb in “Kids play” is ____.', 'play'),
          q('z3', 'mcq', 'Which is incomplete?', 'The red', ['The bird sings.', 'The red', 'We eat rice.']),
        ],
      }),
      lesson({
        id: 'y2-question-words',
        title: 'Question words',
        emoji: '❓',
        summary: 'Who, what, where, when, why, and how help us ask.',
        explanation:
          'Question words start many questions: Where is the ball? What is your name? Who is she?',
        examples: [
          { sentence: 'Where is the ball?', highlight: 'Where', emoji: '⚽' },
          { sentence: 'What is this?', highlight: 'What', emoji: '❔' },
          { sentence: 'Who is your teacher?', highlight: 'Who', emoji: '👩‍🏫' },
        ],
        practice: [
          q('p1', 'mcq', 'Ask about a place: ___ is the park?', 'Where', ['Who', 'Where', 'What']),
          q('p2', 'fill', '____ is your name? (What/Where)', 'What'),
          q('p3', 'mcq', 'Ask about a person: ___ is he?', 'Who', ['When', 'Who', 'How many']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap real question words!',
          items: [
            { id: 'a', label: 'Why', emoji: '🤔', correct: true },
            { id: 'b', label: 'Banana', emoji: '🍌', correct: false },
            { id: 'c', label: 'How', emoji: '🛠️', correct: true },
            { id: 'd', label: 'Jump', emoji: '🏃', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“Where is the ball?” asks about…', 'place', ['time', 'place', 'color only']),
          q('z2', 'fill', '____ are you sad? (Why/Who)', 'Why'),
          q('z3', 'mcq', 'Which starts a question?', 'When', ['Run', 'When', 'Soft']),
        ],
      }),
    ],
  },
  {
    id: 'year-3',
    year: 3,
    title: 'Everyday Grammar',
    emoji: '🌳',
    filter: 'elementary',
    levelLabel: 'Elementary',
    description: 'Use grammar for everyday speaking and writing.',
    color: 'bg-sun/45',
    accent: 'from-sun to-sun-deep',
    lessons: [
      lesson({
        id: 'y3-common-proper',
        title: 'Common nouns and proper nouns',
        emoji: '🏷️',
        summary: 'Common nouns are general. Proper nouns name special people and places.',
        explanation:
          'girl is a common noun. Maya is a proper noun and starts with a capital letter. city is common; London is proper.',
        examples: [
          { sentence: 'The girl reads.', highlight: 'girl', emoji: '👧' },
          { sentence: 'Maya reads.', highlight: 'Maya', emoji: '📘' },
          { sentence: 'We visited Paris.', highlight: 'Paris', emoji: '🗼' },
        ],
        practice: [
          q('p1', 'mcq', 'Which is a proper noun?', 'Monday', ['day', 'Monday', 'month']),
          q('p2', 'fill', '____ is a proper noun. (India/country)', 'India'),
          q('p3', 'mcq', 'Proper nouns start with…', 'a capital letter', ['a comma', 'a capital letter', 'a question mark']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap proper nouns!',
          items: [
            { id: 'a', label: 'Amazon', emoji: '🗺️', correct: true },
            { id: 'b', label: 'river', emoji: '💧', correct: false },
            { id: 'c', label: 'Friday', emoji: '📅', correct: true },
            { id: 'd', label: 'weekday', emoji: '📌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'school is a…', 'common noun', ['proper noun', 'common noun', 'verb']),
          q('z2', 'fill', 'Capitalize the proper noun: ____ (sara/Sara)', 'Sara'),
          q('z3', 'mcq', 'Which needs a capital letter?', 'Tokyo', ['city', 'Tokyo', 'town']),
        ],
      }),
      lesson({
        id: 'y3-helping-verbs',
        title: 'Common and helping verbs',
        emoji: '🛠️',
        summary: 'Main verbs show action. Helping verbs support the main verb.',
        explanation:
          'In “I can swim,” swim is the main verb and can is a helping verb. Common helpers: is, are, am, can, will, do.',
        examples: [
          { sentence: 'I can swim.', highlight: 'can', emoji: '🏊' },
          { sentence: 'She is reading.', highlight: 'is', emoji: '📖' },
          { sentence: 'They will come.', highlight: 'will', emoji: '🚌' },
        ],
        practice: [
          q('p1', 'mcq', 'In “He can jump”, the helping verb is…', 'can', ['He', 'can', 'jump']),
          q('p2', 'fill', 'She ____ singing. (is/jump)', 'is'),
          q('p3', 'mcq', 'Helping verbs…', 'support the main verb', ['replace nouns', 'support the main verb', 'end sentences']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick helping verbs!',
          items: [
            { id: 'a', label: 'will', emoji: '🔮', correct: true },
            { id: 'b', label: 'apple', emoji: '🍎', correct: false },
            { id: 'c', label: 'do', emoji: '✅', correct: true },
            { id: 'd', label: 'chair', emoji: '🪑', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Main verb in “We are eating” is…', 'eating', ['We', 'are', 'eating']),
          q('z2', 'fill', 'I ____ finish my work. (can/bag)', 'can'),
          q('z3', 'mcq', 'Which is a helping verb?', 'am', ['run', 'am', 'school']),
        ],
      }),
      lesson({
        id: 'y3-present',
        title: 'Present tense',
        emoji: '☀️',
        summary: 'Present tense talks about now or habits.',
        explanation:
          'Use present tense for things happening now or things we do often: I play football. She reads every day.',
        examples: [
          { sentence: 'I play football.', highlight: 'play', emoji: '⚽' },
          { sentence: 'She reads every day.', highlight: 'reads', emoji: '📚' },
          { sentence: 'The sun rises.', highlight: 'rises', emoji: '🌅' },
        ],
        practice: [
          q('p1', 'mcq', 'Present tense sentence:', 'I walk to school.', ['I walked yesterday.', 'I walk to school.', 'I will walk later.']),
          q('p2', 'fill', 'He ____ milk every morning. (drinks/drank)', 'drinks'),
          q('p3', 'mcq', 'Present tense is often about…', 'now or habits', ['only tomorrow', 'now or habits', 'only long ago']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap present-tense verbs!',
          items: [
            { id: 'a', label: 'run', emoji: '🏃', correct: true },
            { id: 'b', label: 'ran', emoji: '⏱️', correct: false },
            { id: 'c', label: 'sings', emoji: '🎤', correct: true },
            { id: 'd', label: 'will sing', emoji: '🔮', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“I play football.” is…', 'present tense', ['past tense', 'present tense', 'future tense']),
          q('z2', 'fill', 'Birds ____ in the sky. (fly/flew)', 'fly'),
          q('z3', 'mcq', 'She ___ every evening.', 'studies', ['studied', 'will study tomorrow only', 'studies']),
        ],
      }),
      lesson({
        id: 'y3-past',
        title: 'Simple past tense',
        emoji: '⏪',
        summary: 'Past tense talks about finished actions.',
        explanation:
          'Add -ed to many verbs for past time: played, walked. Some verbs change: go → went, eat → ate. Example: I played football yesterday.',
        examples: [
          { sentence: 'I played football yesterday.', highlight: 'played', emoji: '⚽' },
          { sentence: 'She went home.', highlight: 'went', emoji: '🏠' },
          { sentence: 'We ate rice.', highlight: 'ate', emoji: '🍚' },
        ],
        practice: [
          q('p1', 'mcq', 'Past form of play is…', 'played', ['plays', 'played', 'playing']),
          q('p2', 'fill', 'Yesterday I ____ a cake. (bake/baked)', 'baked'),
          q('p3', 'mcq', 'Past tense often uses words like…', 'yesterday', ['tomorrow', 'yesterday', 'now always']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick past-tense verbs!',
          items: [
            { id: 'a', label: 'jumped', emoji: '⏱️', correct: true },
            { id: 'b', label: 'jump', emoji: '🏃', correct: false },
            { id: 'c', label: 'saw', emoji: '👀', correct: true },
            { id: 'd', label: 'see', emoji: '👁️', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“I played football yesterday.” is…', 'past tense', ['present', 'past tense', 'future']),
          q('z2', 'fill', 'They ____ to the zoo. (go/went)', 'went'),
          q('z3', 'mcq', 'Past of eat is…', 'ate', ['eated', 'ate', 'eats']),
        ],
      }),
      lesson({
        id: 'y3-future',
        title: 'Simple future tense',
        emoji: '⏩',
        summary: 'Future tense talks about what will happen later.',
        explanation:
          'We often use will + verb for the future: I will play football tomorrow. You can also use going to.',
        examples: [
          { sentence: 'I will play football tomorrow.', highlight: 'will play', emoji: '⚽' },
          { sentence: 'She will visit Grandma.', highlight: 'will visit', emoji: '👵' },
          { sentence: 'We are going to read.', highlight: 'going to', emoji: '📖' },
        ],
        practice: [
          q('p1', 'mcq', 'Future sentence:', 'I will swim later.', ['I swam yesterday.', 'I swim now.', 'I will swim later.']),
          q('p2', 'fill', 'Tomorrow we ____ travel. (will/did)', 'will'),
          q('p3', 'mcq', 'Future tense is about…', 'later time', ['finished time', 'later time', 'only yesterday']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap future forms!',
          items: [
            { id: 'a', label: 'will go', emoji: '🚀', correct: true },
            { id: 'b', label: 'went', emoji: '⏪', correct: false },
            { id: 'c', label: 'going to eat', emoji: '🍽️', correct: true },
            { id: 'd', label: 'ate', emoji: '🍚', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“I will play football tomorrow.” is…', 'future tense', ['past', 'present', 'future tense']),
          q('z2', 'fill', 'She ____ call you later. (will/was)', 'will'),
          q('z3', 'mcq', 'A common future helper is…', 'will', ['was', 'will', 'did']),
        ],
      }),
      lesson({
        id: 'y3-adjectives',
        title: 'Adjectives',
        emoji: '🌈',
        summary: 'Describe people and things more clearly.',
        explanation:
          'Adjectives answer what kind or how many: three kind friends, a bright lamp, rainy weather.',
        examples: [
          { sentence: 'Three kind friends smiled.', highlight: 'kind', emoji: '😊' },
          { sentence: 'A bright lamp glowed.', highlight: 'bright', emoji: '💡' },
          { sentence: 'Rainy weather came.', highlight: 'Rainy', emoji: '🌧️' },
        ],
        practice: [
          q('p1', 'mcq', 'Adjective in “a cold drink” is…', 'cold', ['a', 'cold', 'drink']),
          q('p2', 'fill', 'The ____ mountain is high. (tall/run)', 'tall'),
          q('p3', 'mcq', 'Adjectives often come…', 'before nouns', ['after periods only', 'before nouns', 'instead of verbs']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick adjectives!',
          items: [
            { id: 'a', label: 'gentle', emoji: '🤍', correct: true },
            { id: 'b', label: 'pencil', emoji: '✏️', correct: false },
            { id: 'c', label: 'spicy', emoji: '🌶️', correct: true },
            { id: 'd', label: 'write', emoji: '✍️', correct: false },
          ],
        },
        quiz: [
          q('z1', 'fill', 'A ____ story. (funny/laugh)', 'funny'),
          q('z2', 'mcq', 'Which describes taste?', 'sweet', ['run', 'sweet', 'they']),
          q('z3', 'mcq', 'Adjectives describe…', 'nouns', ['only verbs', 'nouns', 'only punctuation']),
        ],
      }),
      lesson({
        id: 'y3-adverbs',
        title: 'Adverbs',
        emoji: '🚀',
        summary: 'Adverbs describe verbs — how, when, or where.',
        explanation:
          'Many adverbs end with -ly: slowly, happily. They tell how an action happens: She sings beautifully.',
        examples: [
          { sentence: 'She sings beautifully.', highlight: 'beautifully', emoji: '🎤' },
          { sentence: 'He runs quickly.', highlight: 'quickly', emoji: '🏃' },
          { sentence: 'We arrived early.', highlight: 'early', emoji: '⏰' },
        ],
        practice: [
          q('p1', 'mcq', 'Adverb in “speak softly” is…', 'softly', ['speak', 'softly', 'you']),
          q('p2', 'fill', 'Please walk ____. (carefully/careful)', 'carefully'),
          q('p3', 'mcq', 'Adverbs often describe…', 'verbs', ['only nouns', 'verbs', 'only articles']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap the adverbs!',
          items: [
            { id: 'a', label: 'slowly', emoji: '🐢', correct: true },
            { id: 'b', label: 'slow', emoji: '🐢', correct: false },
            { id: 'c', label: 'loudly', emoji: '📢', correct: true },
            { id: 'd', label: 'loud', emoji: '🔊', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“Happily” is usually an…', 'adverb', ['noun', 'adverb', 'article']),
          q('z2', 'fill', 'The baby slept ____. (peacefully/peaceful)', 'peacefully'),
          q('z3', 'mcq', 'Which tells how?', 'quietly', ['quiet room', 'quietly', 'quietness']),
        ],
      }),
      lesson({
        id: 'y3-prepositions',
        title: 'Prepositions',
        emoji: '📍',
        summary: 'Prepositions show place, time, and direction.',
        explanation:
          'Words like in, on, under, behind, before, and after show relationships: The ball is under the table.',
        examples: [
          { sentence: 'The ball is under the table.', highlight: 'under', emoji: '⚽' },
          { sentence: 'The cat is on the mat.', highlight: 'on', emoji: '🐱' },
          { sentence: 'We play after school.', highlight: 'after', emoji: '🏫' },
        ],
        practice: [
          q('p1', 'mcq', 'The book is ___ the bag.', 'in', ['in', 'jump', 'happy']),
          q('p2', 'fill', 'Stand ____ the door. (behind/blue)', 'behind'),
          q('p3', 'mcq', 'Prepositions often show…', 'place or time', ['only adjectives', 'place or time', 'only pronouns']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick prepositions!',
          items: [
            { id: 'a', label: 'between', emoji: '↔️', correct: true },
            { id: 'b', label: 'banana', emoji: '🍌', correct: false },
            { id: 'c', label: 'beside', emoji: '📎', correct: true },
            { id: 'd', label: 'beautiful', emoji: '🌸', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'In “under the table”, under is a…', 'preposition', ['verb', 'preposition', 'noun']),
          q('z2', 'fill', 'The shoes are ____ the bed. (under/run)', 'under'),
          q('z3', 'mcq', 'Which is a preposition?', 'before', ['bright', 'before', 'because of laughing']),
        ],
      }),
      lesson({
        id: 'y3-conjunctions',
        title: 'Conjunctions',
        emoji: '🔗',
        summary: 'Conjunctions join words or sentences.',
        explanation:
          'And, but, or, and because join ideas: I want tea and juice. She is tired but happy.',
        examples: [
          { sentence: 'I like tea and juice.', highlight: 'and', emoji: '🧃' },
          { sentence: 'It is small but strong.', highlight: 'but', emoji: '💪' },
          { sentence: 'We stay inside because it rains.', highlight: 'because', emoji: '🌧️' },
        ],
        practice: [
          q('p1', 'mcq', 'Join with contrast: small ___ strong.', 'but', ['and', 'but', 'or']),
          q('p2', 'fill', 'Do you want rice ____ bread? (or/under)', 'or'),
          q('p3', 'mcq', 'Conjunctions…', 'join ideas', ['end books', 'join ideas', 'name places only']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap conjunctions!',
          items: [
            { id: 'a', label: 'and', emoji: '➕', correct: true },
            { id: 'b', label: 'apple', emoji: '🍎', correct: false },
            { id: 'c', label: 'because', emoji: '💭', correct: true },
            { id: 'd', label: 'quickly', emoji: '⚡', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“And” is a…', 'conjunction', ['noun', 'conjunction', 'adjective']),
          q('z2', 'fill', 'I ran ____ I was late. (because/under)', 'because'),
          q('z3', 'mcq', 'Which joins choices?', 'or', ['on', 'or', 'an']),
        ],
      }),
      lesson({
        id: 'y3-questions',
        title: 'Question formation',
        emoji: '❓',
        summary: 'Turn ideas into clear questions.',
        explanation:
          'Many questions use do/does/did or a question word: Do you like mangoes? Where do you live?',
        examples: [
          { sentence: 'Do you like mangoes?', highlight: 'Do you', emoji: '🥭' },
          { sentence: 'Where do you live?', highlight: 'Where', emoji: '🏠' },
          { sentence: 'Does she play chess?', highlight: 'Does', emoji: '♟️' },
        ],
        practice: [
          q('p1', 'mcq', 'Correct question:', 'Do you swim?', ['You swim do?', 'Do you swim?', 'Swim you do.']),
          q('p2', 'fill', '____ she play the piano? (Does/Do)', 'Does'),
          q('p3', 'mcq', 'Questions often end with…', 'a question mark', ['a period only', 'a question mark', 'a comma only']),
        ],
        game: {
          type: 'pick',
          prompt: 'Real questions only!',
          items: [
            { id: 'a', label: 'What is this?', emoji: '❔', correct: true },
            { id: 'b', label: 'This is what', emoji: '❌', correct: false },
            { id: 'c', label: 'Can you help?', emoji: '🤝', correct: true },
            { id: 'd', label: 'Help you can', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Use Does with…', 'he/she/it', ['I/you/we/they', 'he/she/it', 'only plural']),
          q('z2', 'fill', '____ you ready? (Are/Is)', 'Are'),
          q('z3', 'mcq', 'Which is a question?', 'Is it raining?', ['It is raining.', 'Is it raining?', 'Rain is it.']),
        ],
      }),
      lesson({
        id: 'y3-negatives',
        title: 'Negative sentences',
        emoji: '🚫',
        summary: 'Say what is not true with not / n’t.',
        explanation:
          'Add not or n’t to make negatives: I do not like onions. She isn’t here. He cannot swim yet.',
        examples: [
          { sentence: 'I do not like onions.', highlight: 'do not', emoji: '🧅' },
          { sentence: 'She isn’t here.', highlight: 'isn’t', emoji: '🚪' },
          { sentence: 'He cannot swim yet.', highlight: 'cannot', emoji: '🏊' },
        ],
        practice: [
          q('p1', 'mcq', 'Negative of “I like tea”:', 'I do not like tea.', ['I like not tea.', 'I do not like tea.', 'Not I like tea.']),
          q('p2', 'fill', 'They ____ ready. (aren’t/are’nt)', 'aren’t'),
          q('p3', 'mcq', 'n’t is a short form of…', 'not', ['and', 'not', 'now']),
        ],
        game: {
          type: 'pick',
          prompt: 'Pick negative forms!',
          items: [
            { id: 'a', label: "don't", emoji: '🚫', correct: true },
            { id: 'b', label: 'do', emoji: '✅', correct: false },
            { id: 'c', label: "isn't", emoji: '🚫', correct: true },
            { id: 'd', label: 'is', emoji: '✅', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'A negative sentence often uses…', 'not', ['only and', 'not', 'only the']),
          q('z2', 'fill', 'He does ____ eat meat. (not/now)', 'not'),
          q('z3', 'mcq', 'Which is negative?', "We can't go.", ['We can go.', "We can't go.", 'Can we go?']),
        ],
      }),
    ],
  },

  {
    id: 'year-4',
    year: 4,
    title: 'Intermediate Grammar',
    emoji: '🌟',
    filter: 'intermediate',
    levelLabel: 'Intermediate',
    description: 'Stretch into richer sentence patterns.',
    color: 'bg-lilac/30',
    accent: 'from-lilac to-lilac-deep',
    lessons: [
      lesson({
        id: 'y4-present-continuous',
        title: 'Present continuous tense',
        emoji: '🔄',
        summary: 'Talk about actions happening right now.',
        explanation:
          'Use am/is/are + verb-ing: I am reading. She is jumping. They are singing.',
        examples: [
          { sentence: 'I am reading now.', highlight: 'am reading', emoji: '📖' },
          { sentence: 'She is jumping.', highlight: 'is jumping', emoji: '🦘' },
          { sentence: 'They are singing.', highlight: 'are singing', emoji: '🎶' },
        ],
        practice: [
          q('p1', 'mcq', 'She ___ drawing.', 'is', ['am', 'is', 'are']),
          q('p2', 'fill', 'We ____ playing. (are/is)', 'are'),
          q('p3', 'mcq', 'Present continuous uses…', 'am/is/are + -ing', ['will only', 'am/is/are + -ing', 'did only']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap continuous forms!',
          items: [
            { id: 'a', label: 'is running', emoji: '🏃', correct: true },
            { id: 'b', label: 'ran', emoji: '⏪', correct: false },
            { id: 'c', label: 'are eating', emoji: '🍽️', correct: true },
            { id: 'd', label: 'ate', emoji: '🍚', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'I ___ learning English.', 'am', ['is', 'am', 'are']),
          q('z2', 'fill', 'The baby ____ sleeping. (is/are)', 'is'),
          q('z3', 'mcq', 'Which is present continuous?', 'They are dancing.', ['They dance every day.', 'They are dancing.', 'They danced.']),
        ],
      }),
      lesson({
        id: 'y4-past-continuous',
        title: 'Past continuous tense',
        emoji: '⏪',
        summary: 'Show an action that was in progress in the past.',
        explanation:
          'Use was/were + verb-ing: I was reading when you called. They were playing at 5 p.m.',
        examples: [
          { sentence: 'I was reading.', highlight: 'was reading', emoji: '📘' },
          { sentence: 'They were playing.', highlight: 'were playing', emoji: '🎮' },
          { sentence: 'She was cooking.', highlight: 'was cooking', emoji: '👩‍🍳' },
        ],
        practice: [
          q('p1', 'mcq', 'He ___ sleeping at noon.', 'was', ['were', 'was', 'is']),
          q('p2', 'fill', 'You ____ smiling. (were/was)', 'were'),
          q('p3', 'mcq', 'Past continuous uses…', 'was/were + -ing', ['will + -ing', 'was/were + -ing', 'do + -ing']),
        ],
        game: {
          type: 'pick',
          prompt: 'Past continuous only!',
          items: [
            { id: 'a', label: 'was raining', emoji: '🌧️', correct: true },
            { id: 'b', label: 'rains', emoji: '☁️', correct: false },
            { id: 'c', label: 'were laughing', emoji: '😄', correct: true },
            { id: 'd', label: 'laugh', emoji: '😊', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'We ___ watching a film.', 'were', ['was', 'were', 'are']),
          q('z2', 'fill', 'It ____ snowing. (was/were)', 'was'),
          q('z3', 'mcq', 'Which is past continuous?', 'She was writing.', ['She writes.', 'She was writing.', 'She will write.']),
        ],
      }),
      lesson({
        id: 'y4-future-forms',
        title: 'Future forms',
        emoji: '🔮',
        summary: 'Different ways to talk about the future.',
        explanation:
          'Use will for decisions and promises. Use going to for plans: I will help you. We are going to visit the zoo.',
        examples: [
          { sentence: 'I will help you.', highlight: 'will help', emoji: '🤝' },
          { sentence: 'We are going to visit the zoo.', highlight: 'going to', emoji: '🦁' },
          { sentence: 'It will rain soon.', highlight: 'will rain', emoji: '🌦️' },
        ],
        practice: [
          q('p1', 'mcq', 'A plan already made often uses…', 'going to', ['did', 'going to', 'was']),
          q('p2', 'fill', 'I ____ call you tonight. (will/was)', 'will'),
          q('p3', 'mcq', 'They are going to travel. This shows…', 'a plan', ['only past', 'a plan', 'only a command']),
        ],
        game: {
          type: 'pick',
          prompt: 'Future forms!',
          items: [
            { id: 'a', label: 'will come', emoji: '🚌', correct: true },
            { id: 'b', label: 'came', emoji: '⏪', correct: false },
            { id: 'c', label: 'going to learn', emoji: '📚', correct: true },
            { id: 'd', label: 'learned', emoji: '✅', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Promise: I ___ be careful.', 'will', ['was', 'will', 'am being yesterday']),
          q('z2', 'fill', 'She is ____ to start class. (going/went)', 'going'),
          q('z3', 'mcq', 'Which is future?', 'We will sing.', ['We sang.', 'We sing daily.', 'We will sing.']),
        ],
      }),
      lesson({
        id: 'y4-present-perfect',
        title: 'Present perfect basics',
        emoji: '✅',
        summary: 'Talk about life experience or results that matter now.',
        explanation:
          'Use have/has + past participle: I have finished my homework. She has visited the museum.',
        examples: [
          { sentence: 'I have finished my homework.', highlight: 'have finished', emoji: '📝' },
          { sentence: 'She has visited the museum.', highlight: 'has visited', emoji: '🏛️' },
          { sentence: 'We have eaten lunch.', highlight: 'have eaten', emoji: '🍽️' },
        ],
        practice: [
          q('p1', 'mcq', 'He ___ gone out.', 'has', ['have', 'has', 'had going']),
          q('p2', 'fill', 'They ____ seen that film. (have/has)', 'have'),
          q('p3', 'mcq', 'Present perfect uses…', 'have/has + past participle', ['will + -ing', 'have/has + past participle', 'did + am']),
        ],
        game: {
          type: 'pick',
          prompt: 'Present perfect forms!',
          items: [
            { id: 'a', label: 'have done', emoji: '✅', correct: true },
            { id: 'b', label: 'did do yesterday only', emoji: '📅', correct: false },
            { id: 'c', label: 'has written', emoji: '✍️', correct: true },
            { id: 'd', label: 'writes now', emoji: '🖊️', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'I ___ lost my key.', 'have', ['has', 'have', 'having']),
          q('z2', 'fill', 'She has ____ the letter. (written/wrote)', 'written'),
          q('z3', 'mcq', 'Which is present perfect?', 'We have arrived.', ['We arrive.', 'We arrived yesterday at 5.', 'We have arrived.']),
        ],
      }),
      lesson({
        id: 'y4-comparative',
        title: 'Comparative adjectives',
        emoji: '📊',
        summary: 'Compare two things.',
        explanation:
          'Add -er or use more: taller, smaller, more beautiful. Use than: A giraffe is taller than a goat.',
        examples: [
          { sentence: 'A giraffe is taller than a goat.', highlight: 'taller than', emoji: '🦒' },
          { sentence: 'This bag is smaller.', highlight: 'smaller', emoji: '🎒' },
          { sentence: 'Math can be more difficult.', highlight: 'more difficult', emoji: '➗' },
        ],
        practice: [
          q('p1', 'mcq', 'Comparative of tall is…', 'taller', ['tallest', 'taller', 'more tallest']),
          q('p2', 'fill', 'My cat is ____ than yours. (faster/fastest)', 'faster'),
          q('p3', 'mcq', 'We often use ___ in comparisons.', 'than', ['then', 'than', 'that']),
        ],
        game: {
          type: 'pick',
          prompt: 'Comparative forms!',
          items: [
            { id: 'a', label: 'bigger', emoji: '📦', correct: true },
            { id: 'b', label: 'biggest of all', emoji: '🏆', correct: false },
            { id: 'c', label: 'more useful', emoji: '🧰', correct: true },
            { id: 'd', label: 'usefulest', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Compare two books: this one is…', 'thicker', ['thickest', 'thicker', 'thick']),
          q('z2', 'fill', 'Today is ____ than yesterday. (colder/coldest)', 'colder'),
          q('z3', 'mcq', 'Comparative of happy is often…', 'happier', ['more happier', 'happier', 'happyest']),
        ],
      }),
      lesson({
        id: 'y4-superlative',
        title: 'Superlative adjectives',
        emoji: '🏆',
        summary: 'Compare more than two things.',
        explanation:
          'Add -est or use most: tallest, smallest, most interesting. Use the: the tallest building.',
        examples: [
          { sentence: 'This is the tallest building.', highlight: 'tallest', emoji: '🏢' },
          { sentence: 'She is the kindest friend.', highlight: 'kindest', emoji: '💖' },
          { sentence: 'It is the most exciting story.', highlight: 'most exciting', emoji: '📚' },
        ],
        practice: [
          q('p1', 'mcq', 'Superlative of small is…', 'smallest', ['smaller', 'smallest', 'more small']),
          q('p2', 'fill', 'Cheetahs are the ____ land animals. (fastest/faster)', 'fastest'),
          q('p3', 'mcq', 'Superlatives often use…', 'the', ['a', 'the', 'an only']),
        ],
        game: {
          type: 'pick',
          prompt: 'Superlative forms!',
          items: [
            { id: 'a', label: 'highest', emoji: '🏔️', correct: true },
            { id: 'b', label: 'higher than', emoji: '📈', correct: false },
            { id: 'c', label: 'most famous', emoji: '🌟', correct: true },
            { id: 'd', label: 'famouser', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Of three bags, this is the…', 'lightest', ['lighter', 'lightest', 'more light']),
          q('z2', 'fill', 'Mount Everest is the ____ mountain. (highest/higher)', 'highest'),
          q('z3', 'mcq', 'Superlative of beautiful is…', 'most beautiful', ['beautifuller', 'most beautiful', 'more beautiful than two only']),
        ],
      }),
      lesson({
        id: 'y4-sentence-types',
        title: 'Types of sentences',
        emoji: '📄',
        summary: 'Statements, questions, commands, and exclamations.',
        explanation:
          'A statement tells. A question asks. A command tells someone to do something. An exclamation shows strong feeling.',
        examples: [
          { sentence: 'The sky is blue.', highlight: 'statement', emoji: '🌤️' },
          { sentence: 'Is the sky blue?', highlight: 'question', emoji: '❓' },
          { sentence: 'Please sit down.', highlight: 'command', emoji: '🪑' },
        ],
        practice: [
          q('p1', 'mcq', '“Wow, that is amazing!” is an…', 'exclamation', ['question', 'exclamation', 'command']),
          q('p2', 'fill', '____ the door. (command: Close)', 'Close'),
          q('p3', 'mcq', 'Questions usually end with…', '?', ['.', '?', ',']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap questions!',
          items: [
            { id: 'a', label: 'How are you?', emoji: '😊', correct: true },
            { id: 'b', label: 'I am fine.', emoji: '✅', correct: false },
            { id: 'c', label: 'What time is it?', emoji: '⏰', correct: true },
            { id: 'd', label: 'Close the window.', emoji: '🪟', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“Open your book.” is a…', 'command', ['question', 'command', 'exclamation']),
          q('z2', 'fill', 'A telling sentence is called a ____.', 'statement'),
          q('z3', 'mcq', 'Which is an exclamation?', 'What a lovely day!', ['What time is it?', 'What a lovely day!', 'Open the gate.']),
        ],
      }),
      lesson({
        id: 'y4-direct-indirect',
        title: 'Direct and indirect speech basics',
        emoji: '💬',
        summary: 'Repeat words exactly or report them.',
        explanation:
          'Direct speech uses quotation marks: She said, “I am happy.” Indirect speech reports: She said that she was happy.',
        examples: [
          { sentence: 'She said, “I am happy.”', highlight: '“I am happy.”', emoji: '😊' },
          { sentence: 'She said that she was happy.', highlight: 'that she was happy', emoji: '🗣️' },
          { sentence: 'He said, “I like mangoes.”', highlight: '“I like mangoes.”', emoji: '🥭' },
        ],
        practice: [
          q('p1', 'mcq', 'Direct speech uses…', 'quotation marks', ['only commas', 'quotation marks', 'only brackets']),
          q('p2', 'fill', 'He said that he ____ tired. (was/is) — reported', 'was'),
          q('p3', 'mcq', 'Indirect speech…', 'reports what someone said', ['must shout', 'reports what someone said', 'removes all verbs']),
        ],
        game: {
          type: 'pick',
          prompt: 'Direct speech examples!',
          items: [
            { id: 'a', label: '“Hello!” said Mia.', emoji: '👋', correct: true },
            { id: 'b', label: 'Mia said hello to us.', emoji: '🗣️', correct: false },
            { id: 'c', label: 'Tom said, “I won.”', emoji: '🏆', correct: true },
            { id: 'd', label: 'Tom said that he won.', emoji: '📝', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Which is direct speech?', 'Dad said, “Wait.”', ['Dad told us to wait.', 'Dad said, “Wait.”', 'Dad asked us to wait.']),
          q('z2', 'fill', 'She said ____ she liked art. (that/than)', 'that'),
          q('z3', 'mcq', 'Quotation marks appear in…', 'direct speech', ['only indirect speech', 'direct speech', 'only titles of verbs']),
        ],
      }),
      lesson({
        id: 'y4-modals',
        title: 'Modal verbs',
        emoji: '🎛️',
        summary: 'Can, could, may, must, should — helpers with meaning.',
        explanation:
          'Modals add meaning to verbs: ability (can), permission (may), advice (should), necessity (must).',
        examples: [
          { sentence: 'I can ride a bike.', highlight: 'can', emoji: '🚲' },
          { sentence: 'You should sleep early.', highlight: 'should', emoji: '😴' },
          { sentence: 'We must wear helmets.', highlight: 'must', emoji: '⛑️' },
        ],
        practice: [
          q('p1', 'mcq', 'Ability: She ___ swim.', 'can', ['must always', 'can', 'the']),
          q('p2', 'fill', 'You ____ try your best. (should/school)', 'should'),
          q('p3', 'mcq', 'Modals come before…', 'the main verb', ['the period only', 'the main verb', 'adjectives only']),
        ],
        game: {
          type: 'pick',
          prompt: 'Tap modal verbs!',
          items: [
            { id: 'a', label: 'may', emoji: '🙏', correct: true },
            { id: 'b', label: 'mango', emoji: '🥭', correct: false },
            { id: 'c', label: 'could', emoji: '🤔', correct: true },
            { id: 'd', label: 'color', emoji: '🎨', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Necessity often uses…', 'must', ['can maybe', 'must', 'color']),
          q('z2', 'fill', '____ I borrow your eraser? (May/My)', 'May'),
          q('z3', 'mcq', 'Which is a modal?', 'should', ['school', 'should', 'shout']),
        ],
      }),
      lesson({
        id: 'y4-conjunctions',
        title: 'Conjunctions',
        emoji: '🔗',
        summary: 'Join clauses with and, but, or, so, because.',
        explanation:
          'Conjunctions link ideas smoothly: I was hungry, so I ate. We stayed home because it rained.',
        examples: [
          { sentence: 'I was hungry, so I ate.', highlight: 'so', emoji: '🍽️' },
          { sentence: 'We stayed home because it rained.', highlight: 'because', emoji: '🏠' },
          { sentence: 'Hurry, or we will be late.', highlight: 'or', emoji: '⏰' },
        ],
        practice: [
          q('p1', 'mcq', 'Result linker:', 'so', ['under', 'so', 'the']),
          q('p2', 'fill', 'I smiled ____ I was happy. (because/before)', 'because'),
          q('p3', 'mcq', 'Conjunctions join…', 'ideas/clauses', ['only spaces', 'ideas/clauses', 'only capital letters']),
        ],
        game: {
          type: 'pick',
          prompt: 'Conjunctions!',
          items: [
            { id: 'a', label: 'so', emoji: '➡️', correct: true },
            { id: 'b', label: 'sun', emoji: '☀️', correct: false },
            { id: 'c', label: 'but', emoji: '⚖️', correct: true },
            { id: 'd', label: 'butter', emoji: '🧈', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Contrast linker:', 'but', ['and', 'but', 'also']),
          q('z2', 'fill', 'Take a map ____ you may get lost. (or/on)', 'or'),
          q('z3', 'mcq', 'Which is a conjunction?', 'because', ['behind', 'because', 'beautiful']),
        ],
      }),
      lesson({
        id: 'y4-punctuation',
        title: 'Punctuation',
        emoji: '✒️',
        summary: 'Marks that help readers understand sentences.',
        explanation:
          'Use a capital letter to start. Use . ? ! and commas in lists: apples, bananas, and grapes.',
        examples: [
          { sentence: 'Stop!', highlight: '!', emoji: '🛑' },
          { sentence: 'What time is it?', highlight: '?', emoji: '⏰' },
          { sentence: 'I bought pens, pencils, and paper.', highlight: ',', emoji: '🛒' },
        ],
        practice: [
          q('p1', 'mcq', 'A question ends with…', '?', ['.', '?', '! only for questions']),
          q('p2', 'fill', 'Sentence starter needs a ____ letter.', 'capital'),
          q('p3', 'mcq', 'Commas often separate…', 'items in a list', ['only verbs', 'items in a list', 'only countries']),
        ],
        game: {
          type: 'pick',
          prompt: 'Correct end marks!',
          items: [
            { id: 'a', label: 'How are you?', emoji: '❓', correct: true },
            { id: 'b', label: 'How are you.', emoji: '❌', correct: false },
            { id: 'c', label: 'Wow!', emoji: '🎉', correct: true },
            { id: 'd', label: 'Wow?', emoji: '❔', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Statements usually end with…', '.', ['?', '.', ',']),
          q('z2', 'fill', 'Use a ____ for strong feeling. (exclamation mark)', 'exclamation mark'),
          q('z3', 'mcq', 'Which list is punctuated well?', 'red, blue, and green', ['red blue and green', 'red, blue, and green', 'red blue, and, green']),
        ],
      }),
      lesson({
        id: 'y4-transformation',
        title: 'Sentence transformation',
        emoji: '🧙',
        summary: 'Change sentences without losing the meaning.',
        explanation:
          'We can change statement ↔ question, or positive ↔ negative: She is kind. → Is she kind? → She is not unkind.',
        examples: [
          { sentence: 'She is kind. → Is she kind?', highlight: 'Is she kind?', emoji: '❓' },
          { sentence: 'He can swim. → He cannot swim.', highlight: 'cannot', emoji: '🚫' },
          { sentence: 'They play. → Do they play?', highlight: 'Do they play?', emoji: '🏀' },
        ],
        practice: [
          q('p1', 'mcq', 'Question form of “You are ready.”', 'Are you ready?', ['You are ready?', 'Are you ready?', 'Ready you are.']),
          q('p2', 'fill', 'Negative: She is happy → She is ____ happy.', 'not'),
          q('p3', 'mcq', 'Transformation means…', 'changing form carefully', ['deleting meaning', 'changing form carefully', 'removing verbs always']),
        ],
        game: {
          type: 'pick',
          prompt: 'Good transformations!',
          items: [
            { id: 'a', label: 'He is tall → Is he tall?', emoji: '✅', correct: true },
            { id: 'b', label: 'He is tall → Tall he?', emoji: '❌', correct: false },
            { id: 'c', label: 'I can help → I cannot help.', emoji: '✅', correct: true },
            { id: 'd', label: 'I can help → Help I can not can.', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“Do they play?” comes from…', 'They play.', ['Play they do.', 'They play.', 'Playing they.']),
          q('z2', 'fill', 'Change to negative: I like tea → I do ____ like tea.', 'not'),
          q('z3', 'mcq', 'Keep the ____ when you transform.', 'meaning', ['spelling mistakes', 'meaning', 'wrong tense always']),
        ],
      }),
    ],
  },
  {
    id: 'year-5',
    year: 5,
    title: 'Advanced School Grammar',
    emoji: '🌈',
    filter: 'advanced',
    levelLabel: 'Advanced',
    description: 'Master school-level grammar with confidence.',
    color: 'bg-blush/25',
    accent: 'from-blush to-lilac-deep',
    lessons: [
      lesson({
        id: 'y5-all-tenses',
        title: 'All major verb tenses',
        emoji: '🕰️',
        summary: 'Review present, past, and future families together.',
        explanation:
          'English tense families help us place actions in time: simple, continuous, and perfect forms work together in real writing.',
        examples: [
          { sentence: 'I learn. / I am learning. / I have learned.', highlight: 'learn', emoji: '📚' },
          { sentence: 'I played. / I was playing.', highlight: 'played', emoji: '⚽' },
          { sentence: 'I will finish soon.', highlight: 'will finish', emoji: '🏁' },
        ],
        practice: [
          q('p1', 'mcq', 'Past simple example:', 'She cooked dinner.', ['She is cooking.', 'She cooked dinner.', 'She will cook.']),
          q('p2', 'fill', 'Present continuous: They ____ reading. (are/was)', 'are'),
          q('p3', 'mcq', 'Tenses help show…', 'time', ['only color', 'time', 'only spelling']),
        ],
        game: {
          type: 'pick',
          prompt: 'Match tense feel!',
          items: [
            { id: 'a', label: 'will go = future', emoji: '🔮', correct: true },
            { id: 'b', label: 'will go = past', emoji: '❌', correct: false },
            { id: 'c', label: 'went = past', emoji: '⏪', correct: true },
            { id: 'd', label: 'went = future', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“I have finished” is…', 'present perfect', ['past continuous', 'present perfect', 'future simple']),
          q('z2', 'fill', 'Yesterday we ____ football. (played/play)', 'played'),
          q('z3', 'mcq', '“She is writing” is…', 'present continuous', ['past simple', 'present continuous', 'future perfect']),
        ],
      }),
      lesson({
        id: 'y5-perfect-continuous',
        title: 'Perfect and continuous tenses',
        emoji: '⏳',
        summary: 'Combine time and ongoing action.',
        explanation:
          'Perfect tenses use have/has/had + past participle. Continuous tenses use be + -ing. Together: I have been waiting.',
        examples: [
          { sentence: 'I have been waiting.', highlight: 'have been waiting', emoji: '⌛' },
          { sentence: 'She had finished before noon.', highlight: 'had finished', emoji: '🕛' },
          { sentence: 'They were studying all evening.', highlight: 'were studying', emoji: ' comb' },
        ],
        practice: [
          q('p1', 'mcq', '“Have been waiting” shows…', 'ongoing action with a result now', ['only future plans', 'ongoing action with a result now', 'only commands']),
          q('p2', 'fill', 'He has ____ working hard. (been/be)', 'been'),
          q('p3', 'mcq', 'Continuous forms need…', '-ing', ['-ed only', '-ing', 'quotation marks']),
        ],
        game: {
          type: 'pick',
          prompt: 'Perfect/continuous forms!',
          items: [
            { id: 'a', label: 'has been raining', emoji: '🌧️', correct: true },
            { id: 'b', label: 'rain will', emoji: '❌', correct: false },
            { id: 'c', label: 'had eaten', emoji: '🍎', correct: true },
            { id: 'd', label: 'eat hadding', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Past perfect uses…', 'had + past participle', ['will + -ing', 'had + past participle', 'am + noun']),
          q('z2', 'fill', 'We have been ____. (learning/learned)', 'learning'),
          q('z3', 'mcq', 'Which fits?', 'I have been reading for an hour.', ['I have reading for an hour.', 'I have been reading for an hour.', 'I been have read.']),
        ],
      }),
      lesson({
        id: 'y5-sva',
        title: 'Subject-verb agreement',
        emoji: '⚖️',
        summary: 'Make the verb match the subject.',
        explanation:
          'Singular subjects need singular verbs: She runs. Plural subjects need plural verbs: They run. Watch out for collective nouns and “each”.',
        examples: [
          { sentence: 'She runs fast.', highlight: 'runs', emoji: '🏃‍♀️' },
          { sentence: 'They run fast.', highlight: 'run', emoji: '🏃‍♂️🏃‍♂️' },
          { sentence: 'Each student has a book.', highlight: 'has', emoji: '📘' },
        ],
        practice: [
          q('p1', 'mcq', 'The dogs ___ barking.', 'are', ['is', 'are', 'am']),
          q('p2', 'fill', 'My friend ____ kind. (is/are)', 'is'),
          q('p3', 'mcq', 'Agreement means verb matches…', 'the subject', ['the comma', 'the subject', 'the title only']),
        ],
        game: {
          type: 'pick',
          prompt: 'Correct agreement!',
          items: [
            { id: 'a', label: 'He plays', emoji: '🎮', correct: true },
            { id: 'b', label: 'He play', emoji: '❌', correct: false },
            { id: 'c', label: 'Birds fly', emoji: '🐦', correct: true },
            { id: 'd', label: 'Birds flies', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'News ___ on at 6.', 'is', ['are', 'is', 'am']),
          q('z2', 'fill', 'The children ____ excited. (is/are)', 'are'),
          q('z3', 'mcq', 'Which is correct?', 'She has two pencils.', ['She have two pencils.', 'She has two pencils.', 'She having two pencils.']),
        ],
      }),
      lesson({
        id: 'y5-active-passive',
        title: 'Active and passive voice',
        emoji: '🔄',
        summary: 'Focus on the doer or on the receiver of the action.',
        explanation:
          'Active: The chef cooked the meal. Passive: The meal was cooked by the chef. Passive is often clearer for young writers.',
        examples: [
          { sentence: 'The chef cooked the meal.', highlight: 'cooked', emoji: '👨‍🍳' },
          { sentence: 'The meal was cooked by the chef.', highlight: 'was cooked', emoji: '🍲' },
          { sentence: 'The letter was sent yesterday.', highlight: 'was sent', emoji: '✉️' },
        ],
        practice: [
          q('p1', 'mcq', 'Active voice example:', 'Mia painted a picture.', ['A picture was painted by Mia.', 'Mia painted a picture.', 'Painted was picture.']),
          q('p2', 'fill', 'Passive often uses be + ____ participle.', 'past'),
          q('p3', 'mcq', 'In passive, the object often becomes…', 'the subject', ['an adjective only', 'the subject', 'a preposition']),
        ],
        game: {
          type: 'pick',
          prompt: 'Active sentences!',
          items: [
            { id: 'a', label: 'Tom kicked the ball.', emoji: '⚽', correct: true },
            { id: 'b', label: 'The ball was kicked by Tom.', emoji: '📝', correct: false },
            { id: 'c', label: 'Birds build nests.', emoji: '🪺', correct: true },
            { id: 'd', label: 'Nests are built by birds.', emoji: '📄', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Passive of “She wrote a poem”:', 'A poem was written by her.', ['A poem wrote she.', 'A poem was written by her.', 'She was written a poem.']),
          q('z2', 'fill', 'Active focuses on the ____ of the action.', 'doer'),
          q('z3', 'mcq', 'Which is passive?', 'The window was cleaned.', ['He cleaned the window.', 'The window was cleaned.', 'Clean the window!']),
        ],
      }),
      lesson({
        id: 'y5-reported',
        title: 'Direct and indirect speech',
        emoji: '🗣️',
        summary: 'Report speech carefully with tense changes.',
        explanation:
          'When reporting, pronouns and tenses may change: “I am tired,” she said. → She said that she was tired.',
        examples: [
          { sentence: '“I am tired,” she said.', highlight: 'I am tired', emoji: '😴' },
          { sentence: 'She said that she was tired.', highlight: 'she was tired', emoji: '💬' },
          { sentence: 'He asked if I was ready.', highlight: 'if I was ready', emoji: '❓' },
        ],
        practice: [
          q('p1', 'mcq', 'Reported speech often needs…', 'that / if', ['emoji only', 'that / if', 'no verbs']),
          q('p2', 'fill', '“I like tea,” he said → He said that he ____ tea.', 'liked'),
          q('p3', 'mcq', 'Questions in reported speech may use…', 'if/whether', ['only !', 'if/whether', 'only capital Z']),
        ],
        game: {
          type: 'pick',
          prompt: 'Reported (indirect) speech!',
          items: [
            { id: 'a', label: 'She said that she was happy.', emoji: '😊', correct: true },
            { id: 'b', label: 'She said, “I am happy.”', emoji: '💬', correct: false },
            { id: 'c', label: 'He told me he could help.', emoji: '🤝', correct: true },
            { id: 'd', label: 'He said, “I can help.”', emoji: '📣', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Direct → indirect often changes…', 'tense/pronouns', ['paper color', 'tense/pronouns', 'only fonts']),
          q('z2', 'fill', 'Mom said that she ____ busy. (was/is) — reported past', 'was'),
          q('z3', 'mcq', 'Which is indirect?', 'They said that they were ready.', ['They said, “We are ready.”', 'They said that they were ready.', '“We are ready,” they said.']),
        ],
      }),
      lesson({
        id: 'y5-conditionals',
        title: 'Conditional sentences',
        emoji: '🌈',
        summary: 'If… then… sentences about real or imagined results.',
        explanation:
          'Zero/first conditionals talk about real possibilities: If you heat ice, it melts. If it rains, we will stay inside.',
        examples: [
          { sentence: 'If you heat ice, it melts.', highlight: 'If', emoji: '🧊' },
          { sentence: 'If it rains, we will stay inside.', highlight: 'If it rains', emoji: '🌧️' },
          { sentence: 'If I study, I will improve.', highlight: 'If I study', emoji: '📈' },
        ],
        practice: [
          q('p1', 'mcq', 'First conditional often uses…', 'will in the result', ['only past perfect', 'will in the result', 'no verbs']),
          q('p2', 'fill', 'If you are tired, you ____ rest. (should/school)', 'should'),
          q('p3', 'mcq', 'Conditionals often begin with…', 'If', ['The', 'If', 'Very']),
        ],
        game: {
          type: 'pick',
          prompt: 'Real conditional patterns!',
          items: [
            { id: 'a', label: 'If you water plants, they grow.', emoji: '🌱', correct: true },
            { id: 'b', label: 'If you water plants they will growed.', emoji: '❌', correct: false },
            { id: 'c', label: 'If she practices, she will improve.', emoji: '🎯', correct: true },
            { id: 'd', label: 'If she practices she improve will.', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'If + present, will + verb is often…', 'first conditional', ['past continuous only', 'first conditional', 'a command']),
          q('z2', 'fill', 'If you are kind, people ____ smile. (will/was)', 'will'),
          q('z3', 'mcq', 'Which is conditional?', 'If we hurry, we will catch the bus.', ['We hurried yesterday.', 'If we hurry, we will catch the bus.', 'Hurry the bus.']),
        ],
      }),
      lesson({
        id: 'y5-relative',
        title: 'Relative clauses',
        emoji: '📎',
        summary: 'Add extra information with who, which, that.',
        explanation:
          'Relative clauses describe a noun: The girl who won smiled. The book that I love is here.',
        examples: [
          { sentence: 'The girl who won smiled.', highlight: 'who won', emoji: '🏅' },
          { sentence: 'The book that I love is here.', highlight: 'that I love', emoji: '📚' },
          { sentence: 'This is the house which Jack built.', highlight: 'which Jack built', emoji: '🏠' },
        ],
        practice: [
          q('p1', 'mcq', 'Use who for…', 'people', ['things only', 'people', 'places only']),
          q('p2', 'fill', 'The dog ____ barked is friendly. (that/than)', 'that'),
          q('p3', 'mcq', 'Relative clauses describe…', 'nouns', ['only commas', 'nouns', 'only future tense']),
        ],
        game: {
          type: 'pick',
          prompt: 'Relative clause sentences!',
          items: [
            { id: 'a', label: 'The boy who fell cried.', emoji: '👦', correct: true },
            { id: 'b', label: 'The boy fell who.', emoji: '❌', correct: false },
            { id: 'c', label: 'A gift that I like arrived.', emoji: '🎁', correct: true },
            { id: 'd', label: 'A gift arrived that like I.', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'which / that often refer to…', 'things', ['only people', 'things', 'only feelings']),
          q('z2', 'fill', 'The teacher ____ helps us is kind. (who/where)', 'who'),
          q('z3', 'mcq', 'Which has a relative clause?', 'The cake that she baked is yummy.', ['She baked a cake.', 'The cake that she baked is yummy.', 'Bake a cake!']),
        ],
      }),
      lesson({
        id: 'y5-question-tags',
        title: 'Question tags',
        emoji: '🏷️',
        summary: 'Little questions at the end of sentences.',
        explanation:
          'Positive statement → negative tag: You are ready, aren’t you? Negative statement → positive tag: She isn’t late, is she?',
        examples: [
          { sentence: 'You are ready, aren’t you?', highlight: 'aren’t you?', emoji: '✅' },
          { sentence: 'She isn’t late, is she?', highlight: 'is she?', emoji: '⏰' },
          { sentence: 'They play well, don’t they?', highlight: 'don’t they?', emoji: '🏀' },
        ],
        practice: [
          q('p1', 'mcq', 'It is sunny, ___?', 'isn’t it', ['is it not it', 'isn’t it', 'aren’t they']),
          q('p2', 'fill', 'We can go, ____ we? (can’t/can)', 'can’t'),
          q('p3', 'mcq', 'Positive statement needs a…', 'negative tag', ['positive tag always', 'negative tag', 'no tag']),
        ],
        game: {
          type: 'pick',
          prompt: 'Correct tags!',
          items: [
            { id: 'a', label: "You're happy, aren't you?", emoji: '😊', correct: true },
            { id: 'b', label: "You're happy, are you not you?", emoji: '❌', correct: false },
            { id: 'c', label: "He can't swim, can he?", emoji: '🏊', correct: true },
            { id: 'd', label: "He can't swim, can't he?", emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'They have finished, ___?', 'haven’t they', ['have they finished', 'haven’t they', 'didn’t we']),
          q('z2', 'fill', 'She doesn’t mind, ____ she? (does/doesn’t)', 'does'),
          q('z3', 'mcq', 'Tags turn statements into…', 'checking questions', ['nouns', 'checking questions', 'adjectives']),
        ],
      }),
      lesson({
        id: 'y5-parts-of-speech',
        title: 'Parts of speech',
        emoji: '🧩',
        summary: 'Name the jobs words do in a sentence.',
        explanation:
          'Nouns name, pronouns replace, verbs show action/being, adjectives describe nouns, adverbs describe verbs, and more.',
        examples: [
          { sentence: 'Happy children play outside.', highlight: 'Happy / children / play / outside', emoji: '🧒' },
          { sentence: 'They quickly opened the bright box.', highlight: 'They / quickly / opened / bright / box', emoji: '📦' },
          { sentence: 'Wow! The cat is soft.', highlight: 'Wow / cat / is / soft', emoji: '🐱' },
        ],
        practice: [
          q('p1', 'mcq', '“Quickly” is often an…', 'adverb', ['noun', 'adverb', 'article']),
          q('p2', 'fill', 'In “soft pillow”, soft is an ____.', 'adjective'),
          q('p3', 'mcq', 'Parts of speech tell us a word’s…', 'job', ['only length', 'job', 'only color']),
        ],
        game: {
          type: 'pick',
          prompt: 'Nouns only!',
          items: [
            { id: 'a', label: 'teacher', emoji: '👩‍🏫', correct: true },
            { id: 'b', label: 'teach', emoji: '📚', correct: false },
            { id: 'c', label: 'garden', emoji: '🌿', correct: true },
            { id: 'd', label: 'grow', emoji: '🌱', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', '“And” is a…', 'conjunction', ['noun', 'conjunction', 'verb']),
          q('z2', 'fill', 'A word that names a thing is a ____.', 'noun'),
          q('z3', 'mcq', 'Which is a verb?', 'build', ['building (noun idea)', 'build', 'builder']),
        ],
      }),
      lesson({
        id: 'y5-correction',
        title: 'Sentence correction',
        emoji: '🛠️',
        summary: 'Find mistakes and fix them kindly.',
        explanation:
          'Check capitals, verbs, agreement, and spelling: she go to school → She goes to school.',
        examples: [
          { sentence: 'she go to school → She goes to school.', highlight: 'goes', emoji: '🏫' },
          { sentence: 'They is happy → They are happy.', highlight: 'are', emoji: '😊' },
          { sentence: 'where is you → Where are you?', highlight: 'are', emoji: '❓' },
        ],
        practice: [
          q('p1', 'mcq', 'Fix: He don’t like milk.', "He doesn't like milk.", ['He don’t like milk.', "He doesn't like milk.", 'He not likes milk.']),
          q('p2', 'fill', 'Fix verb: She ____ a book. (read/reads) every night', 'reads'),
          q('p3', 'mcq', 'First word of a sentence needs…', 'a capital letter', ['a comma', 'a capital letter', 'a hyphen']),
        ],
        game: {
          type: 'pick',
          prompt: 'Correct sentences!',
          items: [
            { id: 'a', label: 'We are ready.', emoji: '✅', correct: true },
            { id: 'b', label: 'We is ready.', emoji: '❌', correct: false },
            { id: 'c', label: 'She has a bag.', emoji: '✅', correct: true },
            { id: 'd', label: 'She have a bag.', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Fix: They was late.', 'They were late.', ['They was late.', 'They were late.', 'They be late.']),
          q('z2', 'fill', 'Fix article: She ate ____ apple. (a/an)', 'an'),
          q('z3', 'mcq', 'Correction improves…', 'clarity', ['only paper size', 'clarity', 'only font color']),
        ],
      }),
      lesson({
        id: 'y5-complex',
        title: 'Complex sentences',
        emoji: '🏗️',
        summary: 'Join an independent clause with a dependent clause.',
        explanation:
          'A complex sentence has a main idea plus a dependent idea: I smiled when I saw my friend. Because it rained, we stayed inside.',
        examples: [
          { sentence: 'I smiled when I saw my friend.', highlight: 'when I saw my friend', emoji: '😄' },
          { sentence: 'Because it rained, we stayed inside.', highlight: 'Because it rained', emoji: '🌧️' },
          { sentence: 'Although I was tired, I finished my work.', highlight: 'Although I was tired', emoji: '💪' },
        ],
        practice: [
          q('p1', 'mcq', 'A complex sentence needs…', 'a dependent clause', ['only one word', 'a dependent clause', 'no verbs']),
          q('p2', 'fill', 'I rest ____ I am tired. (when/under)', 'when'),
          q('p3', 'mcq', '“Although” often starts…', 'a dependent clause', ['a noun only', 'a dependent clause', 'a list of commas']),
        ],
        game: {
          type: 'pick',
          prompt: 'Complex sentences!',
          items: [
            { id: 'a', label: 'I read while I wait.', emoji: '📖', correct: true },
            { id: 'b', label: 'I read. I wait.', emoji: '📄', correct: false },
            { id: 'c', label: 'If you ask, I will help.', emoji: '🤝', correct: true },
            { id: 'd', label: 'Ask. Help.', emoji: '📌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Which is complex?', 'We cheered because we won.', ['We cheered. We won.', 'We cheered because we won.', 'Cheer!']),
          q('z2', 'fill', '____ it was dark, we used a lamp. (Although/Under)', 'Although'),
          q('z3', 'mcq', 'Dependent clauses cannot…', 'stand alone as a full sentence', ['describe time', 'stand alone as a full sentence', 'use verbs']),
        ],
      }),
      lesson({
        id: 'y5-mistakes',
        title: 'Common grammar mistakes',
        emoji: '🚨',
        summary: 'Spot frequent errors and choose better forms.',
        explanation:
          'Watch doubles, agreement, and mix-ups: more happier → happier; she don’t → she doesn’t; your/you’re.',
        examples: [
          { sentence: 'more happier → happier', highlight: 'happier', emoji: '😊' },
          { sentence: "she don’t → she doesn’t", highlight: "doesn't", emoji: '🚫' },
          { sentence: "your welcome → you’re welcome", highlight: "you’re", emoji: '🤝' },
        ],
        practice: [
          q('p1', 'mcq', 'Correct form:', "She doesn't know.", ["She don't know.", "She doesn't know.", 'She not know.']),
          q('p2', 'fill', 'Fix: I am ____ than before. (happier/more happier)', 'happier'),
          q('p3', 'mcq', "You’re means…", 'you are', ['belonging to you', 'you are', 'your house']),
        ],
        game: {
          type: 'pick',
          prompt: 'Correct English!',
          items: [
            { id: 'a', label: "They're ready.", emoji: '✅', correct: true },
            { id: 'b', label: 'Their ready.', emoji: '❌', correct: false },
            { id: 'c', label: 'He goes to school.', emoji: '✅', correct: true },
            { id: 'd', label: 'He go to school.', emoji: '❌', correct: false },
          ],
        },
        quiz: [
          q('z1', 'mcq', 'Fix: Me and him went.', 'He and I went.', ['Me and him went.', 'He and I went.', 'Him and me went.']),
          q('z2', 'fill', 'Fix article: She is ____ honest girl. (a/an)', 'an'),
          q('z3', 'mcq', 'Common mistake to avoid:', 'double negatives always', ['clear subjects', 'double negatives always', 'matching verbs']),
        ],
      }),
    ],
  },
]

export function getGrammarYear(yearId: string) {
  return grammarYears.find((y) => y.id === yearId) ?? grammarYears[0]
}

export function getGrammarLesson(lessonId: string) {
  for (const year of grammarYears) {
    const found = year.lessons.find((l) => l.id === lessonId)
    if (found) return { year, lesson: found }
  }
  const year = grammarYears[0]
  return { year, lesson: year.lessons[0] }
}

export function getNextLessonId(lessonId: string): string | null {
  const flat = grammarYears.flatMap((y) => y.lessons.map((l) => l.id))
  const idx = flat.indexOf(lessonId)
  if (idx < 0 || idx >= flat.length - 1) return null
  return flat[idx + 1]
}

export function filterYears(filter: GrammarFilter | 'all') {
  if (filter === 'all') return grammarYears
  return grammarYears.filter((y) => y.filter === filter)
}

