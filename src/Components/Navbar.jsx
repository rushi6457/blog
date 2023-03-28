import { Button, Flex, HStack, Heading, Image, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react';
import {EditIcon, MoonIcon,SunIcon} from "@chakra-ui/icons"
import {FcReadingEbook} from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/auth/authActions';
import styles from "./Navbar.module.css";

const Navbar = () => {
     const { colorMode, toggleColorMode } = useColorMode()
     console.log(colorMode);
     const store = useSelector(store=>store.login)
    const [state,setState] = useState(false)
    const dispatch = useDispatch()
     const handleClick = () =>{
        dispatch(logout())
     }
    return (
        <HStack 
            className={styles.navbar}
            width={'100%'}
            position={'fixed'}
            display={'flex'} 
            bgColor={colorMode === "light" ? 'white' : '#030b15f'}
            justifyContent={'space-between'} 
            align={'center'}
            boxShadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            padding={'20px'}
            >
            <Flex 
                align={'center'} 
                gap={'10px'}>
                <FcReadingEbook fontSize={'40px'}/>
                <Link to='/'>
                <Heading
                    fontFamily={'cursive'}
                    >BlogApp</Heading>
                </Link>
            </Flex>
            <Flex 
                align={'center'} 
                gap={'30px'}>
                    <Link to={store.token?.token ? '/createblog' : "/login"}>
                    <Button variant={'ghost'} fontSize={'1.2rem'} gap={'10px'}>Write <EditIcon fontSize={'1.2rem'}/></Button>
                    
                    </Link>
                    <Button 
                        variant={'outline'}
                        colorScheme='black' 
                        onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}</Button>   
                    <Link to={'/login'}>  
                    
                    <Button
                        onClick={handleClick}
                        fontFamily={'monospace'}
                        letterSpacing={'1px'}
                        fontSize={'lg'}
                        variant={'solid'}
                        colorScheme='red'
                        >{store.token?.token ? "Logout" : "Login"}</Button>
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
