import { PropType } from 'vue';
export type TagType = 'primary' | 'info' | 'success' | 'warning' | 'danger' | '';
type TagEffect = 'dark' | 'light' | 'plain';
export declare const TagProps: {
    type: {
        type: PropType<TagType>;
        default: string;
    };
    closable: BooleanConstructor;
    round: BooleanConstructor;
    disableTransitions: BooleanConstructor;
    effect: {
        type: PropType<TagEffect>;
        default: string;
    };
};
export {};
