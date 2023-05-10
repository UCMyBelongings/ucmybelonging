import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { RadioGroup } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      //use this part to send data to backend
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{ backgroundColor: "#011110" }}
        >
          <Box>
            <Typography>
              <h1>Sign in</h1>
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  College
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Revelle"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Revelle"
                    control={<Radio />}
                    label="Revelle"
                  />
                  <FormControlLabel
                    value="Muir"
                    control={<Radio />}
                    label="Muir"
                  />
                  <FormControlLabel
                    value="Marshall"
                    control={<Radio />}
                    label="Marshall"
                  />
                  <FormControlLabel
                    value="Warren"
                    control={<Radio />}
                    label="Warren"
                  />
                  <FormControlLabel
                    value="ERC"
                    control={<Radio />}
                    label="ERC"
                  />
                  <FormControlLabel
                    value="Sixth"
                    control={<Radio />}
                    label="Sixth"
                  />
                  <FormControlLabel
                    value="Seventh"
                    control={<Radio />}
                    label="Seventh"
                  />
                  <FormControlLabel
                    value="Eighth"
                    control={<Radio />}
                    label="Eighth"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Year</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="1st"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="1st"
                    control={<Radio />}
                    label="1st"
                  />
                  <FormControlLabel
                    value="2nd"
                    control={<Radio />}
                    label="2nd"
                  />
                  <FormControlLabel
                    value="3rd"
                    control={<Radio />}
                    label="3rd"
                  />
                  <FormControlLabel
                    value="4th"
                    control={<Radio />}
                    label="4th"
                  />
                </RadioGroup>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Gird>
              <Link to="/login">{"login"}</Link>
            </Gird>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Signin;
