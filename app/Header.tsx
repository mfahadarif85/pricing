"use client";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as='section' pb='112px'>
      <Box
        textAlign={["left", "left", "center"]}
        color='gray.50'
        bg='#6B46C1'
        pt='90px'
        pb='190px'
        px='8'
      >
        <Heading fontWeight='extrabold' fontSize={["3xl", "3xl", "5xl"]}>
          Simple pricing for your business
        </Heading>
        <Text fontWeight='medium' fontSize={["lg", "lg", "2xl"]} pt='4'>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
