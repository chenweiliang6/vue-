import { InjectionKey, Ref } from 'vue';
export declare const CollapseProps: {
    modelValue: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => never[];
    };
    accordion: {
        type: BooleanConstructor;
    };
};
export type CollapseActiveName = string | number;
export interface CollapseContext {
    activeNames: Ref<CollapseActiveName[]>;
    handleItemClick: (name: CollapseActiveName) => void;
}
export declare const collapseContextKey: InjectionKey<CollapseContext>;
