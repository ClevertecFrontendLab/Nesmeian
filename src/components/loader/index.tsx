import { Box, Center, Spinner } from '@chakra-ui/react';

import { TEST_IDS } from '~/constants/testsIds';

export const Loader = () => (
    <Center
        h='100vh'
        w='100vw'
        bg='rgba(0, 0, 0, 0.7)'
        position='fixed'
        top={0}
        left={0}
        zIndex={9999}
        data-test-id={TEST_IDS.APP_LOADER}
    >
        <Box
            h={{ lg: '206px', base: '136px' }}
            w={{ lg: '206px', base: '136px' }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            background='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
        >
            <Spinner size='xl' thickness='4px' color='black' />
        </Box>
    </Center>
);
