

import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Order = () => {
  return (
    <Box h='70px' bg='#202124' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Flex >
            <Heading color='white'  as='h4' size ='md'>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Heading>
            <Box ><Button ml='20px' color='white' bgColor='#E4002B' borderRadius='20px' w='150px' >Start Order</Button></Box>
        </Flex>
    </Box>
  )
}

export default Order