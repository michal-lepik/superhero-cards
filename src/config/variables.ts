const mediaQ = (size: number) => `@media only screen and (min-width: ${size}px)`;

export const colors = {
    primary: '#242A2E',
    secondary: '#FAFBFC',
};

export const fontSizes = {
    normal: '1rem',
    big: '1.2rem',
};

export const mediaQueries = {
    xs: mediaQ(320),
    sm: mediaQ(576),
    md: mediaQ(850),
    lg: mediaQ(992),
    xl: mediaQ(1200),
    xxl: mediaQ(1440),
};
