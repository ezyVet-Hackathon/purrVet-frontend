import React, { useState, useEffect, useRef } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import uuid from 'react-uuid'
import { isMobile } from 'react-device-detect'
import Carousel from 'react-elastic-carousel'
import { Typography } from '@material-ui/core'

import QuestionBox from './QuestionBox'
import questionForm from './questionForm'

import './Questions.scss'
import { icons } from '../../utils'

const steps = {
  emergency: 0,
  species: 1,
  service: 2,
  priceRange: 3,
  rating: 4,
  language: 5,
}

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
          onAnswerUpdate={updateAwnser}
          onGoBackHandler={onGoBackHandler}
          question={question}
          nextQuestion={questionForm[index]}
        />
      </div>
    ))
  }

  return (
    <div>
      <div className="question-title-container">
        <Typography className="question-title" variant="h3">
          Let us find your perfect vet
        </Typography>
        <img className="small-logo" src={icons.heartQuestions} alt="Heart" />
      </div>
      <Carousel>{renderQuestionBoxed()}</Carousel>
    </div>
  )
}

export default Questions
