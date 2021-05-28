import { Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import uuid from 'react-uuid'

import { icons } from '../../utils'

function QuestionBox({ scrollToRef, onNextHandler, onAnswerUpdate, onGoBackHandler, question, nextQuestion }) {
  const ref = useRef(null)

  const renderOptionAnswer = (optionAnswer) => (
    <button
      className="option-answer-button"
      type="button"
      onClick={() => onAnswerUpdate(question.step, optionAnswer, nextQuestion)}
    >
      {optionAnswer.answer}
    </button>
  )

  const renderOptionIcon = (optionAnswer) => (
    <button
      className="option-icon-button square-box"
      type="button"
      onClick={() => onAnswerUpdate(question.step, optionAnswer, nextQuestion)}
    >
      <img src={optionAnswer.src} alt="Option icon" className="option-image" />
    </button>
  )

  const renderOptions = (options) => {
    let gridColumn = '-three-col'
    if (options.length % 2 === 0) {
      gridColumn = '-two-col'
    }

    return (
      <div key={uuid()} className={`container${gridColumn}`}>
        {options.map((option) => {
          return (
            <div key={uuid()}>
              {option.src ? renderOptionIcon(option) : null}
              {option.answer ? renderOptionAnswer(option) : null}
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

      <button type="button" className="square-box">
        Done
      </button>
    </div>
  )
}

export default QuestionBox
