import React, { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { Carousel } from 'antd'

import QuestionBox from './QuestionBox'
import questionForm from './questionForm'

import './Questions.scss'

function Questions(props) {
  const [onboarding, setOnboarding] = useState({})
  const [currentStep, setCurrentStep] = useState('emergency')
  const [redirect, setRedirect] = useState(false)
  const [completeOnboarding, setCompleteOnboarding] = useState(false)
  const [loading, setLoading] = useState(false)
  const [onboardingError, setOnboardingError] = useState(null)
  const ref = useRef()

  const onNextPage = (step) => {
    if (step === 'completed') {
      //
    } else {
      setCurrentStep(step)
      if (ref && ref.current) {
        // this 'ref' has access to 'goTo', 'prev' and 'next'
        ref.current.next()
      }
    }
  }

  const onGoBackHandler = () => {
    // setCurrentStep(step);
    if (ref && ref.current) {
      // this 'ref' has access to 'goTo', 'prev' and 'next'
      ref.current.prev()
    }
  }

  const updateOnboarding = (onboardingOption, callback = null) => {
    const tempOnboarding = { ...onboarding }
    tempOnboarding[`${onboardingOption.key}`] = onboardingOption.value

    setOnboarding(tempOnboarding)

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

  const confirmAndRedirectToProfile = () => {
    setRedirect(true)
  }

  return (
    <div className="question-container">
      <Carousel dotPosition="top" ref={ref} arrows={false} dots touchMove={false}>
        <div>
          <QuestionBox
            scrollToRef={scrollToRef}
            onNextHandler={onNextPage}
            onOnboardingUpdate={updateOnboarding}
            onGoBackHandler={onGoBackHandler}
          />
        </div>
        <div>
          <QuestionBox
            scrollToRef={scrollToRef}
            onNextHandler={onNextPage}
            onOnboardingUpdate={updateOnboarding}
            onGoBackHandler={onGoBackHandler}
          />
        </div>
        <div>
          <QuestionBox
            scrollToRef={scrollToRef}
            onNextHandler={onNextPage}
            onOnboardingUpdate={updateOnboarding}
            onGoBackHandler={onGoBackHandler}
          />
        </div>
      </Carousel>
    </div>
  )
}

export default Questions
