/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, SearchFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BeforeHeadCom320pxOverridesProps = {
    BeforeHeadCom320px?: PrimitiveOverrideProps<ViewProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Menu?: PrimitiveOverrideProps<FlexProps>;
    "Frame 50"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 48"?: PrimitiveOverrideProps<FlexProps>;
    "unsplash:PfBvNnGIhmQ39443727"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 49"?: PrimitiveOverrideProps<FlexProps>;
    "unsplash:PfBvNnGIhmQ39472725"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 47"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type BeforeHeadCom320pxProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BeforeHeadCom320pxOverridesProps | undefined | null;
}>;
export default function BeforeHeadCom320px(props: BeforeHeadCom320pxProps): React.ReactElement;
