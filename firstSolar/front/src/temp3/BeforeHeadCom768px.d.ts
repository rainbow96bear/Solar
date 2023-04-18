/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, SearchFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BeforeHeadCom768pxOverridesProps = {
    BeforeHeadCom768px?: PrimitiveOverrideProps<FlexProps>;
    Menu?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4639443730"?: PrimitiveOverrideProps<FlexProps>;
    "unsplash:PfBvNnGIhmQ39443731"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 45"?: PrimitiveOverrideProps<FlexProps>;
    "unsplash:PfBvNnGIhmQ39433251"?: PrimitiveOverrideProps<ImageProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    "Frame 4639443728"?: PrimitiveOverrideProps<FlexProps>;
    "unsplash:PfBvNnGIhmQ39443729"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type BeforeHeadCom768pxProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BeforeHeadCom768pxOverridesProps | undefined | null;
}>;
export default function BeforeHeadCom768px(props: BeforeHeadCom768pxProps): React.ReactElement;
