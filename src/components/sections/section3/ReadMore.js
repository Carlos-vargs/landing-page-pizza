import { Center, Flex, Heading, Text } from '@chakra-ui/layout';
import ArrowRightIcon from './ArrowRightIcon';

export default function ReadMore() {
    return (
        <Flex cursor="pointer" userSelect="none" mx={['auto','auto','auto','0px','0px']} mt={['26px','26px','26px','0px','0px']} >
            <Center gridGap="4px" transition="all .3s ease" _hover={{ gap: '16px' }}>
                <Heading fontSize="16px" >
                    Read More
                </Heading>
                <Text as="span" w="16px">
                    <ArrowRightIcon />
                </Text>
            </Center>
        </Flex>
    );
}