
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import moment from 'moment'

import { SingleInputTimeRangeField  } from '@mui/x-date-pickers-pro/SingleInputTimeRangeField';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

const validationSchema = yup.object({
  phone: yup
    .string('Enter name')
    .min(4, 'Name is too short')
    .max(30, 'Name is too long')
    .required('Name is required'),
    name: yup
    .string('Enter name')
    .min(4, 'Name is too short')
    .max(30, 'Name is too long')
    .required('Name is required'),
    tip: yup
    .string('Enter name')
    .min(4, 'Name is too short')
    .max(30, 'Name is too long')
    .required('Name is required'),
  street: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const OrderInformation = () =>{
    const formik = useFormik({
        initialValues: {
          name: 'foobar',
          password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
            <form onSubmit={formik.handleSubmit}>
<Accordion className='Accordion'>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel2a-content"
  id="panel2a-header"
>
  <Typography>Pick-up information</Typography>
</AccordionSummary>
<AccordionDetails>
<Grid className="grid-container" container spacing={4} width={'100%'}>
<Grid className="item" item xs={12}>
<FormControl>
      <FormLabel className='label'>Pick-up from</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="store" control={<Radio />} label="Store" />
        <FormControlLabel value="customer" control={<Radio />} label="Customer" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </Grid>
    </Grid>
</AccordionDetails>
</Accordion>

<Accordion className='Accordion'>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel2a-content"
  id="panel2a-header"
>
  <Typography>Customer information</Typography>
</AccordionSummary>
<AccordionDetails>
<Grid className="grid-container" container spacing={4} width={'100%'}>
<Grid className="item" item xs={5}>
<TextField required fullWidth  id="standard-basic" label="Phone" variant="standard" defaultValue="(273)267-1322" InputProps={{
            startAdornment: <InputAdornment position="start">+1</InputAdornment>,
          }} />
          </Grid>
 <Grid className="item" item xs={5}>
<TextField
required
fullWidth 
    variant="standard"
    id="name"
    name="name"
    label="Name"
    value={formik.values.name}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.name && Boolean(formik.errors.name)}
    helperText={formik.touched.name && formik.errors.name}
          />
          </Grid>
          <Grid className="item" item xs={2}>
<TextField fullWidth  id="standard-basic" label="Tip" variant="standard" defaultValue="3" InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }} />
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
        </Grid>
</AccordionDetails>
</Accordion>

<Accordion className='Accordion'>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel2a-content"
  id="panel2a-header"
>
  <Typography>Delivery Time</Typography>
</AccordionSummary>
<AccordionDetails>
<Grid className="grid-container" container spacing={4} width={'100%'}>
<Grid className="item" item xs={3}>
<FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-filled-label">Set by</InputLabel>
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
    <Grid className="item" item xs={3}>
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <SingleInputTimeRangeField defaultValue={[moment().add(1, 'hours').set("minute", 0),moment().add(3, 'hours').set("minute", 0)]} minutesStep={60} disablePast minTime={moment().set("hour", 10).set("minute", 0)} maxTime={moment().set("hour", 18).set("minute", 0)} label="Delivery Time" />
    </LocalizationProvider>
    </Grid>
    <Grid className="item" item xs={3}>
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <DatePicker label="Delivery Date" disablePast defaultValue={moment()} />
    </LocalizationProvider>
    </Grid>
    </Grid>
</AccordionDetails>
</Accordion>


<Accordion className='Accordion'>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel2a-content"
  id="panel2a-header"
>
  <Typography>Order Information</Typography>
</AccordionSummary>
<AccordionDetails>
<Grid className="grid-container" container spacing={4} width={'100%'}>
<Grid className="item" item xs={2}>
<TextField fullWidth  id="standard-basic" label="Order #" variant="standard" defaultValue="" />
    </Grid>
    <Grid className="item" item xs={2}>
<TextField fullWidth  id="standard-basic" label="No of Items" variant="standard" defaultValue="1" />
    </Grid>
    <Grid className="item" item xs={2}>
    <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-filled-label">Item Type</InputLabel>
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
          <MenuItem value="box">Box</MenuItem>
          <MenuItem value='bag'>Bag</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid className="item" item xs={2}>
    <FormControl variant="standard" fullWidth>
        <InputLabel id="demo-simple-select-filled-label">Barcode Type</InputLabel>
        <Select 
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          onChange={handleChange}
          value=""
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="qr">QR Code</MenuItem>
          <MenuItem value='matrix'>Data Matrix</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid className="item" item xs={4}>
<TextField fullWidth  id="standard-basic" label="Barcode #" variant="standard" defaultValue="" />
    </Grid>
    </Grid>
</AccordionDetails>
</Accordion>


<Accordion className='Accordion'>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel2a-content"
  id="panel2a-header"
>
  <Typography>Proof of Delivery</Typography>
</AccordionSummary>
<AccordionDetails>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
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
</AccordionDetails>
</Accordion>

</form>

        )
    }
    export default OrderInformation;


