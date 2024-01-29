import { PropType } from 'vue';
export type ProgressStatus = 'success' | 'warning' | 'info' | 'danger';
type ProgressType = 'line' | 'circle' | 'dashboard';
type Fn<T> = (percentage: number) => T;
type ProgressColorItem = {
    color: string;
    percentage: number;
};
type ProgressColor = string | Fn<string> | ProgressColorItem[];
export declare const ProgressProps: {
    type: {
        type: PropType<ProgressType>;
        default: string;
    };
    percentage: {
        type: NumberConstructor;
    };
    format: {
        type: PropType<Fn<boolean>>;
    };
    status: {
        type: PropType<ProgressStatus>;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    textInside: BooleanConstructor;
    color: {
        type: PropType<ProgressColor>;
    };
    trackColor: {
        type: PropType<ProgressColor>;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    strokeLinecap: {
        type: PropType<"round" | "inherit" | "butt" | "square">;
        default: string;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export {};
