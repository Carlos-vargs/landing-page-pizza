import { Image } from '@chakra-ui/image';
import { Center, Heading, Text } from '@chakra-ui/layout';
import React, { Fragment } from 'react';
import ShareSocialNetworks from './ShareSocialNetworks';
import pizza from '../../../resources/images/share-pizza.png'
import Facebook from '../../social_networks/Facebook';
import Github from '../../social_networks/Github';
import Instagram from '../../social_networks/Instagram';
import Twitter from '../../social_networks/Twitter';

export default function AboutSharePizza() {

    const socialNetworks = [
        {
            id: '3f15021c-9da5-4e2f-8f96-dd814f0f563b',
            socialNetwork: 'Facebook',
            iconSvg: <Facebook />,
            pl: '6px'
        },
        {
            id: '8b459f62-2d30-49c7-b52b-748fe1c9519c',
            socialNetwork: 'Instagram',
            iconSvg: <Instagram />,
            url: 'https://www.instagram.com/nc_cvargas',
        },
        {
            id: '2f625186-f5a9-4a9c-ad5a-8553d351ca61',
            socialNetwork: 'Github',
            iconSvg: <Github />,
            url: 'https://github.com/Carlos-vargs',
        },
        {
            id: 'c606eb56-535d-4a55-8c2d-1b987a04a54b',
            socialNetwork: 'Twitter',
            iconSvg: <Twitter />,
            url: 'https://twitter.com/nc_cvargas',
            pt: "2px"
        },
    ]


    const userScreen = window.screen.width
    const nonAnimatedScreen = 1280

    return (
        <Fragment>
            <Heading
                whiteSpace="pre-wrap"
                fontFamily="'Montserrat', sans-serif !important"
                textAlign="center"
                fontWeight="600 !important"
                fontSize="46px"
            >
                Share your Favorite <Text as="span" fontSize="46px" fontFamily="'Montserrat', sans-serif !important" display="inline" color="#ff2600" fontWeight="600 !important">Pizza</Text> With Your <br />
                Friends
            </Heading>
            <Text px="10px" >Do not wait any longer, share your favorite pizza.</Text>
            <Center>
                <ShareSocialNetworks data={socialNetworks} gap='20px' />
            </Center>
            <Image
                src={pizza}
                mx="auto"
                objectFit="contain"
                position="relative"
                maxW='1170px'
                w={['100%', '100%', '80%', '80%', '80%']}
                
                data-aos={userScreen > nonAnimatedScreen ? 'fade-up' : 'none'}
                data-aos-delay={userScreen > nonAnimatedScreen ? '50' : 'none'}
                data-aos-duration={userScreen > nonAnimatedScreen ? '1000' : 'none'}
                data-aos-easing={userScreen > nonAnimatedScreen ? 'ease-in-out' : 'none'}

            />
        </Fragment>
    );
}
