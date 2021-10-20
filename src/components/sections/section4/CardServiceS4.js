import { Center, Flex, Heading, Text } from '@chakra-ui/layout';
import React, { Fragment } from 'react';

export default function CardServiceS4({ title, iconSvg, description }) {
    return (
        <Fragment>
            <Flex flexDirection={['column', 'column', 'column', 'row', 'row',]} gridGap="20px" w="274px">
                <Flex
                    justifyContent="center"
                    color="white"
                    bg="linear-gradient(30deg, #ff8200 20%, #ff2600 80%)"
                    w="50px" h="50px"
                    borderRadius="xl"
                    mx="auto"
                >
                    <Center w="50px" h="50px" p="10px">
                        {iconSvg}
                    </Center>
                </Flex>
                <Flex flexDirection="column" gridGap="20px">
                    <Heading fontSize="22px" >
                        {title}
                    </Heading>
                    <Text lineHeight="22px" fontSize="14px" >
                        {description}
                    </Text>
                </Flex>
            </Flex>
        </Fragment>
    );
}
