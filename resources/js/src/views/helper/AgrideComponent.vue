<template>
    <vx-card title="AGrid Component" code-toggler class="mb-base">
        <div class="vx-row">
            <div class="vx-col w-full">
                <div class="flex btn-group">
                    <vs-button type="relief" icon-pack="feather" icon="icon-plus-square">Add</vs-button>
                    <vs-button :disabled="selected.length!==1" color="warning" type="relief" icon-pack="feather" icon="icon-edit">Edit</vs-button>
                    <vs-button :disabled="selected.length<=0" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">Delete</vs-button>
                    <vs-button :disabled="selected.length<=0" @click="gridApi.deselectAll()" type="relief" icon-pack="feather" icon="icon-check-square">Clear</vs-button>
                    <vs-button :disabled="selected.length<=0" color="success" @click="gridApi.exportDataAsCsv({onlySelected: true})" type="relief" icon-pack="feather" icon="icon-download-cloud">Export</vs-button>
                </div>
                <ag-grid-vue class="ag-theme-material w-100 my-4 ag-grid-table"
                             :columnDefs="columnDefs"
                             :defaultColDef="defaultColDef"
                             rowSelection="multiple"
                             @grid-ready="onGridReady"
                             @selection-changed="onSelectionChanged"
                             :pagination="true"
                             :paginationPageSize="100"
                             :animateRows="true"
                             :rowData="rowData">
                </ag-grid-vue>
            </div>
            {{selected}}
        </div>
        <template slot="codeContainer">
            &lt;div class=&quot;flex btn-group&quot;&gt;
            &lt;vs-button type=&quot;relief&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-plus-square&quot;&gt;Add&lt;/vs-button&gt;
            &lt;vs-button :disabled=&quot;selected.length!==1&quot; color=&quot;warning&quot; type=&quot;relief&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-edit&quot;&gt;Edit&lt;/vs-button&gt;
            &lt;vs-button :disabled=&quot;selected.length&lt;=0&quot; color=&quot;danger&quot; type=&quot;relief&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-trash-2&quot;&gt;Delete&lt;/vs-button&gt;
            &lt;vs-button :disabled=&quot;selected.length&lt;=0&quot; @click=&quot;gridApi.deselectAll()&quot; type=&quot;relief&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-check-square&quot;&gt;Clear&lt;/vs-button&gt;
            &lt;vs-button :disabled=&quot;selected.length&lt;=0&quot; color=&quot;success&quot; @click=&quot;gridApi.exportDataAsCsv({onlySelected: true})&quot; type=&quot;relief&quot; icon-pack=&quot;feather&quot; icon=&quot;icon-download-cloud&quot;&gt;Export&lt;/vs-button&gt;
            &lt;/div&gt;
            &lt;ag-grid-vue class=&quot;ag-theme-material w-100 my-4 ag-grid-table&quot;
            :columnDefs=&quot;columnDefs&quot;
            :defaultColDef=&quot;defaultColDef&quot;
            rowSelection=&quot;multiple&quot;
            @grid-ready=&quot;onGridReady&quot;
            @selection-changed=&quot;onSelectionChanged&quot;
            :pagination=&quot;true&quot;
            :paginationPageSize=&quot;100&quot;
            :animateRows=&quot;true&quot;
            :rowData=&quot;rowData&quot;&gt;
            &lt;/ag-grid-vue&gt;
            &lt;script&gt;
            //ag-grid
            import {AgGridVue} from "ag-grid-vue";
            import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'
            export default {
            name: "AgridComponent",
            components:{
            AgGridVue
            },
            data() {
            return {
            selected: [],
            gridApi: null,
            columnDefs: [
            {headerName: 'Make', field: 'make', checkboxSelection: true},
            {
            headerName: 'Model',
            field: 'model',
            cellRenderer:function (params) {
            return '&lt;img src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png" width="100%" alt=""&gt;';
            }
            },
            {headerName: 'Price', field: 'price'}
            ],
            defaultColDef: {
            sortable: true,
            resizable: true,
            filter: true,
            },
            rowData: [
            {make: 'Toyota', model: 'Celica', price: 35000},
            {make: 'Ford', model: 'Mondeo', price: 32000},
            {make: 'Porsche', model: 'Boxter', price: 72000}
            ]
            }
            },
            methods: {
            onGridReady(params) {
            this.gridApi = params.api;
            },
            onSelectionChanged() {
            this.selected = this.gridApi.getSelectedRows();
            }
            }
            }
            &lt;/script&gt;
        </template>
    </vx-card>
</template>

<script>
    //ag-grid
    import {AgGridVue} from "ag-grid-vue";
    import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'
    export default {
        name: "AgridComponent",
        components:{
            AgGridVue
        },
        data() {
            return {
                selected: [],
                gridApi: null,
                columnDefs: [
                    {
                        headerName: 'Make',
                        field: 'make',
                        checkboxSelection: true},
                    {
                        headerName: 'Model',
                        field: 'model',
                        cellRenderer:function (params) {
                            return '<img src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png" width="100%" alt="">';
                        }
                    },
                    {
                        headerName: 'Price',
                        field: 'price'
                    }
                ],
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                },
                rowData: [
                    {make: 'Toyota', model: 'Celica', price: 35000},
                    {make: 'Ford', model: 'Mondeo', price: 32000},
                    {make: 'Porsche', model: 'Boxter', price: 72000}
                ]
            }
        },
        methods: {
            onGridReady(params) {
                this.gridApi = params.api;
            },
            onSelectionChanged() {
                this.selected = this.gridApi.getSelectedRows();
            }
        }
    }
</script>

<style lang="scss">
</style>