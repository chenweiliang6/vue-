import { PropType } from 'vue';
type ValueType = string | number | boolean;
export declare const SwitchProps: {
    modelValue: {
        type: PropType<ValueType>;
        default: boolean;
    };
    activeValue: {
        type: PropType<ValueType>;
        default: boolean;
    };
    inactiveValue: {
        type: PropType<ValueType>;
        default: boolean;
    };
    activeText: StringConstructor;
    inactiveText: StringConstructor;
    inlinePrompt: BooleanConstructor;
    disabled: BooleanConstructor;
    loading: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
};
export {};
