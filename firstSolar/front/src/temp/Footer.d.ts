/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
  Footer?: PrimitiveOverrideProps<FlexProps>;
  "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
  Developers?: PrimitiveOverrideProps<TextProps>;
  Github?: PrimitiveOverrideProps<TextProps>;
  Trello?: PrimitiveOverrideProps<TextProps>;
  Notion?: PrimitiveOverrideProps<TextProps>;
  "Google Drive"?: PrimitiveOverrideProps<TextProps>;
  "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
  "logo_new 1"?: PrimitiveOverrideProps<ImageProps>;
  Solar?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    overrides?: FooterOverridesProps | undefined | null;
  }
>;
export default function Footer(props: FooterProps): React.ReactElement;
