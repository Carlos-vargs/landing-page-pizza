import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import React, { Fragment } from 'react';
import ImageBg from '../../../resources/images/facts-bg.jpg'
import pizzaIngredients from '../../../resources/images/pizza-ingredients.png'
import InfoContainer from './InfoContainer'


export default function Section3() {
    return (
        <Fragment>
            <Flex
                position="relative"
                bgImg={`url(${ImageBg})`}
                color="white"
                w="full"
                h={['1460px', '1460px', '1460px', '800px', '800px',]}
                bgPosition={['right', 'right', 'right', 'center', 'center']}
                bgSize={['auto', 'auto', 'auto', 'cover', 'cover']}
                bgRepeat={['repeat-y', 'repeat-y', 'repeat-y', 'no-repeat', 'no-repeat',]}
                justifyContent={['flex-end', 'flex-end', 'flex-end', 'flex-end', 'flex-end',]}
                pr={['0px', '0px', '0px', '190px', '190px']}
                py="108px"
                flexDirection={['column', 'column', 'column', 'row', 'row',]}
            >
                <Image
                    position="absolute"
                    left={['50%', '50%', '50%', '200px', '200px']}
                    src={pizzaIngredients}
                    top={['80px', '80px', '80px', '0px', '0px',]}
                    w={['300px', '300px', '300px', 'auto', 'auto']}
                    transform={['translateX(-50%)', 'translateX(-50%)', 'translateX(-50%)', 'translateX(0%)', 'translateX(0%)']}
                />
                <InfoContainer />
            </Flex>
        </Fragment>
    );
}
