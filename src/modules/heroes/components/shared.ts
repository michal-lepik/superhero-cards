import styled from 'styled-components';

import { mediaQueries } from 'config/variables';

export const Powerstats = styled.div`
    display: grid;
    grid-gap: 1rem;
    margin: 2rem 0;

    ${mediaQueries.sm} {
        grid-template-columns: 1fr 1fr;
    }

    ${mediaQueries.md} {
        grid-template-columns: 1fr;
    }

    ${mediaQueries.lg} {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Powerstat = styled.p`
    margin: 0;
`;
