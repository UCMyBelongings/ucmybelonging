import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Login() {
  const classes = useStyles();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhone] = React.useState("");
  const [college, setCollege] = React.useState("");
  const [grade, setGrade] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      username,
      password,
      phoneNumber,
      college,
      grade,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        id="username"
        name="username"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="phone"
        name="phone"
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">College</FormLabel>
        <RadioGroup
          row
          aria-label="college"
          name="college"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        >
          <FormControlLabel
            value="college1"
            control={<Radio color="primary" />}
            label="College 1"
          />
          <FormControlLabel
            value="college2"
            control={<Radio color="primary" />}
            label="College 2"
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Grade</FormLabel>
        <Select
          id="grade"
          name="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          variant="outlined"
          fullWidth
        >
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="D">D</MenuItem>
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={!username || !password || !phone || !college || !grade}
      >
        Log In
      </Button>
    </form>
  );
}

export default Login;
