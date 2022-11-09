import { Box,Image,Text } from '@chakra-ui/react'
import React from 'react'

const Categories = ({text,src}) => {
  return (
    <Box borderRadius={5} w='250px' h='250px' bg='#F7FAFC' mb={10}>
        <Image borderTopRadius={5} src={src}/>
        <Box sx={{display:'flex',justifyContent:'center'}} mt='20px'><Text as='b'>{text}</Text></Box>
    </Box>
  )
}

export default Categories