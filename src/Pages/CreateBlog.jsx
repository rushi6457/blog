import { Center, Input, Textarea, VStack } from '@chakra-ui/react';
import React from 'react';
import styles from "../Styles/CreateBlog.module.css";
import useScrollbarSize from 'react-scrollbar-size';

const CreateBlog = () => {
     const { height, width } = useScrollbarSize();
     console.log(height,width);
    return (
    <Center
        w='100vw'
        h='100vh'
    >
        <VStack >
            <Input
                placeholder='Blog Title'
                border={'none'}
                size={'xl'}
                variant='flushed'
                fontSize={'4rem'}
            ></Input>
            <Textarea
                className={styles.blogContent}
                // overflowY={'sroll'}
                size={'xl'}
                variant='flushed'
                fontSize={'2rem'}
                placeholder='Blog Content'
            ></Textarea>
        </VStack>
    </Center>
    );
}

export default CreateBlog;
