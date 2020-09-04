import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { searchHeroesAsync } from '../actions';
import { getIsSearching, getSearchedHeroes } from '../selectors';

import { HeroesCards } from 'modules/heroes/components/HeroesCards';
import { HeroSearch } from 'modules/heroes/components/HeroSearch';

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const HeroSelect: React.FC<Props> = ({ isSearching, searchedHeroes, searchHeroesRequestAction }) => (
    <main>
        <HeroSearch
            isSearching={isSearching}
            searchHeroes={searchHeroesRequestAction}
            searchedHeroes={searchedHeroes}
        />
        <HeroesCards />
    </main>
);

const mapStateToProps = createSelector(
    getIsSearching,
    getSearchedHeroes,
    (isSearching, searchedHeroes) => ({ isSearching, searchedHeroes }),
);

const mapDispatchToProps = {
    searchHeroesRequestAction: searchHeroesAsync.request,
};

export const HeroSelectContainer = connect(mapStateToProps, mapDispatchToProps)(HeroSelect);
