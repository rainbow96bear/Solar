/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChainChangeOverridesProps = {
    ChainChange?: PrimitiveOverrideProps<FlexProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ChainChangeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ChainChangeOverridesProps | undefined | null;
}>;
export default function ChainChange(props: ChainChangeProps): React.ReactElement;
