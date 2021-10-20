import { Flex } from '@chakra-ui/layout';
import React, { Fragment } from 'react';
import ScoreReviews from './ScoreReviews';

export default function StatisticsContainer() {

    const data = [
        {
            title: 'Chef',
            score: 56,
        },
        {
            title: 'Reviews',
            score: 500,
        },
    ]

    return (
        <Fragment>
            <Flex gridGap="30px" justifyContent={['center','center','center','flex-start','flex-start',]} mt="20px" flexWrap="wrap" mx={['auto','auto','auto','0px','0px',]} >
                {
                    data.map(e => <ScoreReviews key={Math.random()*2} title={e.title} score={e.score} />)
                }
            </Flex>
        </Fragment>
    );
}