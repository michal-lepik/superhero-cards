import React from 'react';
import styled from 'styled-components';

import { colors, fontSizes } from 'config/variables';

import { SearchedHeroes } from '../models/SearchedHeroes';
import { Loader } from 'common/components/Loader';
import { ResultsWrapper } from './ResultsWrapper';

import magnifyingGlassIcon from 'assets/icons/magnifyingGlass.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto 4rem;
    max-width: 16rem;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SearchBar = styled.input`
    padding: 0.5rem 0.2rem;
    font-size: ${fontSizes.big};
    border: none;
    border-bottom: 1px solid ${colors.primary};
`;

const Icon = styled.img`
    margin-left: 0.7rem;
    width: 2rem;
    height: 2rem;
`;

interface Props {
    isSearching: boolean;
    searchedHeroes?: SearchedHeroes;
    searchHeroes: (name: string) => void;
}

export const HeroSearch: React.FC<Props> = ({ isSearching, searchedHeroes, searchHeroes }) => {
    const [searchValue, setSearchValue] = React.useState('');

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchValue(value);

        if (value) {
            searchHeroes(value);
        }
    };

    return (
        <Wrapper>
            <InputWrapper>
                <SearchBar placeholder="Search..." value={searchValue} onChange={onSearchChange} />
                <Icon src={magnifyingGlassIcon} alt="" aria-hidden="true" />
            </InputWrapper>

            {isSearching ? (
                <Loader small />
            ) : searchedHeroes && searchValue ? (
                <ResultsWrapper searchedHeroes={searchedHeroes} />
            ) : null}
        </Wrapper>
    );
};
