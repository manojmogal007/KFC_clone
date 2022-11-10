import { Box, Center, Flex, Heading, Input, SimpleGrid ,Text,Button} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Component/Navbar'
import Order from '../Component/Order'
import { Item } from '../Component/Item'
import Itemcard from '../Component/Itemcard'
import { useRef } from 'react'
import { useState } from 'react'

const Menu = () => {
    // console.log(Item[0])
    const [search,setsearch]=useState('')
    const [data,setdata]=useState([])
    console.log(data)
    const launchref=useRef(null)
    const chickenbucketref=useRef(null)
    const biryaniref=useRef(null)
    const burgerref=useRef(null)
    const boxmeals=useRef(null)


    const gotolaunch=()=>{
        window.scrollTo({top:launchref.current.offsetTop, behavior:'smooth'})
    }
    const gotochickenbucket=()=>{
        window.scrollTo({top:chickenbucketref.current.offsetTop, behavior:'smooth'})
    }
    const gotobiryani=()=>{
        window.scrollTo({top:biryaniref.current.offsetTop, behavior:'smooth'})
    }
    const gotoboxmeals=()=>{
        window.scrollTo({top:boxmeals.current.offsetTop, behavior:'smooth'})
    }

    const gotoburgers=()=>{
        window.scrollTo({top:burgerref.current.offsetTop, behavior:'smooth'})
    }

    const handlesearch=()=>{
        let arr=[]
        for(let i=0;i<Item.length;i++){
            for(let j=0;j<Item[i].length;j++){
                if(Item[i][j].type===search||Item[i][j].category===search){
                    arr.push(Item[i][j])
                }
            }
        }
        setdata(arr) 
    }

    


  return (
    <Box>
        <Box><Navbar/></Box>
        <Box ><Order/></Box>
        <Flex>
            <Box w='30%' sx={{dispay:'grid',position:'fixed'}} lineHeight={10} fontSize={18}>
                <Box textAlign='left' ml='27%'>
                    <Heading pt={20}>KFC MENU</Heading>
                    <Text onClick={gotochickenbucket}>CHICKEN BUCKETS</Text>
                    <Text onClick={gotolaunch}>NEW LAUNCH</Text>
                    <Text onClick={gotobiryani}>BIRYANI BUCKETS</Text>
                    <Text onClick={gotoboxmeals}>BOX MEALS</Text>
                    <Text onClick={gotoburgers}>BURGERS</Text>
                    <Text></Text>
                </Box>
            </Box>
            <Box w='70%'  ml='32%' mr={20} p={30} >
                <Box>
                    <Input onChange={(e)=>setsearch(e.target.value)}/>
                    <Button onClick={handlesearch}>Search</Button>
                </Box>
            <Box  bg='#F7FAFC' pb={30} pl={15} pr={15} borderRadius={10} ref={chickenbucketref}>
                <Box ml={50} h={100} sx={{display:'flex',alignItems:'center'}} textAlign='left'>
                    <Heading>CHICKEN BUCKETS</Heading>
                </Box>
                <Center>
                    <SimpleGrid columns={2} gap={10}>
                        {
                            Item[0].map((el)=>(
                                 <Itemcard shadow='' w='100%' key={el.title} image={el.image} title={el.title} type={el.type} serve={el.serve}price={el.price} description={el.description} icon={el.icon}/>   
                            ))
                        }
                    </SimpleGrid>
                </Center>
            </Box>
            <Box ref={launchref}>
                <Box ml={50} h={100} sx={{display:'flex',alignItems:'center'}} textAlign='left'>
                    <Heading>NEW LAUNCH</Heading>
                </Box>
                <Center>
                    <SimpleGrid columns={3} gap={5}>
                        {
                            Item[1].map((el)=>(
                                 <Itemcard shadow='base' w='100%' key={el.image+el.title} image={el.image} title={el.title} type={el.type} serve={el.serve}price={el.price} description={el.description} icon={el.icon}/>   
                            ))
                        }
                    </SimpleGrid>
                </Center>
            </Box>
            <Box ref={biryaniref}>
                <Box ml={50} h={100} sx={{display:'flex',alignItems:'center'}} textAlign='left'>
                    <Heading>BIRYANI BUCKETS</Heading>
                </Box>
                <Center>
                    <SimpleGrid columns={3} gap={5}>
                        {
                            Item[2].map((el)=>(
                                 <Itemcard shadow='base' w='100%' key={el.image+el.title} image={el.image} title={el.title} type={el.type} serve={el.serve}price={el.price} description={el.description} icon={el.icon}/>   
                            ))
                        }
                    </SimpleGrid>
                </Center>
            </Box>
            <Box ref={boxmeals}>
                <Box ml={50} h={100} sx={{display:'flex',alignItems:'center'}} textAlign='left'>
                    <Heading>BOX MEALS</Heading>
                </Box>
                <Center>
                    <SimpleGrid columns={3} gap={5}>
                        {
                            Item[3].map((el)=>(
                                 <Itemcard shadow='base' w='100%' key={el.image+el.title} image={el.image} title={el.title} type={el.type} serve={el.serve}price={el.price} description={el.description} icon={el.icon}/>   
                            ))
                        }
                    </SimpleGrid>
                </Center>
            </Box>
            <Box ref={burgerref}>
                <Box ml={50} h={100} sx={{display:'flex',alignItems:'center'}} textAlign='left'>
                    <Heading>BIRYANI BUCKETS</Heading>
                </Box>
                <Center>
                    <SimpleGrid columns={3} gap={5}>
                        {
                            Item[4].map((el)=>(
                                 <Itemcard shadow='base' w='100%' key={el.image+el.title} image={el.image} title={el.title} type={el.type} serve={el.serve}price={el.price} description={el.description} icon={el.icon}/>   
                            ))
                        }
                    </SimpleGrid>
                </Center>
            </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default Menu