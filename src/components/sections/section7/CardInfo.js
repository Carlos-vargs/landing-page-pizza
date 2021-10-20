import { Box, Center, Flex } from '@chakra-ui/layout';
import React from 'react';

export default function CardInfo({icon, description}) {
    return (
        <Flex gridGap="20px"  >
            <Box w="20px" color="#ff2600">
                {icon}
            </Box>
            <Center>
                {description}
            </Center>
        </Flex>
    );
}