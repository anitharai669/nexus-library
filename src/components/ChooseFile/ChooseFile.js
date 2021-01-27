import React, { useState } from 'react'
import { withStyles, Button } from '@material-ui/core'

export function ChooseFile() {
  const [Path, setPath] = useState()
  var fileInput = React.createRef()
  const StyledButton = withStyles({
    root: {
      width: '100%',
      height: '29px',
      borderRadius: '4px',
      background: '#06c220',
      float: 'right'
    },
    label: {
      textTransform: 'capitalize',
      fontSize: '10px',
      color: 'white'
    }
  })(Button)
  const StyledButtonBrowse = withStyles({
    root: {
      width: '1rem',
      height: '2rem',
      borderRadius: '4px',
      background: '#06c220',
      float: 'right',
      display: 'inline'
    },
    label: {
      textTransform: 'capitalize',
      fontSize: '10px',
      color: 'white'
    }
  })(Button)

  onchange = (e) => {
    setPath(e.target.value)
  }

  return (
    <div>
      <div className={`main-drop-down`}>
        <label>
          <span className='dropdown-label-text'>Upload file:</span>
        </label>
        <div style={{ width: '250px', height: 'auto' }}>
          <input
            type='text'
            id='pathFile'
            value={JSON.stringify(Path)}
            style={{
              display: 'inline',
              padding: '2px',
              width: '170px',
              borderColor: 'rgb(33, 135, 252)',
              float: 'left',
              borderStyle: 'solid',
              borderWidth: 'thin',
              borderRadius: '5px'
            }}
          />

          <Button
            component='label'
            style={{
              float: 'right',
              textTransform: 'capitalize',
              fontSize: '11px',
              backgroundColor: '#00C168',
              textAlignLast: 'center',
              color: 'white',
              padding: '2px',
              display: 'inline'
            }}
            isClearable
          >
            Browse
            <input type='file' id='input' hidden multiple onChange={onchange} />
          </Button>
        </div>
        <div style={{ width: '250px', height: 'auto' }}></div>
      </div>
    </div>
  )
}
