"use client";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  HStack,
  Icon,
  StackProps,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "@/public/Icon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as='li' spacing='20px' {...rest}>
      <Icon as={CheckIcon} w='22px' h='22px' />
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box
      maxWidth='994px'
      margin='auto'
      mt='-40'
      borderRadius='xl'
      overflow='hidden'
      boxShadow='xl'
    >
      <Flex direction={["column", "column", "row"]} textAlign='center'>
        <Box bg='#F0EAFB' p={["28px", "60px", "60px"]}>
          <Text fontSize='xl' fontWeight='extrabold'>
            Premium PRO
          </Text>
          <Heading as='h3' fontSize={["5xl", "5xl", "6xl"]} mt='4'>
            $329
          </Heading>
          <Text color='#171923' fontSize='lg' mt='2' fontWeight='medium'>
            billed just once
          </Text>
          <Button
            colorScheme='purple'
            size='lg'
            w={["auto", "282px", "282px"]}
            mt='6'
          >
            Get Started
          </Button>
        </Box>
        <Box p={["32px", "32px", "60px"]} fontSize='lg' bg='white'>
          <Text textAlign='left'>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as='ul' spacing='5' pt='6'>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
