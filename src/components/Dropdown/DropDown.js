import React from 'react'
//import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
//import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
//import NativeSelect from '@material-ui/core/NativeSelect'
//import { timePeriod } from "./DropArrayRepo";
import './SelectTimePeriodDropDownItem.css'

export function DropDown(props) {
  const [state, setState] = React.useState({
    value: '',
    name: 'hai'
  })

  const { onClickAction } = props

  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value
    })
    console.log(
      'Hello from core dropdown with value changed',
      event.target.value
    )
    onClickAction(event.target.value)
  }

  return (
    <div style={{ width: '100%', height: '50px' }}>
      <FormControl variant='filled' className={props.data.className}>
        <InputLabel htmlFor='filled-age-native-simple'>
          {props.data.name}
        </InputLabel>
        <Select
          native
          value={state.value}
          onChange={handleChange}
          inputProps={{
            name: 'value',
            id: 'filled-age-native-simple'
          }}
          // style={props.data.style}
        >
          {props.data.options.map((v) => {
            return (
              <option value={v.value} displayname={v.displayName}>
                {v.displayName}
              </option>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}
