import React from 'react'
import { ButtonComp } from './components/Button/Button.js'
import { DropDown } from './components/Dropdown/DropDown.js'
import { ChooseFile } from './components/ChooseFile/ChooseFile.js'
import { WmartSearch } from './components/Search/Search.js'
import styles from './styles/styles.module.css'

export const ButtonComponent = (props) => {
  console.log('in btn component')
  if (props !== undefined && props.data !== undefined) {
    return (
      <ButtonComp
        data={props.data}
        onClickAction={props.onClickAction}
      ></ButtonComp>
    )
  } else {
    return null
  }
}

export const DropDownComponent = (props) => {
  if (props !== undefined && props.data !== undefined) {
    return (
      <DropDown
        data={props.data}
        onClickAction={props.onClickAction}
      ></DropDown>
    )
  } else {
    return null
  }
}

export const ChooseFileComponent = ({ text }) => {
  return <ChooseFile displayName={text}></ChooseFile>
}

export const SearchBarComponent = (props) => {
  return <WmartSearch {...props}></WmartSearch>
}
