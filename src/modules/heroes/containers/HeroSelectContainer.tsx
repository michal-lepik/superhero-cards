import React from 'react';
import { connect } from 'react-redux';

import { getHeroAsync } from '../actions';

import { HeroesCards } from 'modules/heroes/components/HeroesCards';
import { HeroSearch } from 'modules/heroes/components/HeroSearch';

type Props = typeof mapDispatchToProps;

const HeroSelect: React.FC<Props> = ({ getHeroRequestAction }) => {
    React.useEffect(() => {
        getHeroRequestAction(1);
    }, [getHeroRequestAction]);

    return (
        <main>
            <HeroSearch />
            <HeroesCards />
        </main>
    );
};

const mapDispatchToProps = {
    getHeroRequestAction: getHeroAsync.request,
};

export const HeroSelectContainer = connect(null, mapDispatchToProps)(HeroSelect);
