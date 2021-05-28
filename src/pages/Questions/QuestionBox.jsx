import { Typography } from '@material-ui/core'
import React, { useRef } from 'react'
import uuid from 'react-uuid'

import { icons } from '../../utils'

function QuestionBox({ scrollToRef, onNextHandler, onAnswerUpdate, onGoBackHandler, question, nextQuestion }) {
  const myRef = useRef(null)

  const renderOptionAnswer = (answer) => (
    <button className="option-answer-button" type="button">
      {answer}
    </button>
  )

  const renderOptionIcon = (icon) => (
    <button className="option-icon-button square-box" type="button" onClick={onAnswerUpdate}>
      <img src={icon} alt="Option icon" className="option-image" />
    </button>
  )

  const renderOptions = (options) => {
    let gridColumn = '-three-col'
    if (options.length % 2 === 0) {
      gridColumn = '-two-col'
    }

    return (
      <div className={`container${gridColumn}`}>
        {options.map((option) => {
          return (
            <div key={uuid()}>
              {option.src ? renderOptionIcon(option.src) : null}
              {option.answer ? renderOptionAnswer(option.answer) : null}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="question-box">
      <Typography variant="h5" className="question-name">
        {question.question}
      </Typography>

      {renderOptions(question.options)}
    </div>
  )
}

export default QuestionBox
