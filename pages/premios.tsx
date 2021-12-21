import { Layout } from "components";
import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";

import regalosImg from "public/premios-photos/regalos.png";
import rompecabezasImg from "public/premios-photos/rompecabezas.png";
import TriviaImg from "public/premios-photos/trivia.png";

export default function Premios() {
  return (
    <Layout>
      <Box bg='brand.green' h="50vh" w='100%' p={4} color='white'>
        <Heading fontWeight='500' fontSize='60px' lineHeight='60px' mt='5'>Más de $50,000 mxn en premios</Heading>
        vioebvierbviueruivbuerbvuiebvuiebvu viuer vuierhviuer viuerhv iuerhuerhuerv eurvhuerh
        
        <Flex flexDirection='column' alignItems='center'>
          <Box width='200px' display='flex'>
            <Image 
            priority
            src={regalosImg}
            alt="Regalos"
            />
          </Box>
          <Box boxShadow='2xl' bgColor='white' maxWidth='350px' borderRadius='13px'>
            <Grid  
            templateColumns='repeat(3, 1fr)'
            color='brand.green' 
            fontWeight="700" 
            textAlign="center"
            padding='15px'
            gap='2'
            >
              <Box lineHeight='30px'>
                <Text>
                <Box as="span" fontSize='32px'>
                1
                </Box>
                er lugar
                </Text>
                <Text fontSize='32px'>
                $5,000 <br/>
                mxn*
                </Text>
              </Box>
              <Box lineHeight='30px'>
              <Text>
                <Box as="span" fontSize='32px'>
                1
                </Box>
                er lugar
                </Text>
                <Text fontSize='32px'>
                $5,000 <br/>
                mxn*
                </Text>
              </Box>
              <Box lineHeight='30px'>
              <Text>
                <Box as="span" fontSize='32px'>
                1
                </Box>
                er lugar
                </Text>
                <Text fontSize='32px'>
                $5,000 <br/>
                mxn*
                </Text>
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Box>

    </Layout>
  );
}
