import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputAdornment from '@mui/material/InputAdornment';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import './Settings.css'

const Settings = () =>{
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
 
  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <Grid className="grid-container" container spacing={4} width={'100%'}>
        <React.Fragment>
        <Grid className="item" item xs={3}>
         <Tabs value={currentTabIndex} onChange={handleTabChange} orientation="vertical" style={{padding:'30px', height:'100%'}}
     TabIndicatorProps={{
    style: {
      backgroundColor: "#EDB678"
    }
  }}
  sx={{
    ".Mui-selected": {
    color: `#EDB678 !important`,
    },
    }}>
        <Tab style={{height:'10%'}} label='Account' />
        <Tab style={{height:'10%'}} label='Store' />
        <Tab style={{height:'10%'}} label='Defaults' />
        <Tab style={{height:'10%'}} label='Billing' />
      </Tabs>
      </Grid>
      <Grid className="item" item xs={9}>
      {/* Account */}
    {currentTabIndex === 0 && (
        <Grid className="grid-container" container spacing={4} width={'100%'}>
            <Grid className="item" item xs={3}>
                <TextField fullWidth  id="standard-basic" label="First name" variant="standard" defaultValue="" />
            </Grid>
            <Grid className="item" item xs={3}>
                <TextField fullWidth  id="standard-basic" label="Last name" variant="standard" defaultValue="" />
            </Grid>
            <Grid className="item" item xs={4}>
                <TextField fullWidth  id="standard-basic" label="Email" variant="standard" defaultValue="" />
            </Grid>
            <Grid className="item" item xs={4}>
                <TextField fullWidth  id="standard-basic" label="Current password" variant="standard" defaultValue="" />
            </Grid>
            <Grid className="item" item xs={4}>
                <TextField fullWidth  id="standard-basic" label="New password" variant="standard" defaultValue="" />
            </Grid>
            <Grid className="item" item xs={4}>
                <TextField fullWidth  id="standard-basic" label="Comfirm new password" variant="standard" defaultValue="" />
            </Grid>
            <Grid className="item" item xs={12} textAlign={'center'}>
                <Button variant="outlined">Save changes</Button>
            </Grid>
        </Grid>
    )}

      {/* Store */}
      {currentTabIndex === 1 && (
        <Grid className="grid-container" container spacing={4} width={'100%'}>
            <Grid className="item" item xs={3}>
                <TextField fullWidth  id="standard-basic" label="Store name" variant="standard" defaultValue="" />
            </Grid>
            <Grid className="item" item xs={2}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-filled-label">Store Type</InputLabel>
                    <Select 
                        required
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        onChange={handleChange}
                        value="box"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="box">Grocery</MenuItem>
                        <MenuItem value='bag'>Bag</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid className="item" item xs={4}>
                <TextField fullWidth  id="standard-basic" label="Email" variant="standard" defaultValue="" />
            </Grid>
            <Grid className="item" item xs={3}>
                <TextField required fullWidth  id="standard-basic" label="Phone" variant="standard" defaultValue="(273)267-1322" 
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+1</InputAdornment>,
                    }}
                />
            </Grid>
            <Grid className="item" item xs={3}>
                <TextField required fullWidth  id="standard-basic" label="Street" variant="standard" defaultValue="88 W 110 St" />
            </Grid>
            <Grid className="item" item xs={3}>
                <TextField required fullWidth id="standard-basic" label="Apt" variant="standard" defaultValue="1J" />
            </Grid>
            <Grid className="item" item xs={3}>
                <TextField required fullWidth id="standard-basic" label="City" variant="standard" defaultValue="New York" />
            </Grid>
            <Grid className="item" item xs={3}>
                <TextField required fullWidth id="standard-basic" label="Zip" variant="standard" defaultValue="10012" />
            </Grid>
            <Grid className="item" item xs={12}>
                <TextField
                    id="standard-multiline-static"
                    label="Courier Note"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="standard"
                    fullWidth
                />
            </Grid>
            <Grid className="item" item xs={12} textAlign={'center'}>
                <Button variant="outlined">Save changes</Button>
            </Grid>
        </Grid>
    )}

    {/* Defaults */}
    {currentTabIndex === 2 && (
        <Grid className="grid-container" container spacing={4} width={'100%'}>
            <Grid className="item" item xs={1}>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            control={
                            <Checkbox name="Autofill" />
                            }
                            labelPlacement="top"
                            label="Autofill"
                        />
                    </FormGroup>
                </FormControl>
            </Grid>
            <Grid className="item" item xs={2}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-filled-label">Pick-up from</InputLabel>
                    <Select 
                        required
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        onChange={handleChange}
                        value="box"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="box">Store</MenuItem>
                        <MenuItem value='bag'>Customer</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid className="item" item xs={2}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-filled-label">Item type</InputLabel>
                    <Select 
                        required
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        onChange={handleChange}
                        value="box"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="box">Bag</MenuItem>
                        <MenuItem value='bag'>Customer</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid className="item" item xs={2}>
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-filled-label">Barcode type</InputLabel>
                    <Select 
                        required
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        onChange={handleChange}
                        value="box"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="box">Matrix</MenuItem>
                        <MenuItem value='bag'>Customer</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid className="item" item xs={5}>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel className='label'>Proof of delivery</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            control={
                            <Checkbox name="picture" />
                            }
                            labelPlacement="top"
                            label="Picture"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox name="recipient" />
                            }
                            labelPlacement="top"
                            label="Recipient"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox name="signature" />
                            }
                            labelPlacement="top"
                            label="Signature"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox name="idmatch" />
                            }
                            labelPlacement="top"
                            label="ID Match"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox name="id21" />
                            }
                            labelPlacement="top"
                            label="ID 21+"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox name="pin" />
                            }
                            labelPlacement="top"
                            label="Delivery Pin"
                        />
                    </FormGroup>
                </FormControl>
            </Grid>
            <Grid className="item" item xs={2}>
                <TextField fullWidth  id="standard-basic" label="Tip" variant="standard" defaultValue="3" 
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
            </Grid>
            <Grid className="item" item xs={3}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-filled-label">Time set by</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={handleChange}
                            value="store"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="store">Store</MenuItem>
                            <MenuItem value='customer'>Customer</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid className="item" item xs={3}>
                <FormControl fullWidth>
                <FormLabel className='label'>Time-frame</FormLabel>
                    <RadioGroup
                        required
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="2-hour"
                    >
                        <FormControlLabel value="1-hour" control={<Radio />} label="1-hour" />
                        <FormControlLabel value="2-hour" control={<Radio />} label="2-hour" />
                        <FormControlLabel value="4-hour" control={<Radio />} label="4-hour" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid className="item" item xs={12} textAlign={'center'}>
                <Button variant="outlined">Save changes</Button>
            </Grid>
        </Grid>
    )}

    </Grid>
        </React.Fragment>
        </Grid>
  )
    }
    export default Settings;