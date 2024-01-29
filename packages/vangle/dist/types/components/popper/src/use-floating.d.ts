import { Middleware, Placement, Strategy } from '@floating-ui/dom';
import { ToRefs } from 'vue';
type UseFloatingProps = ToRefs<{
    middleware: Array<Middleware>;
    placement: Placement;
    strategy: Strategy;
}>;
export declare const useFloating: ({ middleware, placement, strategy }: UseFloatingProps) => {
    x: import("vue").Ref<number | undefined>;
    y: import("vue").Ref<number | undefined>;
    update: () => Promise<void>;
    referenceRef: import("vue").Ref<any>;
    contentRef: import("vue").Ref<any>;
    placement: import("vue").Ref<Placement>;
    strategy: import("vue").Ref<Strategy>;
    middlewareData: import("vue").Ref<{
        [x: string]: any;
        arrow?: {
            y?: number | undefined;
            x?: number | undefined;
            centerOffset: number;
            alignmentOffset?: number | undefined;
        } | undefined;
        autoPlacement?: {
            index?: number | undefined;
            overflows: {
                placement: Placement;
                overflows: number[];
            }[];
        } | undefined;
        flip?: {
            index?: number | undefined;
            overflows: {
                placement: Placement;
                overflows: number[];
            }[];
        } | undefined;
        hide?: {
            referenceHidden?: boolean | undefined;
            escaped?: boolean | undefined;
            referenceHiddenOffsets?: {
                top: number;
                left: number;
                bottom: number;
                right: number;
            } | undefined;
            escapedOffsets?: {
                top: number;
                left: number;
                bottom: number;
                right: number;
            } | undefined;
        } | undefined;
        offset?: {
            y: number;
            x: number;
        } | undefined;
        shift?: {
            y: number;
            x: number;
        } | undefined;
    }>;
};
export {};
