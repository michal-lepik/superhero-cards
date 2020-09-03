import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from 'config/variables';

const Wrapper = styled.header`
    padding: 1rem 1.5rem;
    background-color: ${colors.primary};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.secondary};
`;

const Text = styled.h1`
    max-width: 1600px;
    margin: 1rem auto;
    padding-left: 0.5rem;
`;

export const Header = () => (
    <Wrapper>
        <StyledLink to="/">
            <Text>Superhero Cards</Text>
        </StyledLink>
    </Wrapper>
);
