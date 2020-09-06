import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as actions from '../actions';
import { getIsSearching, getSearchedHeroes, getRandomHeroes } from '../selectors';

import { HeroesCards } from 'modules/heroes/components/HeroesCards';
import { HeroSearch } from 'modules/heroes/components/HeroSearch';

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const HeroSelect: React.FC<Props> = ({
    isSearching,
    searchedHeroes,
    randomHeroes,
    searchHeroesRequestAction,
    startRandomHeroesAction,
    stopRandomHeroesAction,
}) => {
    React.useEffect(() => {
        startRandomHeroesAction();

        return () => {
            stopRandomHeroesAction();
        };
    }, [startRandomHeroesAction, stopRandomHeroesAction]);

    return (
        <main>
            <HeroSearch
                isSearching={isSearching}
                searchHeroes={searchHeroesRequestAction}
                searchedHeroes={searchedHeroes}
            />
            <HeroesCards heroes={randomHeroes} />
        </main>
    );
};

const mapStateToProps = createSelector(
    getIsSearching,
    getSearchedHeroes,
    getRandomHeroes,
    (isSearching, searchedHeroes, randomHeroes) => ({ isSearching, searchedHeroes, randomHeroes }),
);

const mapDispatchToProps = {
    searchHeroesRequestAction: actions.searchHeroesAsync.request,
    startRandomHeroesAction: actions.startRandomHeroes,
    stopRandomHeroesAction: actions.stopRandomHeroes,
};

export const HeroSelectContainer = connect(mapStateToProps, mapDispatchToProps)(HeroSelect);
