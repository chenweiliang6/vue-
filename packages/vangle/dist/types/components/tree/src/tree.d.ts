import { InjectionKey, PropType, ExtractPropTypes } from 'vue';
export declare const GAP = 18;
export interface TreeNodeData {
    [key: string]: any;
}
export interface TreeOptionProps {
    children?: string;
    label?: string | ((data: TreeNodeData, node: Node) => string);
    disabled?: string | ((data: TreeNodeData, node: Node) => string);
    isLeaf?: string | ((data: TreeNodeData, node: Node) => boolean);
    class?: (data: TreeNodeData, node: Node) => string | {
        [key: string]: boolean;
    } | string;
}
export type RenderContentFn = (h: any, source: {
    node: Node;
    data: any;
    store: Node['store'];
}) => void;
export declare const TreeProps: {
    data: {
        type: PropType<TreeNodeData[]>;
        default: never[];
    };
    props: {
        type: PropType<TreeOptionProps>;
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
        type: PropType<RenderContentFn>;
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
};
export type TreePropsType = ExtractPropTypes<typeof TreeProps>;
export declare const TreeNodeProps: {
    node: {
        type: PropType<Node>;
        required: boolean;
    };
    renderContent: {
        type: PropType<RenderContentFn>;
    };
    showCheckbox: {
        type: BooleanConstructor;
    };
    props: {
        type: PropType<TreeOptionProps>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    accordion: {
        type: BooleanConstructor;
    };
    allowDrop: {
        type: FunctionConstructor;
    };
    allowDrag: {
        type: FunctionConstructor;
    };
    draggable: {
        type: BooleanConstructor;
    };
    filterLabel: FunctionConstructor;
};
export declare const TreeContextKeys: InjectionKey<TreePropsType>;
export type TreeKey = string | number;
export interface Node {
    id?: number;
    level: number;
    label: string | number;
    isLeaf?: boolean;
    checked?: boolean;
    childNodes?: Node[];
    expand?: boolean;
    disabled?: boolean;
    parent?: Node | null;
    indeterminate?: boolean;
    loaded?: boolean;
    loading?: boolean;
    data?: any;
    store?: any;
    draggable?: boolean;
}
export type TreeStore = {
    childNodes: Node[];
    children: TreeNodeData[];
};
