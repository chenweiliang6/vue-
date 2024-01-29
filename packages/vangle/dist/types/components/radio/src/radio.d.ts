import { InjectionKey, PropType, WritableComputedRef } from 'vue';
export type LabelType = string | number | boolean;
export declare const RadioGroupProps: {
    modelValue: {
        type: PropType<LabelType>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    textColor: {
        type: StringConstructor;
    };
    fill: {
        type: StringConstructor;
    };
};
export declare const RadioProps: {
    modelValue: {
        type: PropType<LabelType>;
    };
    label: {
        type: PropType<LabelType>;
    };
    disabled: {
        type: BooleanConstructor;
    };
    border: {
        type: BooleanConstructor;
    };
};
export interface RadioGroupContext {
    activeLabel: WritableComputedRef<LabelType | undefined>;
    textColor?: string;
    disabled?: boolean;
    fill?: string;
    handleChange: (value: LabelType) => void;
}
export declare const RadioGroupContextKey: InjectionKey<RadioGroupContext>;
