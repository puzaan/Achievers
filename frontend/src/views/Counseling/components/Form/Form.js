import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  FormControl,
  FormGroup,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Message } from 'components/message.js';
import {CreateCounselling} from 'action/counselingAction';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: '10px',
  },
}));

const data = [
  {
    id: '1',
    courseName: 'Programming',
  },
  {
    id: '2',
    courseName: 'Graphic Designing',
  },
  {
    id: '3',
    courseName: 'Digital Marketing',
  },
  {
    id: '4',
    courseName: 'Quality ASSURANCE & Quality control',
  },
  {
    id: '5',
    courseName: 'Database',
  },
  
];

const Form = () => {
  const classes = useStyles();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inputs, setInputs] = useState([]);
  const [date, setDate] = useState(new Date());

  console.log(inputs);
  const dispatch = useDispatch();
  const counseling = useSelector(state => state.counseling);
  const { loading, error, counselingData } = counseling;
  const history = useHistory();

  useEffect(() => {
    if (counselingData) {
      history.push('/');
    }
  });
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      CreateCounselling(fullName, email, phone, inputs, date),
   );
  };

  return (
    <div className={classes.root}>
      <form name="password-reset-form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Full Name *</Typography>
            <TextField
              placeholder="Full name *"
              variant="outlined"
              size="medium"
              name="fullname"
              onChange={e => setFullName(e.target.value)}
              value={fullName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Email *</Typography>
            <TextField
              placeholder="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              fullWidth
              autoComplete="off"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">Phone No *</Typography>
            <TextField
              placeholder="Phone No *"
              variant="outlined"
              size="medium"
              name="phone"
              onChange={e => setPhone(e.target.value)}
              value={phone}
              fullWidth
              type="number"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <Typography variant="h5">
                In which Topic you want Counselling? *
              </Typography>
              <FormGroup>
                {data.map(form => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={form.courseName}
                          onClick={() => {
                            const index = inputs.findIndex(
                              item => item === form.courseName,
                            );
                            if (~index) {
                              setInputs([
                                ...inputs.slice(0, index),
                                ...inputs.slice(index + 1),
                              ]);
                            } else {
                              setInputs([...inputs, form.courseName]);
                            }
                          }}
                        />
                      }
                      label={form.courseName}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Choose Schedual Date</Typography>

            <TextField
              id="date"
              type="date"
              defaultValue={date}
              onChange={e => setDate(e.target.defaultValue)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

        
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={12}>
            {error && <Message severity="error">{error}</Message>}
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
