import { Box,Button,Center,Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Dealscard from '../Component/Dealscard'
import Navbar from '../Component/Navbar'
import Order from '../Component/Order'
import { dealsitem } from '../Component/Dealsitem'
import Footer from '../Component/Footer'


const Deals = () => {


    const center={display:'block', justifyContent:'center',alignItems:'center'}
  return (
    <Box fontFamily='National 2 Condensed'>
        <Box><Navbar/></Box>
        <Box><Order/></Box>
        <Box h={270} bgImage='https://online.kfc.co.in/static/media/offer_deals_banner.777f20e1.svg' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Heading  as='h2' color='white' fontSize={74}> DEALS & OFFERS</Heading>
        </Box>
        
        <Center>
            <Box w='70%' textAlign={'left'}>
                    <Box h={32} sx={{display:'flex',alignItems:'center'}} >
                        <Heading>NATIONAL OFFERS</Heading>
                    </Box>
                    <Box>
                        <SimpleGrid columns={3}>
                            <Box pl={10} pr={10} textAlign='center' color='white' h={410} w={329} bgImage='https://online.kfc.co.in/static/media/Native_select%20a%20kfc_grey%20image.6e97ff02.svg' >
                                <Heading mt='65%' fontSize='28px'>SELECT A KFC TO SEE LOCAL OFFERS</Heading>
                                <Button mt={35} borderRadius='20px' w='150px' _hover={{bg:'white',color:'black'}} sx={{bg:'#212529',color:'white',border:'2px solid white'}}>Find a KFC</Button>
                            </Box>
                            <Box pl={10} pr={10} textAlign='center' color='white' h={400} mt={1.5} borderRadius={8} w={319}  bg='#E4002B' >
                                <Heading mt='45%' fontSize='28px'>SIGN IN TO SEE MORE EXCLUSIVE OFFERS & DEALS</Heading>
                                <Button mt={35} borderRadius='20px' w='150px' _hover={{bg:'white',color:'black'}} sx={{bg:'#E4002B',color:'white',border:'2px solid white'}}>Login</Button>
                            </Box>
                            {
                                dealsitem.map((el)=>(
                                    <Dealscard img={el.img} key={el.img+el.title} title={el.title} desc={el.desc} />
                                ))
                            }
                        </SimpleGrid>
                    </Box>
            </Box>
        </Center>
        <Box><Footer/></Box>
    </Box>
  )
}

export default Deals