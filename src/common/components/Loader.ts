import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface Props {
    small?: boolean;
}

export const Loader = styled.div`
    margin: auto;
    margin-top: ${(props: Props) => (props.small ? '1rem' : '10rem')};
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: ${(props: Props) => (props.small ? '30px' : '100px')};
    height: ${(props: Props) => (props.small ? '30px' : '100px')};
    border-radius: 50%;
`;
