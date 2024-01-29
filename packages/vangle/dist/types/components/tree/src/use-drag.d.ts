import { TreePropsType, Node } from './tree';
export declare const useDrag: (props: TreePropsType, emit: (...args: any[]) => void, callback: Function) => {
    createDragEvents: (node: Node) => {
        onDragstart(e: DragEvent): void;
        onDragenter(e: DragEvent): void;
        onDragleave(e: DragEvent): void;
        ondragover(e: DragEvent): void;
        ondragend(e: DragEvent): void;
        onDrop(e: DragEvent): false | undefined;
    };
    dragState: import("vue").Ref<{
        draggingNode: {
            id?: number | undefined;
            level: number;
            label: string | number;
            isLeaf?: boolean | undefined;
            checked?: boolean | undefined;
            childNodes?: any[] | undefined;
            expand?: boolean | undefined;
            disabled?: boolean | undefined;
            parent?: any | null | undefined;
            indeterminate?: boolean | undefined;
            loaded?: boolean | undefined;
            loading?: boolean | undefined;
            data?: any;
            store?: any;
            draggable?: boolean | undefined;
        };
        dropNode: {
            id?: number | undefined;
            level: number;
            label: string | number;
            isLeaf?: boolean | undefined;
            checked?: boolean | undefined;
            childNodes?: any[] | undefined;
            expand?: boolean | undefined;
            disabled?: boolean | undefined;
            parent?: any | null | undefined;
            indeterminate?: boolean | undefined;
            loaded?: boolean | undefined;
            loading?: boolean | undefined;
            data?: any;
            store?: any;
            draggable?: boolean | undefined;
        };
    }>;
};
export declare function addClass(el: HTMLElement, className: string, isRemove?: boolean): void;
