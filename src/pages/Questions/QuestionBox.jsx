import React, { useRef } from 'react'
import uuid from 'react-uuid'

import { icons } from '../../utils'

const renderOptionAnswer = (answer) => (
  <div className="optionAnswer" key={uuid()}>
    {answer}
  </div>
)

const renderOptionIcon = (icon) => <img src={icon} alt="Option icon" className="optionImage" />

function QuestionBox({ scrollToRef, onNextHandler, onOnboardingUpdate, onGoBackHandler, question, nextQuestion }) {
  const myRef = useRef(null)

  const renderOptions = (options) => {
    let gridColumn = '-three-col'
    if (options.lenght / 2 === 0) {
      gridColumn = '-two-col'
    }

    return (
      <div className={`container${gridColumn}`}>
        {options.map((option) => {
          return (
            <div>
              <button className="button-icon" type="button" onClick={onOnboardingUpdate}>
                {renderOptionIcon(option.src)}
              </button>
              <button type="button">{renderOptionAnswer(options.answer)}</button>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="questionBox">
      <div className="question-name">{question.question}</div>
      <img src={icons.questionMark} alt="QuestionMark" />
      {renderOptions(question.options)}
    </div>
  )
}

export default QuestionBox
