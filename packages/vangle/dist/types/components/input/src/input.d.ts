import { ExtractPropTypes } from 'vue';
export declare const InputProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (BooleanConstructor | StringConstructor | ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixIcon: {
        type: StringConstructor;
    };
    prefixIcon: {
        type: StringConstructor;
    };
    showPassword: BooleanConstructor;
    autofocus: BooleanConstructor;
};
export type InputTypes = ExtractPropTypes<typeof InputProps>;
