import './style.css';

import { VStack } from '@chakra-ui/react';

import NotificationList from '../Notification';
import WriteRecipeButton from '../WriteRecipe';

export default function Sidebar() {
    return (
        <VStack as='aside' className='sidebar' justify='space-between' alignItems='center'>
            <NotificationList direction='vertical' />
            <WriteRecipeButton />
        </VStack>
    );
}
