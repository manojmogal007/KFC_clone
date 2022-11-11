import { Box, Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box bg='#202124' color='white' textAlign='left' pt={150} pb={100} fontSize={14} lineHeight={7}>
        <Flex>
            <Box ml={40} mr={28}>
                <Image src='https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg'/>
            </Box>
            <Box ml={10}>
                <Text>KFC Food</Text>
                <Text>Menu</Text>
                <Text>Order Lookup</Text>
                <Text>Gift Card</Text>
                <Text>Nutrition & Allergen</Text>
            </Box>
            <Box ml={5}>
                <Text>Support</Text>
                <Text>Get Help</Text>
                <Text>Contact Us</Text>
                <Text>KFC Feedback</Text>
                <Text>Privacy Policy</Text>
            </Box>
            <Box ml={5}>
                <Text>Legal</Text>
                <Text>Terms and Conditions</Text>
                <Text>Privacy Policy</Text>
                <Text>Disclaimer</Text>
                <Text>Caution Notice</Text>
            </Box>
            <Box ml={5}>
                <Text>KFC India</Text>
                <Text>About KFC</Text>
                <Text>KFC Care</Text>
                <Text>Careers</Text>
                <Text>Our Golden Past</Text>
            </Box>
            <Box ml={25}>
                <a href='https://restaurants.kfc.co.in/'>
                    <Flex>
                        <Image mr={3} src='https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg'/>
                        <Text>Find a KFC</Text> 
                    </Flex>
                </a>
            </Box>
            <Box ml={10}>
                <a href='https://play.google.com/store/apps/details?id=com.yum.kfc&pli=1'><Image src='https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg'/></a>
            </Box>
            <Box ml={5}>
                <a href='https://apps.apple.com/in/app/kfc-india/id915824379'><Image src='https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg'/></a>
            </Box>
        </Flex>
    </Box>
  )
}

export default Footer