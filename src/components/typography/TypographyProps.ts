import { ReactNode } from "react";

type FontSizes = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl';
type FontWeights = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
type FontColors = 'red' | 'black' | 'green' | 'white';

export type TypographyProps = {
    children: ReactNode | string;
} & {
        [Key in FontSizes]?: boolean;
    } & {
        [Key in FontWeights]?: boolean;
    } & {
        [Key in FontColors]?: boolean;
    };