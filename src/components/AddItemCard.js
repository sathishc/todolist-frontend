/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React, { useState } from 'react';
import '../App.css';
import { TextField, Button, Grid, Paper } from '@material-ui/core';

const AddItemCard = ({
  addAction
}) => {

  const [taskName, setTaskName] = useState()

  return (
    <Grid item xs={12}>
      <Paper className="card fixedHeight">
          <TextField
            label="Item"
            onChange={(event)=>{
              setTaskName(event.target.value)
            }}
            value={taskName}
            fullWidth
          >
          </TextField>
        <div style={{float: 'right', paddingTop: '15px', display: 'flex'}}>
          <Button
            variant="contained" 
            color="primary"
            onClick={()=>{
              addAction(taskName)
            }}
          >
            Add
          </Button>
        </div>
        <div style={{clear: 'both'}} />
      </Paper>
    </Grid>
  )
}

export default AddItemCard
