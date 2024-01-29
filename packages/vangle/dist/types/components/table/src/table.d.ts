import { InjectionKey, PropType, ExtractPropTypes, Ref } from 'vue';
export type TableData = {
    [key: string]: any;
};
export type TableLayout = 'fixed' | 'auto';
export declare const TableProps: {
    data: {
        type: PropType<TableData[]>;
        default: () => never[];
    };
    tableLayout: {
        type: PropType<TableLayout>;
        default: string;
    };
    width: {
        type: StringConstructor;
    };
    border: BooleanConstructor;
    stripe: BooleanConstructor;
    rowClassName: {
        type: (StringConstructor | FunctionConstructor)[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
    };
};
export type TableTypes = ExtractPropTypes<typeof TableProps>;
export declare const TableColumnProps: {
    id: NumberConstructor;
    prop: {
        type: StringConstructor;
    };
    label: StringConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
};
export type TableColumnTypes = ExtractPropTypes<typeof TableColumnProps>;
export interface Store {
    columns: TableColumnTypes[];
}
export interface Table {
    columns: Ref<TableData[]>;
    store: any;
    tableName: string;
}
export declare const TableContextKey: InjectionKey<Table>;
