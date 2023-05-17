'use client'

import { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './StyledLink.module.scss'

interface StyledLinkProps {
  text: string
}

export default function StyledLink({ text }: StyledLinkProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `${text} - ${count} times`
  }, [count, text])

  const containerClasses = classNames(styles.container, styles.someOtherClass)

  return (
    <div className={containerClasses}>
      <h1>{text}</h1>
      <button
        type='button'
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <p>
        You clicked
        {count}
        times
      </p>
    </div>
  )
}
