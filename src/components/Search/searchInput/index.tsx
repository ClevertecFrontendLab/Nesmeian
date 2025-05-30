import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TEST_IDS } from '~/constants/testsIds';
import { ApplicationState } from '~/store/configure-store';
import { setAllowSearch, setSearchState } from '~/store/searchSlice';
export default function InputSearch() {
    const dispatch = useDispatch();
    const searchState = useSelector((state: ApplicationState) => state.searchState.search);
    const searchFindElems = useSelector((state: ApplicationState) => state.searchState.findElems);
    const allergenAllow = useSelector((state: ApplicationState) => state.allergensSlice.isActive);
    const [search, setSearch] = useState(searchState);
    const [allowSearchInput, setAllowSearchInput] = useState(false);
    const handleSearch = () => {
        dispatch(setAllowSearch(true));
        dispatch(setSearchState(search.trim()));
    };

    const blockSearch = () => {
        dispatch(setAllowSearch(false));
        dispatch(setSearchState(''));
        setSearch('');
    };
    useEffect(() => {
        allergenAllow ? setAllowSearchInput(true) : setAllowSearchInput(false);
    }, [allergenAllow]);
    return (
        <InputGroup
            width={{ sm: '284px', md: '404px', lg: '458px' }}
            height={{ sm: '32px', lg: '48px' }}
        >
            <Input
                placeholder='Название или ингредиент...'
                data-test-id={TEST_IDS.SEARCH_INPUT}
                _placeholder={{ color: '#134b00', fontSize: { sm: '15px', lg: '19px' } }}
                border='1px solid'
                borderColor={
                    searchFindElems === 'find'
                        ? '#2db100'
                        : searchFindElems === 'common'
                          ? 'rgba(0, 0, 0, 0.48)'
                          : 'red'
                }
                focusBorderColor={
                    searchFindElems === 'find'
                        ? '#2db100'
                        : searchFindElems === 'not found'
                          ? '#b11200'
                          : '#ded7d5'
                }
                padding='6px'
                height='100%'
                fontSize='16px'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    if (e.target.value.length >= 3) setAllowSearchInput(true);
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <InputRightElement boxSize={{ sm: '32px', lg: '48px' }} gap='10px' pr='20px'>
                {allowSearchInput && (
                    <CloseIcon
                        boxSize={{ sm: '10px', lg: '10px' }}
                        color='blue'
                        onClick={blockSearch}
                    />
                )}
                <SearchIcon
                    data-test-id={TEST_IDS.SEARCH_BTN}
                    boxSize={{ sm: '14px', lg: '18px' }}
                    color={allowSearchInput ? 'gray.600' : 'gray.300'}
                    pointerEvents={allowSearchInput ? 'auto' : 'none'}
                    onClick={handleSearch}
                />
            </InputRightElement>
        </InputGroup>
    );
}
