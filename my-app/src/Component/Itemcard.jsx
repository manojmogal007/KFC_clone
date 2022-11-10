import { Box ,Button,Flex,Image,Text} from '@chakra-ui/react'
// import { CircleIcon} from '@chakra-ui/icons'
import React from 'react'

const Itemcard = ({w,image,title,type,serve,price,description,icon,shadow}) => {
  return (
    <Box w={w} textAlign='left' boxShadow={shadow} pb={15} borderRadius={10}>
       <Image borderRadius={6} w='100%' src={image}/>
       <Box mt={5} ml={5}>
       <Text as='b' >{title}</Text> 
       <Box fontSize={12}>
        <Flex>
            <Box mr={7}>
                <Flex>
                    <Image mr={2} src={icon} alt='icon'/>
                    <Text >{type}</Text>
                </Flex>
            </Box>
            <Box>
               <ul>
                 <li fontSize='12px'>{serve}</li>
               </ul>
            </Box>
        </Flex>
       </Box>
       <Text as='b' color='red'>₹ {price}</Text>
       <Text fontSize={14}>{description}</Text>
       <Box mt={10} ml={10}>
            <Button color='white' bg='#E4002B' borderRadius={20} w={150}>Add to Cart</Button>
       </Box>
       </Box>
    </Box>
  )
}

export default Itemcard