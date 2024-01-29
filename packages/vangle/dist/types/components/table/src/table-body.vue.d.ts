import { PropType } from 'vue';
import { TableData, Store } from './table';
declare const _sfc_main: import("vue").DefineComponent<{
    data: {
        type: PropType<TableData[]>;
        default: () => never[];
    };
    store: {
        type: PropType<Store>;
    };
    rowClassName: {
        type: (StringConstructor | FunctionConstructor)[];
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<TableData[]>;
        default: () => never[];
    };
    store: {
        type: PropType<Store>;
    };
    rowClassName: {
        type: (StringConstructor | FunctionConstructor)[];
    };
}>>, {
    data: TableData[];
}, {}>;
export default _sfc_main;
