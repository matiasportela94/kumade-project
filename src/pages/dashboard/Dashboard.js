import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "./listItems";
import Accounts from "./Accounts";
import LineChart from "./LineChart";
import Deposits from "./QuickTransfer";
import RecentTransactions from "./RecentTransactions";
import DebitCard from "./DebitCard";
import Calendar from "./Calendar";
import Logo from "../../components/Logo";
import { Menu, MenuItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";

// Generate Account Data
function createAccountData(
  id,
  account,
  firstName,
  lastName,
  balance,
  cuit,
  alias
) {
  return { id, account, firstName, lastName, balance, cuit, alias };
}

// Generate Transaction Data
function createTransactionsData(
  id,
  date,
  name,
  variant,
  status,
  paymentMethod,
  amount
) {
  return { id, date, name, variant, status, paymentMethod, amount };
}


const transactionsData = [
  createTransactionsData(
    0,
    "20 Jan, 2021",
    "John Cusack",
    "primary",
    "Done",
    "VISA ⠀•••• 0000",
    312.44
  ),
  createTransactionsData(
    1,
    "20 Jan, 2021",
    "Ethan Hawk",
    "primary",
    "Done",
    "VISA ⠀•••• 0000",
    866.99
  ),
  createTransactionsData(
    2,
    "20 Jan, 2021",
    "Keanu Reeves",
    "warning",
    "Pending",
    "MC ⠀•••• 1253",
    100.81
  ),
  createTransactionsData(
    3,
    "21 Jan, 2021",
    "Keanu Reeves",
    "primary",
    "Done",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createTransactionsData(
    4,
    "22 Jan, 2021",
    "Ethan Hawk",
    "danger",
    "Rejected",
    "VISA ⠀•••• 0000",
    212.79
  ),
];

const accountsData = [
  createAccountData(
    0,
    "765915/3",
    "Matias",
    "Portela",
    34512.44,
    20115495648,
    "chi.no"
  ),
  createAccountData(
    1,
    "126494/1",
    "Latinoamericano",
    "SA",
    156948.44,
    20115495648,
    "latin.american"
  ),
  createAccountData(
    2,
    "236948/8",
    "Matias",
    "Portela",
    1849.44,
    20115495648,
    "get.schwifty"
  ),
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "red",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: "100%",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [transactions, setTransactions] = React.useState(transactionsData);
  const [accounts, setAccounts] = React.useState(accountsData);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sendMoney = (amount, name) => {
    let balance = accounts[0].balance 
    let transferAmount =  parseFloat(amount)
    if ((balance -= amount) >= 0) {
      let transferingAccount = accounts[0];
      transferingAccount.balance -= transferAmount
      setAccounts(accounts.splice(0,3, transferingAccount))
      setTransactions(
        transactions.concat([
          {
            date: "24 Jan, 2021",
            name,
            variant: "primary",
            status: "Done",
            paymentMethod: "VISA ⠀•••• 0000",
            amount,
          },
        ])
      );
    }else{
      alert("Su balance es menor a la cantidad indicada para transferir")
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          ></Typography>
          <IconButton color="inherit">
            <Avatar onClick={handleClick}>
              <span className="text-muted">M</span>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <NavLink to="/">
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </NavLink>
              </Menu>
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Logo />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>{mainListItems}</List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                <h2>Welcome, Matias!</h2>
              </Typography>
            </Grid>

            {/* Accounts */}
            <Grid item xs={12} md={12} lg={8}>
              <Paper className={fixedHeightPaper}>
                <Accounts accounts={accounts} />
              </Paper>
            </Grid>

            {/* Debit Card */}
            <Grid item xs={6} md={6} lg={4}>
              <DebitCard className="p-5" />
            </Grid>

            {/* Recent Deposits */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Deposits sendMoney={sendMoney} />
              </Paper>
            </Grid>

            {/* Recent Transactions */}
            <Grid item xs={12} lg={8}>
              <Paper className={classes.paper}>
                <RecentTransactions transactions={transactions} />
              </Paper>
            </Grid>

            {/* Chart */}
            <Grid item xs={12} md={8} lg={8}>
              <Paper className={fixedHeightPaper}>
                <LineChart />
              </Paper>
            </Grid>

            {/* Calendar */}
            <Grid item xs={6} md={4} lg={4}>
              <Calendar className={classes.fixedHeight} />
            </Grid>
          </Grid>

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
