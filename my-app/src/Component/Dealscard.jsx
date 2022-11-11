import { Box, Button, Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'

const Dealscard = ({img,desc,title}) => {
  return (

        <Box borderRadius={8} textAlign='center' h={400} mt={1.5} w={319} boxShadow='base' mb={10} >
                <Image borderTopRadius={8} src={img}/>
                <Box p={4} lineHeight={6}>
                    <Heading color='red' fontSize='28px'>{title}</Heading>
                    <Text fontSize={14}>{desc}</Text>
                    <Button mt={2} borderRadius='20px' w='150px' _hover={{bg:'black',color:'white'}} sx={{bg:'white',color:'black',border:'1px solid black'}}>Redeem</Button>
                </Box>
        </Box>
 
  )
}

export default Dealscard