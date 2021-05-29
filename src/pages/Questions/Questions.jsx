import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import uuid from 'react-uuid'
import Carousel from 'react-elastic-carousel'
import { Typography } from '@material-ui/core'

import QuestionBox from './QuestionBox'
import questionForm from './questionForm'

import './Questions.scss'
import { icons } from '../../utils'

function Questions(props) {
  const [answers, setAnwsers] = useState({})
  const [currentStep, setCurrentStep] = useState(0)
  const history = useHistory()

  useEffect(() => {
    if (localStorage.getItem(questionForm[0].step)) {
      return <Redirect to="/map" />
    }

    return ''
  }, [])

  const onNextPage = (nextStep) => {
    if (!nextStep) {
      history.push('/map', answers)
    } else {
      currentStep.slideNext()
    }
  }

  const skipAnswer = () => {
    history.push('/find/clinics', answers)
  }

  const updateAwnser = (step, answerOption, nextStep) => {
    const tempAnswer = { ...answers }
    tempAnswer[`${step}`] = answerOption.answer || answerOption.value

    setAnwsers(tempAnswer)

    localStorage.setItem(step, tempAnswer[`${step}`])

    if (tempAnswer[`${step}`] === 'yes') {
      history.push('/map')
    }

    onNextPage(nextStep)

    return null
  }

  const renderQuestionBoxes = () => {
    return questionForm.map((question, index) => (
      <div>
        <QuestionBox
          key={uuid()}
          onAnswerUpdate={updateAwnser}
          onGoBackHandler={() => currentStep.slidePrev()}
          question={question}
          nextQuestion={questionForm[index + 1] || ''}
          skipAnswer={skipAnswer}
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
      <Carousel ref={(currentRef) => setCurrentStep(currentRef)} showEmptySlots={false} showArrows={false}>
        {renderQuestionBoxes()}
      </Carousel>
    </div>
  )
}

export default Questions
