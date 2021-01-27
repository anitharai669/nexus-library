import React from 'react'
import styles from '../../styles/styles.module.css'
import Button from '@material-ui/core/Button'
import './Button.css'

export const ButtonComp = (props) => {
  console.log('in btn')
  console.log(props)
  console.log(props.children)

  const { onClickAction } = props
  const onButtonClick = (event) => {
    console.log('Hello from Core Lib Component')
    onClickAction(
      'Button is clicked and callback triggered',
      event.target.value
    )
  }

  return (
    <Button
      className={props.data.className}
      variant='contained'
      color={props.data.color}
      size={props.data.size}
      style={props.data.style}
      disabled={props.data.disabled}
      // onClick={props.children.onClick()}
      onClick={onButtonClick}
    >
      {props.data.btnName}
    </Button>
  )
}
