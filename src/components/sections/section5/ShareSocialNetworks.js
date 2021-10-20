import React, { Fragment } from 'react';
import { Flex, Link } from '@chakra-ui/layout';

export default function ShareSocialNetworks({ data, gap }) {

    return (
        <Fragment>
            <Flex gridGap={gap} color="white" >
                {
                    data.map(e =>
                        <Flex
                            key={e.id}
                            bg="linear-gradient(30deg, #ff8200 20%, #ff2600 80%)"
                            borderRadius="lg"
                            w="44px" h="44px"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Link
                                href={e.url}
                                pl={e.pl}
                                pt={e.pt}
                                isExternal
                                display="flex"
                                w="20px"
                                h="20px"
                                title={e.socialNetwork}
                            >
                                {e.iconSvg}
                            </Link>
                        </Flex>
                    )
                }
            </Flex>
        </Fragment>
    );
}
