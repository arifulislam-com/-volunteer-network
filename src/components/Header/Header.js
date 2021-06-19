import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Logo/>
                    <Tab label="Home" />
                    <Tab label="Donation" />
                    <Tab label="Events" />
                    <Tab label="Blog" />
                    <Tab label="Register" />
                    <Tab label="Admin" />
                </Tabs>
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
                <div className="label">
                    <label htmlFor="#">
                        <input type="text" placeholder="Search"/>
                        <input type="button" value="Search"/>
                    </label>
                </div>

                {/* <Logo/>
            <a href="#">Home</a>
            <a href="#">Donation</a>
            <a href="#">Events</a>
            <a href="#">Blog</a>
            <a href="#">Register</a>
            <a href="#">Admin</a> */}
            </Paper>
    );
};

export default Header;