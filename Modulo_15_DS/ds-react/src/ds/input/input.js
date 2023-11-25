import React from 'react'
import './styles.css'
import Flex from '../flex/flex'

const Input = (props) => {

  const fSize = `fSize-action-${props.fSize}`
  const size = `size-action-${props.size}`

  return (
    <Flex direction={props.direction}>
        <label className={`${fSize} inputLabel`} htmlFor={props.setId}>{props.label}</label>
        <input className={`${fSize} ${size}`} id={props.id} type={props.type} placeholder={props.placeholder}></input>
    </Flex>
  )
}

export default Input