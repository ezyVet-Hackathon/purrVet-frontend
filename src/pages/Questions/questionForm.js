import { icons } from '../../utils'

const questions = [
  {
    step: 'emergency',
    question: 'Is your pet in an emergency?',
    options: [
      {
        src: icons.no,
        value: 'no',
      },
      {
        src: icons.yes,
        value: 'yes',
      },
      {
        src: icons.notSure,
        value: 'not sure',
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
        answer: 'small animal',
      },
      {
        src: icons.horse,
        answer: 'horse',
      },
      {
        src: icons.turtle,
        answer: 'marine animal',
      },
      {
        src: icons.cow,
        answer: 'large animal',
      },
    ],
  },
  {
    step: 'service',
    question: 'What type of service do you need?',
    options: [
      {
        src: icons.petShop,
        answer: 'Pet Shop',
      },
      {
        src: icons.petClinic,
        answer: 'Pet Clinic',
      },
      {
        src: icons.petTrain,
        answer: 'Pet Train',
      },
      {
        src: icons.petCare,
        answer: 'Pet Care',
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
      {
        answer: 'All rates',
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
