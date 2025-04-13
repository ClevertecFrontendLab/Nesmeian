import { Heading } from '@chakra-ui/react';

import { CategoriesProps, DBStructure } from '~/types/routesTypes';

import DB from '../../data/db.json';
import BigCardsList from '../bigCardsList';
import Search from '../Search';
import BottomSection from '../sections/vegancuisine';
import GreenButton from '../styledComponents/greenButton';
import MainStyled from '../styledComponents/Main';
export default function Categories({ category }: CategoriesProps) {
    const db = DB as unknown as DBStructure;
    const dbItem = db[category];
    const bottomSectionData = category === 'juiciest' ? 'veganCuisine' : 'desert';
    return (
        <MainStyled as='main'>
            <Heading as='h1' size='h1' pt={{ base: 0, md: 4 }} pb={{ base: '10px', md: 5 }}>
                {dbItem?.title}
            </Heading>
            <Search />
            <BigCardsList data={dbItem} maxElems={8}></BigCardsList>
            <GreenButton text='Загрузить еще' />
            <BottomSection data={DB[bottomSectionData]} />
        </MainStyled>
    );
}
