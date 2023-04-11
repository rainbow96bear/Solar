/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChainIconOverridesProps = {
    ChainIcon?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ChainIconProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ChainIconOverridesProps | undefined | null;
}>;
export default function ChainIcon(props: ChainIconProps): React.ReactElement;
