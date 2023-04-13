/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConnectModalOverridesProps = {
    ConnectModal?: PrimitiveOverrideProps<FlexProps>;
    ConnectModalTitle?: PrimitiveOverrideProps<FlexProps>;
    "Connect Wallet"?: PrimitiveOverrideProps<TextProps>;
    XIcon?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    ConnectModalButton?: PrimitiveOverrideProps<FlexProps>;
    ConnectModalMetamask?: PrimitiveOverrideProps<FlexProps>;
    "metamaskLogo 1"?: PrimitiveOverrideProps<ImageProps>;
    Metamask?: PrimitiveOverrideProps<TextProps>;
    ConnectModalKaikas36802705?: PrimitiveOverrideProps<FlexProps>;
    "kaikasLogo 136802707"?: PrimitiveOverrideProps<ImageProps>;
    Kaikas?: PrimitiveOverrideProps<TextProps>;
    ConnectModalKaikas37532689?: PrimitiveOverrideProps<FlexProps>;
    "kaikasLogo 137532690"?: PrimitiveOverrideProps<ImageProps>;
    WalletConnect?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ConnectModalProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ConnectModalOverridesProps | undefined | null;
}>;
export default function ConnectModal(props: ConnectModalProps): React.ReactElement;
