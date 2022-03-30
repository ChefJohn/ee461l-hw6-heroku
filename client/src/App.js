import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core'

function App() {

  const [toggleButton, setButton] = useState("");
  const [output, setOutput] = useState("Output is displayed here");


  return (
    <div>
      <Typography variant='h6'>
        EE461L Homework 6
      </Typography>
      <TextField
        variant="outlined" 
        label="Enter your input here"
        onChange={
          (e) => setButton(e.target.value)
        }
      />

      <Button
        variant="contained"
        onClick={() => {
          fetch("/toggle_button/" + toggleButton)
            .then(response =>
              response.json()
            )
            .then(data => {
              setOutput(data.button)
            })
            .catch(error => {
              console.log(error)
            })
        }}
      >
        submit 
      </Button>

      <Typography>
        {output}
      </Typography>
    </div>
  );
}

export default App;
