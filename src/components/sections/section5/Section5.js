import { Flex } from '@chakra-ui/layout';
import BgVideo from '../../../resources/images/video-bg.png'
import ButtonPlay from './ButtonPlay';
import BookOnline from './BookOnline';
import AboutSharePizza from './AboutSharePizza';

export default function Section5() {

    const phoneNumber = '01 234 567 785 542'

    return (
        <>
            <Flex justifyContent="center" gridGap="40px" flexDirection="column" textAlign="center">
                <AboutSharePizza />
            </Flex>
            <Flex
                mx={['0px', '0px', '0px', '90px', '90px',]}
                pl={['0px', '0px', '0px', '48px', '48px',]}
                flexDirection={['column', 'column', 'row', 'row', 'row']}
                justifyContent={['flex-start', 'flex-start', 'space-between', 'space-between', 'space-between',]}
                position="relative"
                bgImg={`url(${BgVideo})`}
                color="white"
                h="510px"
                borderRadius={['none', 'none', 'none', '2xl', '2xl',]}
                bgRepeat="no-repeat"
                bgPosition={['top', 'top', 'top', 'center', 'center']}
                bgSize={['auto', 'auto', 'auto', 'cover', 'cover']}

            >
                <BookOnline phoneNumber={phoneNumber} />
                <ButtonPlay />
            </Flex>
        </>
    );
}
