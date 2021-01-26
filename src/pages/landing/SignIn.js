import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { NavLink} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import WelcomeTitle from "./WelcomeTitle";
import Subtitle from "./Subtitle";
import BackgroundImage from "../../assets/images/FONDO.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  fonts: {
    fontFamily: "Raleway, sans-serif",
    fontWeight: "400",
  },
  image: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    margin: theme.spacing(8, 2),
    padding: theme.spacing(20, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    verticalAlign: "middle",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.error.light,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  const classes = useStyles();

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={classes.fonts}
    >
      {"Developed by - "}
      <Link color="inherit" href="https://github.com/matiasportela94/">
        Matias Portela
      </Link>
      {" - "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <div className={classes.title}>
          <WelcomeTitle />
          <Subtitle message="Kumade" />
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.fonts}>
            Sign in
          </Typography>
          <form className={[classes.form, classes.fonts]} validate>
            <TextField
              variant="outlined"
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
              variant="outlined"
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
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  className={classes.fonts}
                />
              }
              label="Remember me next time"
            />
            <NavLink to="/dashboard" className="btn btn-primary w-100">
              Sign In
            </NavLink>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.fonts}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" className={classes.fonts}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
