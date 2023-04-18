/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginAccountOverridesProps = {
    LoginAccount?: PrimitiveOverrideProps<FlexProps>;
    "Frame 15"?: PrimitiveOverrideProps<FlexProps>;
    account?: PrimitiveOverrideProps<TextProps>;
    dropdownIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type LoginAccountProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LoginAccountOverridesProps | undefined | null;
}>;
export default function LoginAccount(props: LoginAccountProps): React.ReactElement;
