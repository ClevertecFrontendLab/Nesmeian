import { extendTheme } from '@chakra-ui/react';

import { headerTextStyles } from '~/components/Header/textStyles';
import { navMenuTextStyles } from '~/components/navMenu/textStyles';
import { notificationTextStyles } from '~/components/Notification/textStyles';
import sectionTextStyles from '~/components/sections/sectionTextStyles';
import { writeRecipeTextStyle } from '~/components/WriteRecipe/textStyles';
import utilsTextStyles from '~/utils/utilsTextStyles';

const breakpoints = {
    sm: '360px',
    md: '768px',
    lg: '769px',
    xl: '1920px',
};

const theme = extendTheme({
    breakpoints,
    colors: {
        customGreen: {
            500: '#2db100',
            600: '#259900',
            700: '#1c8000',
        },
    },
    fonts: {
        body: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
    components: {
        Text: {
            baseStyle: {
                fontSize: {
                    xl: '17px',
                },
                letterSpacing: {
                    xl: '0.3px',
                },
            },
            variants: {
                ...headerTextStyles,
                ...navMenuTextStyles,
                ...writeRecipeTextStyle,
                ...notificationTextStyles,
                ...sectionTextStyles,
                ...utilsTextStyles,
            },
        },
        Heading: {
            baseStyle: {
                fontFamily: 'inherit',
                letterSpacing: '0.3px',
            },
            sizes: {
                h1: {
                    fontSize: {
                        xl: '48px',
                    },
                },
                h2: {
                    fontSize: {
                        xl: '48px',
                    },
                },
                h3: {
                    fontSize: {
                        xl: '36px',
                    },
                    fontWeight: '400',
                    letterSpacing: '1px',
                },
                h4: {
                    fontSize: {
                        xl: '20px',
                    },
                    letterSpacing: '0.4px',
                },
            },
            defaultProps: {
                size: 'h1',
                as: 'h1',
            },
        },
    },
});

export default theme;
