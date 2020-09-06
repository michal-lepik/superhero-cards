import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as actions from '../actions';
import { getIsSearching, getSearchedHeroes } from '../selectors';

import { HeroesCards } from 'modules/heroes/components/HeroesCards';
import { HeroSearch } from 'modules/heroes/components/HeroSearch';

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const HeroSelect: React.FC<Props> = ({
    isSearching,
    searchedHeroes,
    searchHeroesRequestAction,
    startRandomHeroesAction,
}) => {
    React.useEffect(() => {
        startRandomHeroesAction();
    }, [startRandomHeroesAction]);

    return (
        <main>
            <HeroSearch
                isSearching={isSearching}
                searchHeroes={searchHeroesRequestAction}
                searchedHeroes={searchedHeroes}
            />
            <HeroesCards />
        </main>
    );
};

const mapStateToProps = createSelector(
    getIsSearching,
    getSearchedHeroes,
    (isSearching, searchedHeroes) => ({ isSearching, searchedHeroes }),
);

const mapDispatchToProps = {
    searchHeroesRequestAction: actions.searchHeroesAsync.request,
    startRandomHeroesAction: actions.startRandomHeroes,
};

export const HeroSelectContainer = connect(mapStateToProps, mapDispatchToProps)(HeroSelect);
