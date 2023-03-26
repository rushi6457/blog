import { Button, Center, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';

const Login = () => {
    return (
    <Center 
        paddingTop={'7%'} 
        w='100vw'
        h='100vh'>
        <VStack  
            boxShadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"   
            width={'40%'}
            padding={'3rem'}
            margin={'auto'}
            borderTopRightRadius={'2rem'}
            borderBottomRadius={'2rem'}
            >
            <Container>
                <Heading 
                    fontFamily={'cursive'}
                    paddingBottom={'20px'}    
                    size={'lg'} 
                    textAlign={'center'}>Login into account</Heading>
                <FormLabel fontFamily={'cursive'} fontSize={'xl'}>Email</FormLabel>
                <Input></Input>
                <FormLabel fontFamily={'cursive'} fontSize={'xl'}>Password</FormLabel>
                <Input></Input>
                <Button 
                    variant={'solid'}
                    colorScheme='blue'
                    width='10vw'
                    color='white'
                    borderRadius={'30px'}
                    fontFamily={'cursive'}
                    fontSize={'lg'}
                    mt='4'>Login</Button>
            </Container>
        </VStack>
    </Center>
    );
}

export default Login;