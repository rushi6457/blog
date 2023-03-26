import { Button, Flex, HStack, Heading, Image, useColorMode } from '@chakra-ui/react';
import React from 'react';
import {MoonIcon,SunIcon} from "@chakra-ui/icons"
import {FcReadingEbook} from "react-icons/fc";
import { Link } from 'react-router-dom';

const Navbar = () => {
     const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack 
            width={'100%'}
            display={'flex'} 
            justifyContent={'space-between'} 
            align={'center'}
            boxShadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            padding={'20px'}
            position={'fixed'}
            >
            <Flex 
                align={'center'} 
                gap={'10px'}>
                <FcReadingEbook fontSize={'40px'}/>
                <Heading
                    fontFamily={'cursive'}
                    >BlogApp</Heading>
            </Flex>
            <Flex 
                align={'center'} 
                gap={'30px'}>
                    <Button 
                        variant={'outline'}
                        colorScheme='black' 
                        onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}</Button>   
                    <Link to={'/login'}>  
                    <Button
                        fontFamily={'monospace'}
                        letterSpacing={'1px'}
                        fontSize={'lg'}
                        variant={'solid'}
                        colorScheme='red'
                        >Login</Button>
                    </Link>
                    <Link to={'/signup'}>
                    <Button
                        fontFamily={'monospace'}
                        letterSpacing={'1px'}
                        fontSize={'lg'}
                        variant={'outline'}
                        colorScheme='red'
                        >Signup</Button>
                    </Link>
            </Flex>
        </HStack>
    );
}

export default Navbar;
