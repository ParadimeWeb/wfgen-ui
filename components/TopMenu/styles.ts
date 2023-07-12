"use client"
import { makeStyles, tokens, menuItemClassNames } from "@fluentui/react-components";
import { iconFilledClassName, iconRegularClassName } from '@fluentui/react-icons';

export const useMenuStyles = makeStyles({
    selected: {
        backgroundColor: tokens.colorNeutralBackground1Hover,
        color: tokens.colorNeutralForeground2Hover,
        [`& .${iconFilledClassName}`]: {
            display: 'inline'
        },
        [`& .${iconRegularClassName}`]: {
            display: 'none'
        },
        [`& .${menuItemClassNames.icon}`]: {
            color: tokens.colorNeutralForeground2BrandSelected
        }
    }
});