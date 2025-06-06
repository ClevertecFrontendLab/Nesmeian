import './style.css';

import { VStack } from '@chakra-ui/react';

import { TEST_IDS } from '~/constants/testsIds';
import useBreakpoints from '~/themes/chakraBreakPoints';
import { isDrawerType } from '~/types/utilsTypes';

import BreadCrumb from '../breadCrumb';
import { StyledNav } from '../styledComponents/nav';
import NavMenuFooter from './navMenuFooter';
import NavMenuList from './navMenuList';

export default function NavMenu({ isDrawer, onClose }: isDrawerType) {
    const { isTablet } = useBreakpoints();

    return (
        <VStack
            as='nav'
            data-test-id={TEST_IDS.NAV}
            className='navMenu'
            alignItems='flex-start'
            justify='space-between'
            width={{ lg: '256px', base: 'auto' }}
            boxShadow={!isDrawer ? '1px 3px 0 rgba(0, 0, 0, 0.12)' : 'none'}
            borderRadius='12px'
        >
            <StyledNav display='flex' alignItems={isDrawer ? 'baseline' : 'center'}>
                {isTablet && <BreadCrumb onClose={onClose} />}
                <NavMenuList />
            </StyledNav>
            <NavMenuFooter />
        </VStack>
    );
}
