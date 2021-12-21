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
import bkgbuttomImg from "public/premios-photos/backbottom.svg"; 
import TriviaImg from "public/premios-photos/trivia.png";

export default function Premios() {
  return (
    <Layout>
      <Box bg='brand.green' h="auto" w='100%' p={4} color='white'>
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
                2
                </Box>
                do lugar
                </Text>
                <Text fontSize='32px'>
                $5,000 <br/>
                mxn*
                </Text>
              </Box>
              <Box lineHeight='30px'>
              <Text>
                <Box as="span" fontSize='32px'>
                3
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
      <Box bgColor='#BF0D23' h='auto' marginTop='-70px'>
        <Box pt='100px'>
          <Grid width='100vw'>
            <GridItem>

              <Image 
              priority
              src={rompecabezasImg}
              alt='rompecabezas sorteo'
              />
             
            </GridItem>
            <GridItem position='relative'>
            <Flex
                  position="absolute"
                  width="100%"
                  height="100%"
                  justifyContent="center"
                  alignItems='flex-start'
                  zIndex='2'
                >
                  <Link
                    href="https://sticker.ly/s/MF8PFB"
                    target="_blank"
                    fontWeight="bold"
                    rel="noopener noreferrer"
                    background="brand.tealLighter"
                    color="brand.text.blue"
                    textTransform="uppercase"
                    letterSpacing="widest"
                    boxShadow="lg"
                    borderRadius="4px"
                    py={2}
                    px={3}
                    fontSize='15px'
                  >
                    Participar
                  </Link>
                </Flex>
            <Image 
              src={bkgbuttomImg}
              alt='rompecabezas sorteo'
              layout='responsive'
              // objectFit="cover"
              // objectPosition="center"
              />
               
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <Box bgColor='#BF0D23' h='auto'>
        <Box >
          <Grid width='100vw'>
            <GridItem>

              <Image 
              priority
              src={TriviaImg}
              alt='rompecabezas sorteo'
              />
             
            </GridItem>
            <GridItem position='relative'>
            <Flex
                  position="absolute"
                  width="100%"
                  height="100%"
                  justifyContent="center"
                  alignItems='flex-start'
                  zIndex='2'
                >
                  <Link
                    href="https://sticker.ly/s/MF8PFB"
                    target="_blank"
                    fontWeight="bold"
                    rel="noopener noreferrer"
                    background="brand.tealLighter"
                    color="brand.text.blue"
                    textTransform="uppercase"
                    letterSpacing="widest"
                    boxShadow="lg"
                    borderRadius="4px"
                    py={2}
                    px={3}
                    fontSize='15px'
                  >
                    Participar
                  </Link>
                </Flex>
            <Image 
              src={bkgbuttomImg}
              alt='rompecabezas sorteo'
              layout='responsive'
              // objectFit="cover"
              // objectPosition="center"
              />
               
            </GridItem>
          </Grid>
        </Box>
      </Box>

    </Layout>
  );
}
