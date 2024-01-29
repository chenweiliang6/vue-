import { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue';
import type { Dayjs } from 'dayjs';
export declare const DatePickerProps: {
    modelValue: (StringConstructor | DateConstructor | NumberConstructor)[];
    format: StringConstructor;
    valueFormat: StringConstructor;
    disabledDate: {
        type: PropType<(time: Date) => boolean>;
    };
    placeholder: StringConstructor;
    type: {
        type: PropType<"date" | "year" | "month">;
        default: string;
    };
    shortcuts: {
        type: PropType<{
            text: string;
            value: Date | Function;
        }[]>;
        default: () => never[];
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
};
export type DatePickerTypes = ExtractPropTypes<typeof DatePickerProps>;
export declare const DatePickerContextKey: InjectionKey<{
    date: Ref<Dayjs>;
    disabledDate?: (time: Date) => boolean;
}>;
export type DateCellType = 'normal' | 'today' | 'week' | 'next-month' | 'prev-month';
export interface DateCell {
    text?: number;
    disabled?: boolean;
    isSelected?: boolean;
    isCurrent?: boolean;
    date: Dayjs;
    type?: DateCellType;
}
