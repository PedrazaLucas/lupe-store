import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Box, Spacer, Flex } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import "./styles.css"

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Flex p={5}>
        <Box className="titulo-navbar">
          <h2>Lupe-Store</h2>
        </Box>
        <Spacer />
        <Box p="6" className="desplegable-navbar">
          <Menu >
            <MenuButton className="menu-desplegable">Productos</MenuButton>
            <MenuList>
              <MenuItem>Mate 1</MenuItem>
              <MenuItem>Mate 2</MenuItem>
              <MenuItem>Mate 3</MenuItem>
              <MenuItem>Mate 4</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p='4' className="carrito-navbar">
      <CartWidget/>
      </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
