/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BeforeHeadCom1024pxOverridesProps = {
    BeforeHeadCom1024px?: PrimitiveOverrideProps<ViewProps>;
    Connect39912872?: PrimitiveOverrideProps<FlexProps>;
    Connect39912873?: PrimitiveOverrideProps<TextProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Menu39912868?: PrimitiveOverrideProps<FlexProps>;
    "unsplash:PfBvNnGIhmQ"?: PrimitiveOverrideProps<ImageProps>;
    Menu39912870?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BeforeHeadCom1024pxProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BeforeHeadCom1024pxOverridesProps | undefined | null;
}>;
export default function BeforeHeadCom1024px(props: BeforeHeadCom1024pxProps): React.ReactElement;
