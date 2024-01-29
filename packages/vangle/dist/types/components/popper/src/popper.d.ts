import { PropType, InjectionKey, Ref } from 'vue';
import type { Placement, Strategy, VirtualElement } from '@floating-ui/dom';
export type TriggerType = 'hover' | 'click' | 'focus' | 'contextmenu';
export declare const PopperProps: {
    effect: {
        type: PropType<"light" | "dark">;
        default: string;
    };
    pure: {
        type: BooleanConstructor;
        default: boolean;
    };
    content: {
        type: StringConstructor;
    };
    arrowPadding: {
        type: NumberConstructor;
        default: number;
    };
    transitionName: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: PropType<Placement>;
        values: readonly ["top-start", "top-end", "top", "bottom-start", "bottom-end", "bottom", "left-start", "left-end", "left", "right-start", "right-end", "right"];
        default: string;
    };
    strategy: {
        type: PropType<Strategy>;
        values: readonly ["absolute", "fixed"];
        default: string;
    };
    reference: {
        type: PropType<HTMLElement | VirtualElement | null>;
        default: null;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    nowrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
    };
    trigger: {
        type: PropType<TriggerType>;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
};
export declare const TriggerProps: {
    nowrap: BooleanConstructor;
    onBlur: {
        readonly type: PropType<(e: Event) => boolean | void>;
    };
    onClick: {
        readonly type: PropType<(e: Event) => boolean | void>;
    };
    onFocus: {
        readonly type: PropType<(e: Event) => boolean | void>;
    };
    onMouseDown: {
        readonly type: PropType<(e: Event) => boolean | void>;
    };
    onMouseEnter: {
        readonly type: PropType<(e: Event) => boolean | void>;
    };
    onMouseLeave: {
        readonly type: PropType<(e: Event) => boolean | void>;
    };
    trigger: {
        type: PropType<TriggerType>;
        default: string;
    };
};
export type PopperContext = {
    onClose: () => void;
    onOpen: () => void;
    triggerRef: Ref<HTMLElement | null>;
};
export declare const PopperContextKey: InjectionKey<PopperContext>;
