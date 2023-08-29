import React from "react";
import { Flex, Box, Divider } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <div>
      <Flex>
        <Box>
        <span class="material-symbols-outlined">shopping_cart</span>
        </Box>
        <Divider/>
        <Box>
          <p>3</p>
        </Box>
      </Flex>
    </div>
  );
};

export default CartWidget;
