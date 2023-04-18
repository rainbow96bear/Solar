/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Menu1OverridesProps = {
    Menu1?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    Trade?: PrimitiveOverrideProps<TextProps>;
    "Frame 8"?: PrimitiveOverrideProps<FlexProps>;
    Earn?: PrimitiveOverrideProps<TextProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    Win?: PrimitiveOverrideProps<TextProps>;
    "Frame 12"?: PrimitiveOverrideProps<FlexProps>;
    NFT?: PrimitiveOverrideProps<TextProps>;
    "Frame 14"?: PrimitiveOverrideProps<FlexProps>;
    "\u00B7\u00B7\u00B7"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Menu1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Menu1OverridesProps | undefined | null;
}>;
export default function Menu1(props: Menu1Props): React.ReactElement;
