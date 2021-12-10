import { ChangeEventHandler, FormEventHandler } from "react";
import { ButtonProps } from "../../../components/ActionButton/ActionButton";
import { InputProps } from "../../../components/Input/Input";
import { TextLinkProps } from "../../../components/TextLink/TextLink";

export interface SignInUpLayoutProps {
    message?: {
        type: string;
        text: string;
    };
    onChange: ChangeEventHandler<HTMLInputElement>;
    onSubmit: FormEventHandler;
    inputs: InputProps[];
    button: ButtonProps;
    textLink: TextLinkProps;
}