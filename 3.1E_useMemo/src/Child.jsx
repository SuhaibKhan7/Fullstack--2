import React from 'react'
import { memo } from 'react';

function Child({ result}) {
  return (
      <div>Hello Child {result}</div>
  )
}

export default memo(Child)