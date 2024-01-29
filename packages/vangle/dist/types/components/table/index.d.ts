export * from './src/table';
export declare const VanTable: import("@vangle/utils").SFCWithInstall<(props: Record<string, any> & {}) => any> & Record<string, any>;
export declare const VanTableColumn: import("@vangle/utils").SFCWithInstall<import("vue").DefineComponent<{
    id: NumberConstructor;
    prop: {
        type: StringConstructor;
    };
    label: StringConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: NumberConstructor;
    prop: {
        type: StringConstructor;
    };
    label: StringConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
}>>, {}, {}>> & Record<string, any>;
export default VanTable;
