import { Box, Button, Center, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DateFormatter from 'react-date-formatter';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import styles from "../Styles/Home.module.css";

const Home = () => {

     let [data,setData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/blog/allblogs`)
        .then((res) =>setData(res.data))
    },[])
    console.log(data);
    return (
    <Box
        paddingTop={'5%'}
    >
        
    
        <Grid
          className={styles.grid} 

        >
            {data.map((el) =>{
                return (
                    <GridItem>
                      <Box 
                        padding={'2%'}
                     >
                        <Heading 
                            padding={'4px'}
                            as='h1'
                            textAlign={'center'} 
                            size={'xl'}>
                        {el.title}</Heading>
                        <Text
                            padding={'5px'}
                            textAlign={'justify'}
                            fontSize={'1.1rem'}
                        >
                            <TextTruncate
                                line={3}
                                element="span"
                                truncateText="… "
                                text={el.blog}
                                textTruncateChild={<Link to={`singleblog/${el._id}`}>
                                    <Button
                                        variant={'ghost'}
                                        padding={'1px'}
                                        height={'auto'}
                                        colorScheme='red'
                                        margin={'1%'} 
                                        fontSize={'1.1rem'}
                                        textDecoration={'underline'}
                                        fontFamily={'heading'}
                                    >Read more</Button></Link>}
                            />
                        </Text>
                        <Text
                            padding={'4px'}
                            fontSize={'18px'}
                            fontFamily={'cursive'}
                            textAlign={'center'} 
                        >Created on: {DateFormatter(el.updatedAt).longDate()}</Text>
                        <Text
                            fontSize={'18px'}
                            fontFamily={'calibri'}
                            letterSpacing={'wide'}
                            textAlign={'center'} 
                        >{`Author Name: ${el.author?.name !== undefined ? el.author?.name : 'Unknown author' }`}</Text>
                    </Box>
                </GridItem>
                )
            })}
        </Grid>
    </Box>
    );
}

export default Home;
