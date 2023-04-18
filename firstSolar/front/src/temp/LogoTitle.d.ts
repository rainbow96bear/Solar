/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogoTitleOverridesProps = {
    LogoTitle?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "logo_new 1"?: PrimitiveOverrideProps<ImageProps>;
    Solar?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LogoTitleProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LogoTitleOverridesProps | undefined | null;
}>;
export default function LogoTitle(props: LogoTitleProps): React.ReactElement;
