import React, { Fragment } from 'react';
import LogoImage from '../resources/images/don-pizzon-logo.png'
import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';

export default function Logo({ wSize, hSize, mtSize }) {

    return (
        <Fragment>
            <Box w={wSize} h={hSize} mt={mtSize} objectFit="cover" mx="auto" >
                <Image src={LogoImage} />
            </Box>
        </Fragment>
    );
}
