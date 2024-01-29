import { InjectionKey, PropType, ComputedRef } from 'vue';
export type SelectValueType = string | number | boolean | Object | undefined;
export declare const SelectProps: {
    modelValue: {
        type: PropType<SelectValueType>;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
    };
    clearable: BooleanConstructor;
    filterable: {
        type: BooleanConstructor;
    };
    disabled: BooleanConstructor;
};
export declare const OptionProps: {
    label: {
        type: (StringConstructor | NumberConstructor)[];
    };
    value: {
        type: PropType<SelectValueType>;
    };
    disabled: BooleanConstructor;
};
export type SelectContextType = {
    selectValue: ComputedRef<SelectValueType>;
    filterable: ComputedRef<boolean>;
    onChange: (value: SelectValueType) => void;
};
export declare const SelectContextKey: InjectionKey<SelectContextType>;
