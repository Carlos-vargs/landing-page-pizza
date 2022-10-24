import { Image } from '@chakra-ui/image';
import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import pizzaImage from '../../../resources/images/pizza.png'
import CardServiceS4 from './CardServiceS4';
import MoneyIcon from './MoneyIcon'
import ShoppingCarIcon from './ShoppingCarIcon'
import StaffIcon from './StaffIcon'
import MessageIcon from './MessageIcon'

export default function Section4() {

    const data = [
        {
            id: '0292640f-29ee-472e-b89d-1890814ce352',
            title: 'The best price',
            iconSvg: <MoneyIcon />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmo',
        },
        {
            id: 'ad6f2bf4-878f-4bae-b8c0-cb1144829c5a',
            title: 'Fast shopping',
            iconSvg: <ShoppingCarIcon />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmo',
        },
        {
            id: '66a20860-2b34-40e6-8b17-b48b50191524',
            title: 'Qualified Personnel',
            iconSvg: <StaffIcon />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmo',
        },
        {
            id: 'a56e5ef9-d8da-40aa-a535-c4e2911ad372',
            title: 'Customer Support',
            iconSvg: <MessageIcon />,
            description: 'Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmo',
        },
    ]


    const userScreen = window.screen.width
    const nonAnimatedScreen = 1280

    return (
            <Flex
                gridGap="40px"
                w="full"
                py="100px"
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                pl={['0px', '0px', '0px', '110px', '110px']}
                justifyContent={['center', 'center', 'center', 'space-around', 'space-around']}
            >
                <Flex flexDirection="column" gridGap="12px" textAlign={['center', 'center', 'center', 'left', 'left',]} >
                    <Heading fontSize="46px" fontFamily="'Montserrat', sans-serif !important">
                        The pizzas with the best price
                    </Heading>
                    <Text lineHeight="30px" px={['10px', '10px', '10px', '0px', '0px',]} maxW="548px" >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                    </Text>

                    <SimpleGrid maxW="548px" columns={[1, 1, 1, 1, 2]} mt="38px" gridGap="26px" mx={['auto', 'auto', 'auto', '0px', '0px',]} >
                        {
                            data.map(e =>
                                <CardServiceS4
                                    key={e.id}
                                    title={e.title}
                                    iconSvg={e.iconSvg}
                                    description={e.description}
                                />
                            )
                        }
                    </SimpleGrid>

                </Flex>
                <Image src={pizzaImage} objectFit="contain"

                    data-aos={userScreen > nonAnimatedScreen ? 'fade-right' : 'none'}
                    data-aos-delay={userScreen > nonAnimatedScreen ? '50' : 'none'}
                    data-aos-duration={userScreen > nonAnimatedScreen ? '1000' : 'none'}
                    data-aos-easing={userScreen > nonAnimatedScreen ? 'ease-in-out' : 'none'}

                />
            </Flex>
    );
}
