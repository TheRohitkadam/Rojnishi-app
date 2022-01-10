import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {orange} from "@mui/material/colors"

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Rojnishi
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          padding={3}
          sx={{
            backgroundImage:
              "url(https://image.freepik.com/free-vector/diary-concept-illustration_114360-4158.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            // backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography
              component="h1"
              variant="p"
              style={{ color: "#E33E7F", fontSize: 44 }}
            >
              Rojnishi
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              style={{ fontWeight: 600, color: "#263238" }}
            >
              Sign in
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
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Divider sx={{ mt: 3, mb: 2 }}>or</Divider>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                fullWidth
                sx={{ mt: 1, mb: 1 }}
              >
                Continue with Google
              </Button>
              <Button
                variant="outlined"
                startIcon={<AppleIcon />}
                fullWidth
                sx={{ mt: 1, mb: 1 }}
              >
                Continue with Apple
              </Button>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mt: 4 }}
              >
                Made with 💖 in India
              </Typography>
              <Copyright sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
