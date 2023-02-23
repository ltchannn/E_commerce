import React from "react"
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import logo from "../../assets/pyramid-eye-with-vintage-circle-hand-drawing-engraving-style_67600-495.jpeg"
import useStyles from "./styles"
import { Link, useLocation } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import {BsPersonCircle} from 'react-icons/bs'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    const {loginWithRedirect} = useAuth0();

    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit">
              <Toolbar>
                  <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                      <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                      Ø𝒛𝒚𝒎𝒂𝒏𝒅𝒊𝒂𝒔
                  </Typography>
                  <div className={classes.grow}/>
                  {location.pathname === "/" && (
                  <div className={classes.button}>
                      <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                          <Badge badgeContent={totalItems} color="secondary">
                              <ShoppingCart/>
                          </Badge>
                      </IconButton>
                      <IconButton>
                          <Badge>
                              <BsPersonCircle onClick={() => loginWithRedirect()}/>
                          </Badge>
                      </IconButton>
                  </div> )}
              </Toolbar>
           </AppBar>  
        </>
    )
}

export default Navbar

