import React from 'react';
import 'polyfill-object.fromentries';
export interface FormDataObject {
    [key: string]: FormDataEntryValue;
}
export declare type HandleForm = (formData: FormDataObject, formElement: HTMLFormElement) => void | Promise<void>;
interface ReactFormProps extends Omit<React.HTMLProps<HTMLFormElement>, 'onSubmit' | 'onChange'> {
}
interface FormProps extends ReactFormProps {
    onSubmit?: HandleForm;
    onChange?: HandleForm;
}
declare const Form: (props: FormProps) => JSX.Element;
export default Form;
