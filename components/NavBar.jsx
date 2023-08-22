import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Box, Spacer, Flex } from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p="4">
          <h3>Lupe-Store</h3>
        </Box>
        <Spacer />
        <Box p="4">
          <Menu>
            <MenuButton>Categorys</MenuButton>
            <MenuList>
              <MenuItem>Category A</MenuItem>
              <MenuItem>Category B</MenuItem>
              <MenuItem>Category C</MenuItem>
              <MenuItem>Category D</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p='4'>
      <CartWidget/>
      </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
