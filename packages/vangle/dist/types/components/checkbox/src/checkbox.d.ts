import { InjectionKey, ExtractPropTypes, PropType } from 'vue';
export type CheckboxValueType = string | number | boolean;
export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[];
export declare const CheckboxProps: {
    modelValue: {
        type: PropType<CheckboxValueType>;
        default: undefined;
    };
    label: {
        type: (BooleanConstructor | StringConstructor | ObjectConstructor | NumberConstructor)[];
    };
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: undefined;
    };
    border: BooleanConstructor;
    indeterminate: BooleanConstructor;
};
export declare const CheckboxGroupProps: {
    modelValue: {
        type: PropType<CheckboxGroupValueType>;
    };
    disabled: BooleanConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    group: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const checkboxGroupContextKey: InjectionKey<ExtractPropTypes<typeof CheckboxGroupProps>>;
