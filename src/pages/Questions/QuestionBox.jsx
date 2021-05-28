import React from 'react'
import uuid from 'react-uuid'

import { icons } from '../../utils'

const renderOptions = (options) => {
  let gridColumn = '-three-col'
  if (options.lenght / 2 === 0) {
    gridColumn = '-two-col'
  }

  const renderOptionAnswer = (answer) => (
    <div className="optionAnswer" key={uuid()}>
      {answer}
    </div>
  )

  const renderOptionIcon = (icon) => <img src={icon} alt="Option icon" className="optionImage" />

  const onNextPage = (step) => {
    // if (experience === '') {
    //   setErrors({ errorMessage: 'Please select your experience' })
    // } else {
    //   props.onOnboardingUpdate({
    //     key: 'experience',
    //     value: experience,
    //   })
    //   props.onNextHandler('technology')
    // }
  }

  return (
    <div className={`container${gridColumn}`}>
      {options.map((option) => {
        return (
          <div>
            {renderOptionIcon(option.src)}
            {renderOptionAnswer(options.answer)}
          </div>
        )
      })}
    </div>
  )
}

function QuestionBox({ question }) {
  return (
    <div className="questionBox">
      <div>{question.step}</div>
      <img src={icons.questionMark} alt="QuestionMark" />
      {renderOptions(question.options)}
    </div>
  )
}

export default QuestionBox
