/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, SearchFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BeforeHeadCom1440pxOverridesProps = {
    BeforeHeadCom1440px?: PrimitiveOverrideProps<FlexProps>;
    Menu39423087?: PrimitiveOverrideProps<FlexProps>;
    "unsplash:PfBvNnGIhmQ"?: PrimitiveOverrideProps<ImageProps>;
    Menu39423082?: PrimitiveOverrideProps<TextProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Connect39423085?: PrimitiveOverrideProps<FlexProps>;
    Connect39423084?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BeforeHeadCom1440pxProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BeforeHeadCom1440pxOverridesProps | undefined | null;
}>;
export default function BeforeHeadCom1440px(props: BeforeHeadCom1440pxProps): React.ReactElement;
