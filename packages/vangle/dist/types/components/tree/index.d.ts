export * from './src/tree';
export declare const VanTree: import("@vangle/utils").SFCWithInstall<import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<import("./src/tree").TreeNodeData[]>;
        default: never[];
    };
    props: {
        type: import("vue").PropType<import("./src/tree").TreeOptionProps>;
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
        type: import("vue").PropType<import("./src/tree").RenderContentFn>;
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
        type: import("vue").PropType<import("./src/tree").TreeNodeData[]>;
        default: never[];
    };
    props: {
        type: import("vue").PropType<import("./src/tree").TreeOptionProps>;
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
        type: import("vue").PropType<import("./src/tree").RenderContentFn>;
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
    props: import("./src/tree").TreeOptionProps;
    data: import("./src/tree").TreeNodeData[];
    draggable: boolean;
    accordion: boolean;
    emptyText: string;
    showCheckbox: boolean;
    defaultExpandAll: boolean;
    nodeKey: string;
    defaultExpandedKeys: unknown[];
    defaultCheckedKeys: unknown[];
    expandOnClickNode: boolean;
}, {}>> & Record<string, any>;
export default VanTree;
