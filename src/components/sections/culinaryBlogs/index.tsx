import './style.css';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Grid, Heading, HStack, Text, VStack } from '@chakra-ui/react';

import CardAvatar from '../../../components/CardAvatar';
import DB from '../../../data/db.json';
import useBreakpoints from '../../../themes/chakraBreakPoints';
export default function CulinaryBlogs() {
    const { isTablet } = useBreakpoints();
    return (
        <VStack as='section' className='culinary-blogs' alignSelf='baseline'>
            <HStack width='100%' justifyContent='space-between'>
                <Heading as='h3' size='h3' className='culinary-blogs__title'>
                    Кулинарные блоги
                </Heading>
                {!isTablet && (
                    <Button
                        variant='plain'
                        className='culinary-blogs__btn-all-authors'
                        size='lg'
                        rightIcon={<ArrowForwardIcon />}
                    >
                        Все авторы
                    </Button>
                )}
            </HStack>
            <Grid
                gap={{ xl: '16px', lg: '15px', md: '12px', sm: '14px' }}
                templateColumns='repeat(auto-fit, minmax(226px, 1fr))'
                className='culinary-blogs__list'
                width='100%'
            >
                {DB.culinaryBlogData.map(({ id, img, user, email, description }) => (
                    <VStack
                        key={id}
                        _hover={{
                            boxShadow:
                                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
                        }}
                        className='culinary-blogs__item'
                        alignItems='flex-start'
                        gap={{ xl: '24px', sm: '13px' }}
                    >
                        <CardAvatar userData={{ user, email, img }} />
                        <Text
                            noOfLines={3}
                            variant='culinaryTextStyles'
                            className='culinary-blogs__item-description'
                        >
                            {description}
                        </Text>
                    </VStack>
                ))}
            </Grid>
            {isTablet && (
                <Button
                    variant='plain'
                    className='culinary-blogs__btn-all-authors'
                    size='lg'
                    rightIcon={<ArrowForwardIcon />}
                >
                    Все авторы
                </Button>
            )}
        </VStack>
    );
}
