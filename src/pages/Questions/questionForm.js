import { icons } from '../../utils'

const questions = [
  {
    step: 'emergency',
    question: 'Is your pet in an emergency?',
    options: [
      {
        src: icons.yes,
      },
      {
        src: icons.no,
      },
    ],
  },
  {
    step: 'species',
    question: 'What is your pet species?',
    options: [
      {
        src: icons.dog,
        answer: 'dog',
      },
      {
        src: icons.cat,
        answer: 'cat',
      },
      {
        src: icons.rabbit,
        answer: 'smallAnimal',
      },
      {
        src: icons.horse,
        answer: 'horse',
      },
      {
        src: icons.turtle,
        answer: 'marineAnimal',
      },
      {
        src: icons.cow,
        answer: 'largeAnimal',
      },
    ],
  },
  {
    step: 'service',
    question: 'What is your pet species?',
    options: [
      {
        src: icons.petShop,
        answer: 'petShop',
      },
      {
        src: icons.petClinic,
        answer: 'petClinic',
      },
      {
        src: icons.petTrain,
        answer: 'petTrain',
      },
      {
        src: icons.petCare,
        answer: 'petCare',
      },
    ],
  },
  {
    step: 'priceRange',
    question: 'How about the price range?',
    special: {
      src: icons.nz,
    },
    options: [
      {
        answer: '10 - 50',
      },
      {
        answer: '50 - 100',
      },
      {
        answer: '100 - 500',
      },
      {
        answer: '500 - 1000',
      },
      {
        answer: '1000 - 5000',
      },
      {
        answer: '5000+',
      },
    ],
  },
  {
    step: 'rating',
    question: 'Do you concern about the rating?',
    options: [
      {
        answer: '>= 1 star',
      },
      {
        answer: '>= 2 stars',
      },
      {
        answer: '>= 3 stars',
      },
      {
        answer: '>= 4 stars',
      },
      {
        answer: '5 stars',
      },
    ],
  },
  {
    step: 'language',
    question: 'Do you have language preference?',
    options: [
      {
        answer: 'Maori',
      },
      {
        answer: 'Samoan',
      },
      {
        answer: 'Mandarin',
      },
      {
        answer: 'Cantonese',
      },
      {
        answer: 'Hindi',
      },
      {
        answer: 'Vietnamese',
      },
      {
        answer: 'Arabic',
      },
      {
        answer: 'French',
      },
    ],
  },
]

export default questions
