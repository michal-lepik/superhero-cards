import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createSelector } from 'reselect';

import { getHeroAsync } from '../actions';
import { getIsFetching, getSelectedHero } from '../selectors';

import { HeroDetails as HeroDetailsComponent } from 'modules/heroes/components/HeroDetails';
import { Loader } from 'common/components/Loader';
import { HeroResponse } from '../models/Hero';

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export const HeroDetails: React.FC<Props> = ({ isFetching, selectedHero, getHeroRequestAction }) => {
    const { heroId } = useParams<{ heroId: string }>();

    React.useEffect(() => {
        getHeroRequestAction(parseInt(heroId, 10));
    }, [getHeroRequestAction, heroId]);

    if (isFetching) {
        return <Loader />;
    }

    return selectedHero?.response === HeroResponse.Success ? (
        <HeroDetailsComponent hero={selectedHero} />
    ) : (
        <main>
            <h2>{"Hero with selected id doesn't exist"}</h2>
        </main>
    );
};

const mapStateToProps = createSelector(getIsFetching, getSelectedHero, (isFetching, selectedHero) => ({
    isFetching,
    selectedHero,
}));

const mapDispatchToProps = {
    getHeroRequestAction: getHeroAsync.request,
};

export const HeroDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(HeroDetails);
