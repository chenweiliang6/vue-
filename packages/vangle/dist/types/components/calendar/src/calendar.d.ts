import { ExtractPropTypes, InjectionKey, Ref, PropType } from 'vue';
import type { Dayjs } from 'dayjs';
export declare const CalendarProps: {
    modelValue: (StringConstructor | DateConstructor | NumberConstructor)[];
    format: StringConstructor;
    valueFormat: StringConstructor;
    type: {
        type: PropType<"date" | "year" | "month">;
        default: string;
    };
};
export type DatePickerTypes = ExtractPropTypes<typeof CalendarProps>;
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
    day: string;
    type?: DateCellType;
}
