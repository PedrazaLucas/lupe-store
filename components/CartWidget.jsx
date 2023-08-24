import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Box, Divider } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <div>
      <Flex>
        <Box>
          <ArrowForwardIcon />
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
