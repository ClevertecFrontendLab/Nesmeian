import { HStack, Image, Text } from '@chakra-ui/react';

import TagsProps from '~/types/utilsTypes';

import tagsKeys from './tagsImgData';

export default function AddTags({ tag, withText, color, size }: TagsProps) {
    return (
        <HStack background={color} padding='1px 9px' borderRadius='4px'>
            <Image boxSize={size} src={tagsKeys[tag]} alt={tag} />
            {withText && <Text variant='addTag'>{tag}</Text>}
        </HStack>
    );
}
