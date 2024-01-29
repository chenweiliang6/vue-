export default _sfc_main;
declare const _sfc_main: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{}>>, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    props: {
        moveLimit: {
            type: StringConstructor;
            default: string;
        };
    };
    emits: string[];
    setup(__props: any, { expose: __expose, emit: __emit }: {
        expose: any;
        emit: any;
    }): {
        props: any;
        draggable: import("vue").Ref<null>;
        style1: import("vue").Ref<{
            right: number;
            top: string;
        }>;
        initialValue_copy: import("vue").Ref<{
            x: number;
            y: number;
        }>;
        observer: import("vue").Ref<null>;
        obj: import("vue").Ref<{}>;
        parentWidth: import("vue").Ref<number>;
        parentHeight: import("vue").Ref<number>;
        parentLeft: import("vue").Ref<number>;
        parentTop: import("vue").Ref<number>;
        selfWidth: import("vue").Ref<number>;
        selfHeight: import("vue").Ref<number>;
        emits: any;
        mousedownX: import("vue").Ref<number>;
        mousedownY: import("vue").Ref<number>;
        mousedown: () => void;
        mouseup: () => void;
        getWH: () => void;
        reLoad: () => void;
        handleResize: () => void;
        oldTop: import("vue").Ref<number>;
        handleScroll: () => void;
        runTime: import("vue").Ref<number>;
        DO_defineComponent: typeof DO_defineComponent;
        ref: typeof ref;
        watchEffect: typeof watchEffect;
        watch: typeof watch;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        onBeforeUnmount: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        readonly useDraggable: typeof useDraggable;
        readonly useResizeObserver: typeof useResizeObserver;
    };
};
import { defineComponent as DO_defineComponent } from ".pnpm/@vue+runtime-core@3.3.8/node_modules/@vue/runtime-core";
import { ref } from ".pnpm/@vue+runtime-core@3.3.8/node_modules/@vue/runtime-core";
import { watchEffect } from ".pnpm/@vue+runtime-core@3.3.8/node_modules/@vue/runtime-core";
import { watch } from ".pnpm/@vue+runtime-core@3.3.8/node_modules/@vue/runtime-core";
import { useDraggable } from "@vueuse/core";
import { useResizeObserver } from "@vueuse/core";
