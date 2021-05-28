import React, { useState, useEffect, useRef } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import uuid from 'react-uuid'
import { isMobile } from 'react-device-detect'
import Carousel from 'react-elastic-carousel'

import QuestionBox from './QuestionBox'
import questionForm from './questionForm'

import './Questions.scss'

const steps = {
  emergency: 0,
  species: 1,
  service: 2,
  priceRange: 3,
  rating: 4,
  language: 5,
}

const items = [
  { id: 1, title: 'item #1' },
  { id: 2, title: 'item #2' },
  { id: 3, title: 'item #3' },
  { id: 4, title: 'item #4' },
  { id: 5, title: 'item #5' },
]

function Questions(props) {
  const [answers, setAnwsers] = useState({})
  const [currentStep, setCurrentStep] = useState('emergency')
  const [answerErrors, setAnswerError] = useState(null)
  const ref = useRef()
  const history = useHistory()

  const onNextPage = (step) => {
    if (step === 'completed') {
      history.push('/find/clinics', answers)
    } else {
      setCurrentStep(step)
      if (ref && ref.current) {
        ref.current.next()
      }
    }
  }

  const onGoBackHandler = () => {
    // setCurrentStep(step);
    if (ref && ref.current) {
      ref.current.prev()
    }
  }

  const updateAwnser = (answerOption, callback = null) => {
    const tempAnswer = { ...answers }
    tempAnswer[`${answerOption.key}`] = answerOption.value

    setAnwsers(tempAnswer)

    if (callback) {
      callback()
    }
  }

  const scrollToRef = (reference) => {
    // console.log(ref)
    // if (ref.current) {
    //   ref.current.scrollIntoView();
    // }
  }

  const renderQuestionBoxed = () => {
    return questionForm.map((question, index) => (
      <div>
        <QuestionBox
          key={uuid()}
          scrollToRef={scrollToRef}
          onNextHandler={onNextPage}
          onOnboardingUpdate={updateAwnser}
          onGoBackHandler={onGoBackHandler}
          question={question}
          nextQuestion={questionForm[index]}
        />
      </div>
    ))
  }

  return <Carousel>{renderQuestionBoxed()}</Carousel>
}

export default Questions
