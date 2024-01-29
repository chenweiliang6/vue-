import { TreeNodeData } from './tree';
declare const _sfc_main: import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<TreeNodeData[]>;
        default: never[];
    };
    props: {
        type: import("vue").PropType<import("./tree").TreeOptionProps>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    showCheckbox: {
        type: BooleanConstructor;
    };
    load: {
        type: FunctionConstructor;
    };
    defaultExpandAll: {
        type: BooleanConstructor;
    };
    nodeKey: {
        type: StringConstructor;
        default: string;
    };
    defaultExpandedKeys: {
        type: ArrayConstructor;
        default: () => never[];
    };
    defaultCheckedKeys: {
        type: ArrayConstructor;
        default: () => never[];
    };
    renderContent: {
        type: import("vue").PropType<import("./tree").RenderContentFn>;
    };
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    accordion: {
        type: BooleanConstructor;
    };
    filterNodeMethod: {
        type: FunctionConstructor;
    };
    draggable: {
        type: BooleanConstructor;
    };
    allowDrop: {
        type: FunctionConstructor;
    };
    allowDrag: {
        type: FunctionConstructor;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<TreeNodeData[]>;
        default: never[];
    };
    props: {
        type: import("vue").PropType<import("./tree").TreeOptionProps>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    showCheckbox: {
        type: BooleanConstructor;
    };
    load: {
        type: FunctionConstructor;
    };
    defaultExpandAll: {
        type: BooleanConstructor;
    };
    nodeKey: {
        type: StringConstructor;
        default: string;
    };
    defaultExpandedKeys: {
        type: ArrayConstructor;
        default: () => never[];
    };
    defaultCheckedKeys: {
        type: ArrayConstructor;
        default: () => never[];
    };
    renderContent: {
        type: import("vue").PropType<import("./tree").RenderContentFn>;
    };
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    accordion: {
        type: BooleanConstructor;
    };
    filterNodeMethod: {
        type: FunctionConstructor;
    };
    draggable: {
        type: BooleanConstructor;
    };
    allowDrop: {
        type: FunctionConstructor;
    };
    allowDrag: {
        type: FunctionConstructor;
    };
}>>, {
    props: import("./tree").TreeOptionProps;
    data: TreeNodeData[];
    draggable: boolean;
    accordion: boolean;
    emptyText: string;
    showCheckbox: boolean;
    defaultExpandAll: boolean;
    nodeKey: string;
    defaultExpandedKeys: unknown[];
    defaultCheckedKeys: unknown[];
    expandOnClickNode: boolean;
}, {}>;
export default _sfc_main;
