
import React from 'react'
import {Box, Image,Text,Flex, Spacer} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box border='1px solid #dbdbdb' h='100px' sx={{alignContent:'center'}}>
    <Flex>
        <Box ml='150px' h='100px' w='20%' sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Image h='25px' src='https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg'/>
            <Text as='b'>Menu</Text>
            <Text as='b'>Deals</Text>
        </Box>
        <Spacer/>
        <Box mx='20px' sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Image mr='20px' src='https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg'/>
            <Text as='b'>Sign In</Text>
        </Box>
        <Box mr='150px' sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Text as='b'>₹ 0</Text>
            <Image h='45px' src='https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg'/>
        </Box>
    </Flex>
    </Box>
  )
}

export default Navbar