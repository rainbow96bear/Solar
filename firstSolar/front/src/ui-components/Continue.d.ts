/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContinueOverridesProps = {
    Continue?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<IconProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "odysee 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Explore?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ContinueProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ContinueOverridesProps | undefined | null;
}>;
export default function Continue(props: ContinueProps): React.ReactElement;
