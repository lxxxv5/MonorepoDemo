import React, { FC } from 'react'
import utils from '@lxxxv5-lerna-demo/utils'

const { isArray } = utils

const Button = (text, children) => {
  return <button>{isArray(text) ? text.join(',') : children}</button>
}

export default Button
