
import { Box,Flex,Heading,Button,Image, SimpleGrid,Text} from '@chakra-ui/react'
import React from 'react'
import Categories from '../Component/Categories'
import Navbar from '../Component/Navbar'

const cat=[
    {src:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=21.88',text:'CHICKEN BUCKETS'},
    {src:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT200.jpg?ver=21.88',text:'NEW LAUNCH'},
    {src:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=21.88',text:'BIRYANI BUCKETS'},
    {src:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=21.88',text:'BOX MEALS'},
    {src:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=21.88',text:'BURGERS'},
    {src:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=21.88',text:'SNACKS'},
    {src:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT178.jpg?ver=21.88',text:'STAY HOME SPECIAL'}
]

const Home = () => {
  return (
    <Box>
        <Navbar/>
        <Box h='70px' bg='black' sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Flex >
                    <Heading color='white'  as='h4' size ='md'>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Heading>
                    <Box ><Button ml='20px' color='white' bgColor='red' borderRadius='20px' w='150px' >Start Order</Button></Box>
                </Flex>
        </Box>
        <Box>
           <Image w='100%' src='https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=954&fit=fill&fm=webp' />
        </Box>
        <Box bg='#F7FAFC' textAlign='left' h='130px' sx={{display:'flex',alignItems:'center'}}>
            <Heading ml={170} mt='90px' h='130px' >WELCOME TO KFC!</Heading>
        </Box>
        <Box>
            <Box textAlign='left' ml={250}>
                <Box mt={90}><Heading >BROWSE CATEGORIES</Heading></Box>
                <Box mt={50}>
                   <SimpleGrid columns={[2,4]}>
                    {
                      cat.map((el)=>(
                        <Categories key={el.src} text={el.text} src={el.src}/>
                      ))  
                    }
                        <Box borderRadius={5} w='250px' h='250px' bg='#F7FAFC'  mb={10}>
                            <Image borderTopRadius={5} ml='5%' mt='20px' w='90%' src='https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg'/>
                            <Box mt='50px' sx={{display:'flex',justifyContent:'center'}} ><Text as='b'>View all menu</Text></Box>
                        </Box>
                   </SimpleGrid>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Home