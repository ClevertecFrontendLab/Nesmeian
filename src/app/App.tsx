import './style.css';

import { HStack, Stack } from '@chakra-ui/react';

import Header from '~/components/Header';
import Main from '~/components/Main';
import NavMenu from '~/components/navMenu';
import Sidebar from '~/components/SideBar';
import useBreakpoints from '~/themes/chakraBreakPoints';

function App() {
    const { isTablet } = useBreakpoints();
    return (
        <Stack gap='0'>
            <Header />
            <HStack className='app' justifyContent='space-between' alignItems='flex-start'>
                {!isTablet && <NavMenu />}
                <Main />
                {!isTablet && <Sidebar />}
            </HStack>
        </Stack>
    );
}

export default App;
