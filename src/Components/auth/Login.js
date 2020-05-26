import React, { useCallback, useContext, Component } from 'react'
import { AuthContext } from "./Auth";
import app from '../config/fire';
import { Redirect, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core';
import SignUp from './SignUp';

// const Login = ({ history }) => {
//     const handleLogin = useCallback(async event => {
//         event.preventDefault();
//         const { email, password } = event.target.elements;
//         try {
//             await app
//                 .auth()
//                 .signInWithEmailAndPassword(email.value, password.value);
//             history.push("/");
//         } catch (e) {
//             alert(e);
//         }
//     }, [history]);
//     const { currentUser } = useContext(AuthContext);
//     if (currentUser) {
//         return <Redirect to="/" />;
//     }
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                V - Shop
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const styles = (theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    login(e) {
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log(u);
            }).catch((err) => {
                console.log(err);
            })
    }
    signup(e) {
        e.preventDefault();
        app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log(u);
            }).catch((err) => {
                console.log(err);
            })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { classes, loginError } = this.props;
        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={this.handleChange}
                                value={this.state.email}
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
                                onChange={this.handleChange}
                                value={this.state.password}
                                autoComplete="current-password"
                            />
                            {loginError && (
                                <Typography component="p" className={classes.errorText}>
                                    Incorrect email or password.
                                </Typography>)}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.login}
                            >
                                Sign In
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.signup}
                            >
                                Sign Up
                            </Button>
                            {/* <Grid container>
                                <Grid item xs>
                                    <Link href={<SignUp />} variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href={<SignUp />} variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid> */}
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>

            // <Container component="main" maxWidth="xs">
            //     <Paper className={classes.paper}>
            //         <Avatar className={classes.avatar}>
            //             <LockOutlinedIcon />
            //         </Avatar>
            //         <Typography component="h1" variant="h5">
            //             Sign in
            //             </Typography>
            //         <TextField
            //             variant="outlined"
            //             margin="normal"
            //             fullWidth
            //             id="email"
            //             label="Email Address"
            //             name="email"
            //             type="email"
            //             onChange={this.handleChange}
            //             value={this.state.email}
            //         />
            //         <TextField
            //             variant="outlined"
            //             margin="normal"
            //             fullWidth
            //             name="password"
            //             label="Password"
            //             type="password"
            //             id="password"
            //             onChange={this.handleChange}
            //             value={this.state.password}
            //         />
            //         {loginError && (
            //             <Typography component="p" className={classes.errorText}>
            //                 Incorrect email or password.
            //             </Typography>
            //         )}
            //         <Button
            //             type="button"
            //             fullWidth
            //             variant="contained"
            //             color="primary"
            //             className={classes.submit}
            //             onClick={this.login}
            //         >
            //             Sign In
            //             </Button>
            //         <Link href={<SignUp />} variant="body2">
            //             {"Don't have an account? Sign Up"}
            //         </Link>
            //     </Paper>
            //     <Box mt={5}>
            //         <Copyright />
            //     </Box>
            // </Container>

            // <div>
            //     <h1>Login</h1>
            //     <form>
            //         <label>
            //             Email
            //         <input name="email" type="email" placeholder="Email"
            //                 onChange={this.handleChange} value={this.state.email} />
            //         </label>
            //         <label>
            //             Password
            //         <input name="password" type="password" placeholder="Password"
            //                 onChange={this.handleChange} value={this.state.password} />
            //         </label>
            //         <button onClick={this.login}>Login</button>
            //         <button onClick={this.signup}>SignUp</button>
            //     </form>
            // </div>
        )
    }
}

export default withStyles(styles)(Login);
