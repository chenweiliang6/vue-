import { InjectionKey, Ref } from 'vue';
export declare const ScrollbarProps: {
    height: {
        type: (StringConstructor | NumberConstructor)[];
    };
    native: {
        type: BooleanConstructor;
    };
    always: {
        type: BooleanConstructor;
    };
    minSize: {
        type: NumberConstructor;
        default: number;
    };
    vertical: {
        type: BooleanConstructor;
    };
    maxHeight: {
        type: (StringConstructor | NumberConstructor)[];
    };
};
interface ScrollbarContext {
    wrapRef: Ref<HTMLElement>;
    setScrollTop: (num: number) => void;
    setScrollLeft: (num: number) => void;
}
export declare const ScrollbarContextKey: InjectionKey<ScrollbarContext>;
export {};
