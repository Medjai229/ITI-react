import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import { useState } from 'react';

export default function Form() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [hobbies, setHobbies] = useState([]);

  function handleFname(event) {
    setFname(event.target.value);
  }

  function handleLname(event) {
    setLname(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleGender(event, x) {
    setGender(x);
  }

  function handleSkills(event) {
    if (!skills.includes(event.target.value)) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((val) => val != event.target.value));
    }
  }

  function handleHobbies(event) {
    setHobbies(event.target.value);
  }

  function handleCountry(event) {
    setCountry(event.target.value);
  }

  function reset() {
    setFname('');
    setLname('');
    setEmail('');
    setPassword('');
    setGender('');
    setSkills([]);
    setCountry('');
    setHobbies([]);
  }

  return (
    <>
      <Container>
        {console.log({
          fname,
          lname,
          email,
          password,
          gender,
          skills,
          country,
          hobbies,
        })}
        <TextField
          variant="filled"
          label="First Name"
          value={fname}
          onChange={handleFname}
          sx={{
            width: '100%',
            marginBottom: '15px',
            '@media (min-width:768px)': {
              width: '48%',
            },
          }}
        ></TextField>
        <TextField
          variant="filled"
          label="Last Name"
          value={lname}
          onChange={handleLname}
          sx={{
            width: '100%',
            marginBottom: '15px',
            '@media (min-width:768px)': {
              width: '48%',
              marginLeft: '4%',
            },
          }}
        ></TextField>
        <TextField
          variant="outlined"
          label="Email"
          value={email}
          fullWidth
          onChange={handleEmail}
          sx={{ marginBottom: '15px' }}
        ></TextField>
        <TextField
          variant="standard"
          label="Password"
          value={password}
          onChange={handlePassword}
          type="password"
          fullWidth
          sx={{ marginBottom: '15px' }}
        ></TextField>

        <Box
          display={'flex'}
          justifyContent={'space-around'}
          sx={{
            flexDirection: 'column',
            marginBottom: '15px',
            '@media (min-width:768px)': {
              flexDirection: 'row',
              marginBottom: '15px',
            },
          }}
        >
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={handleGender}
              value={gender}
            >
              <Box
                display={'flex'}
                sx={{
                  flexDirection: 'column',
                  '@media (min-width:768px)': {
                    flexDirection: 'row',
                  },
                }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </Box>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
              <Box>
                <FormControlLabel
                  control={<Checkbox onChange={handleSkills} />}
                  checked={skills.includes('HTML')}
                  label="HTML"
                  value="HTML"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleSkills} />}
                  checked={skills.includes('CSS')}
                  label="CSS"
                  value="CSS"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleSkills} />}
                  checked={skills.includes('JS')}
                  label="JS"
                  value="JS"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleSkills} />}
                  checked={skills.includes('Node')}
                  label="Node"
                  value="Node"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleSkills} />}
                  checked={skills.includes('React')}
                  label="React"
                  value="React"
                />
              </Box>
            </FormGroup>
          </FormControl>
        </Box>

        <FormControl fullWidth sx={{ marginBottom: '15px' }}>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            onChange={handleCountry}
          >
            <MenuItem value={'Egypt'}>Egypt</MenuItem>
            <MenuItem value={'USA'}>USA</MenuItem>
            <MenuItem value={'Canada'}>Canada</MenuItem>
            <MenuItem value={'KSA'}>KSA</MenuItem>
            <MenuItem value={'UAE'}>UAE</MenuItem>
            <MenuItem value={'UK'}>UK</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: '15px' }}>
          <InputLabel id="select-multi">Hobbies</InputLabel>
          <Select
            label="Hobbies"
            value={hobbies}
            onChange={handleHobbies}
            multiple
          >
            <MenuItem value="Reading">Reading</MenuItem>
            <MenuItem value="Gaming">Gaming</MenuItem>
            <MenuItem value="Walking">Walking</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
            <MenuItem value="Drawing">Drawing</MenuItem>
          </Select>
        </FormControl>

        <Box display={'flex'} justifyContent={'end'}>
          <Button
            variant="outlined"
            sx={{ marginRight: '10px' }}
            onClick={reset}
          >
            Reset
          </Button>
          <Button variant="contained">Submit</Button>
        </Box>
      </Container>
    </>
  );
}
