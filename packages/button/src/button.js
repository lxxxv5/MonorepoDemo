import React, { FC } from 'react'
import utils from '@lxxxv5-lerna-demo/utils'

const { isArray } = utils

const Button = (text, disabled, children) => {
  return (
    <button disabled={disabled}>
      {isArray(text) ? text.join(',') : children}
    </button>
  )
}

export default Button
