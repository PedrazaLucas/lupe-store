import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Box, Spacer, Flex,Button } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import "./styles.css"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Flex p={5}>
        <Box className="titulo-navbar">
          <Link to={"/"}>
          <h1>Lupe-Store</h1>
          </Link>
        </Box>
        <Spacer />
        <Box p="6" className="desplegable-navbar">
          <Menu >
            <MenuButton className="menu-desplegable">Productos</MenuButton>
            <MenuList>
              <MenuItem><Link to={`/categoria/${"CAMIONERO"}`}>CAMIONERO</Link></MenuItem>
              <MenuItem><Link to={`/categoria/${"PAMPA"}`}>PAMPA</Link></MenuItem>
              <MenuItem><Link to={`/categoria/${"PLASTICO"}`}>PLASTICO</Link></MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p='4' className="carrito-navbar">
          <Link to={"/cart"}>
      <CartWidget/>
      </Link>
      </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
