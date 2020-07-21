import { Component, OnInit, Injectable } from "@angular/core";
import { AppServices } from '../app-services.service';
import { WebsocketService } from "../websocket.service";
import { PowiadomieniaService } from "../powiadomienia.service";
import { DatePipe } from '@angular/common';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { ChildMessageRenderer } from './modifed.component';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  view: string = "listView";
  productList: any = [];
  frameworkComponents;

  public modules = AllCommunityModules;

  columnDefs = [
    {
      headerName: 'Nazwa', field: 'productName', sortable: true, filter: true, resizable: true, flex: 1, 
      // cellClass: function(params) {
      //   return params.value === 'Toyota' ? 'rag-green' : 'rag-amber';
      // }
    },
    { headerName: 'System operacyjnu', field: 'operatingSystem', sortable: true, filter: true, resizable: true, flex: 1, },
    { headerName: 'Ostatnia wersja', field: 'lastVersion', sortable: true, filter: true, resizable: true, },
    { headerName: 'Data ostatniego wydania', field: 'lastReleaseDate', sortable: true, filter: true, resizable: true, valueFormatter: this.dataFormatted},
    { headerName: 'Cena', field: 'basePrice', sortable: true, filter: true, resizable: true, valueFormatter: this.currencyFormatter,},
    {
      headerName: 'Child/Parent',
      cellRenderer: 'childMessageRenderer',
      field: 'productId'
    },
  ];

  localeText = {
    selectAll: "Zaznacz wszystko",
    selectAllSearchResults: 'Zaznacz wszystkie wyszukane wyniki',
    searchOoo: 'wyszukiwanie...',
    blanks: 'puste miejsca',
    noMatches: 'brak wyników.',
    filterOoo: 'filtruj',
    equals: 'równa się',
    notEqual: 'nie równa się',
    lessThan: 'mniej niż',
    greaterThan: 'lepszy niż',
    lessThanOrEqual: 'mniej niż lub równe',
    greaterThanOrEqual: 'więcej niż lub równe',
    inRange: 'w zakresie',
    inRangeStart: 'zakres od',
    inRangeEnd: 'zakres do',
    contains: 'zawiera',
    notContains: 'nie zawiera',
    startsWith: 'zaczyna od',
    endsWith: 'kończy na',
    dateFormatOoo: 'Yyyy-mm-dd',
    andCondition: 'i',
    orCondition: 'lub',
    applyFilter: 'zatwierdź filtr',
    resetFilter: 'resetuj filtr',
    clearFilter: 'Wyczyść filtr',
    cancelFilter: 'daCancel',
    columns: 'kolumny',
    filters: 'filtry',
    pivotMode: 'laPivot Mode',
    groups: 'laRow Groups',
    rowGroupColumnsEmptyMessage: 'laDrag here to set row groups',
    values: 'laValues',
    valueColumnsEmptyMessage: 'laDrag here to aggregate',
    pivots: 'laColumn Labels',
    pivotColumnsEmptyMessage: 'laDrag here to set column labels',
    group: 'laGroup',
    loadingOoo: 'ładowanie...',
    noRowsToShow: 'Brak danych',
    enabled: 'włączone',
    pinColumn: 'laPin Column',
    pinLeft: 'laPin Left',
    pinRight: 'laPin Right',
    noPin: 'laNo Pin',
    valueAggregation: 'laValue Aggregation',
    autosizeThiscolumn: 'laAutosize This Column',
    autosizeAllColumns: 'laAutosize All Columns',
    groupBy: 'laGroup by',
    ungroupBy: 'laUn-Group by',
    resetColumns: 'laReset Columns',
    expandAll: 'laExpand All',
    collapseAll: 'laClose All',
    copy: 'kopiuj',
    ctrlC: 'laCtrl+C',
    copyWithHeaders: 'laCopy With Headers',
    paste: 'wklej',
    ctrlV: 'laCtrl+V',
    export: 'laExport',
    csvExport: 'laCSV Export',
    excelExport: 'laExcel Export (.xlsx)',
    excelXmlExport: 'laExcel Export (.xml)',
    sum: 'laSum',
    min: 'minimum',
    max: 'maksimum',
    none: 'laNone',
    count: 'zlicz',
    avg: 'laAverage',
    filteredRows: 'laFiltered',
    selectedRows: 'laSelected',
    totalRows: 'laTotal Rows',
    totalAndFilteredRows: 'laRows',
    page: 'strona',
    more: 'więcej',
    to: 'do',
    of: 'z',
    next: 'następna',
    last: 'ostatnia',
    first: 'pierwsza',
    previous: 'poprzednia',
    pivotChartAndPivotMode: 'laPivot Chart & Pivot Mode',
    pivotChart: 'laPivot Chart',
    chartRange: 'laChart Range',
    columnChart: 'laColumn',
    groupedColumn: 'laGrouped',
    stackedColumn: 'laStacked',
    normalizedColumn: 'la100% Stacked',
    barChart: 'laBar',
    groupedBar: 'laGrouped',
    stackedBar: 'laStacked',
    normalizedBar: 'la100% Stacked',
    pieChart: 'laPie',
    pie: 'laPie',
    doughnut: 'laDoughnut',
    line: 'laLine',
    xyChart: 'laX Y (Scatter)',
    scatter: 'laScatter',
    bubble: 'laBubble',
    areaChart: 'laArea',
    area: 'laArea',
    stackedArea: 'laStacked',
    normalizedArea: 'la100% Stacked',
    histogramChart: 'laHistogram',
    pivotChartTitle: 'laPivot Chart',
    rangeChartTitle: 'laRange Chart',
    settings: 'ustawienia',
    data: 'laData',
    format: 'format',
    categories: 'kategorie',
    defaultCategory: '(domyślna kategoria)',
    series: 'laSeries',
    xyValues: 'laX Y Values',
    paired: 'laPaired Mode',
    axis: 'laAxis',
    color: 'laColor',
    thickness: 'laThickness',
    xType: 'laX Type',
    automatic: 'laAutomatic',
    category: 'laCategory',
    number: 'numer',
    time: 'laTime',
    xRotation: 'laX Rotation',
    yRotation: 'laY Rotation',
    ticks: 'laTicks',
    width: 'szerokość',
    height: 'wysokość',
    length: 'długość',
    padding: 'stronnicowanie',
    chart: 'wykres',
    title: 'tytuł',
    background: 'tło',
    font: 'czcionka',
    top: 'góra',
    right: 'prawa',
    bottom: 'dół',
    left: 'lewa',
    labels: 'laLabels',
    size: 'rozmiar',
    minSize: 'laMinimum Size',
    maxSize: 'laMaximum Size',
    legend: 'legenda',
    position: 'laPosition',
    markerSize: 'laMarker Size',
    markerStroke: 'laMarker Stroke',
    markerPadding: 'laMarker Padding',
    itemPaddingX: 'laItem Padding X',
    itemPaddingY: 'laItem Padding Y',
    strokeWidth: 'laStroke Width',
    offset: 'laOffset',
    offsets: 'laOffsets',
    tooltips: 'laTooltips',
    callout: 'laCallout',
    markers: 'laMarkers',
    shadow: 'laShadow',
    blur: 'laBlur',
    xOffset: 'laX Offset',
    yOffset: 'laY Offset',
    lineWidth: 'laLine Width',
    normal: 'laNormal',
    bold: 'laBold',
    italic: 'laItalic',
    boldItalic: 'laBold Italic',
    predefined: 'laPredefined',
    fillOpacity: 'laFill Opacity',
    strokeOpacity: 'laLine Opacity',
    histogramBinCount: 'laBin Count',
    columnGroup: 'laColumn',
    barGroup: 'laBar',
    pieGroup: 'laPie',
    lineGroup: 'laLine',
    scatterGroup: 'laScatter',
    areaGroup: 'laArea',
    histogramGroup: 'laHistogram',
    groupedColumnTooltip: 'laGrouped',
    stackedColumnTooltip: 'laStacked',
    normalizedColumnTooltip: 'la100% Stacked',
    groupedBarTooltip: 'laGrouped',
    stackedBarTooltip: 'laStacked',
    normalizedBarTooltip: 'la100% Stacked',
    pieTooltip: 'laPie',
    doughnutTooltip: 'laDoughnut',
    lineTooltip: 'laLine',
    groupedAreaTooltip: 'laGrouped',
    stackedAreaTooltip: 'laStacked',
    normalizedAreaTooltip: 'la100% Stacked',
    scatterTooltip: 'laScatter',
    bubbleTooltip: 'laBubble',
    histogramTooltip: 'laHistogram',
    noDataToChart: 'laNo data available to be charted.',
    pivotChartRequiresPivotMode: 'laPivot Chart requires Pivot Mode enabled.',
    navigator: 'laNavigator',
  };

  private gridApi;
  private gridColumnApi;
  public rowClassRules;
  public context;
  
  constructor(private appServices: AppServices) {
    if (localStorage.getItem('viewProductList')) this.view = localStorage.getItem('viewProductList');

    this.rowClassRules = {
      'rag-red': function(params) {
        return params.data.basePrice > 1000;
      },      
      'rag-green': 'data.basePrice < 200',
    };

    this.context = { componentParent: this };
    // powiadomieniaService.powiadomienia.subscribe(msg => {
    //   console.log("Response from websocket: " + msg)
    // })

    this.frameworkComponents = {
      childMessageRenderer: ChildMessageRenderer,
    };
  }

  ngOnInit() {
  }


  viewChanged() {``
    localStorage.setItem('viewProductList', this.view)
  }

  autoSizeAll(skipHeader) {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

  }

  currencyFormatter(params) {
    return 'PLN ' + params.value.toFixed(2);
  }

  dataFormatted(params){
    return new DatePipe('en-US').transform(params.value, 'yyyy-MM-dd');
  }

  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedRows();
    // this.appServices.getProduct(3).subscribe(response=>{
    //   console.log(response)
    // })
    //console.log(selectedRows)
  }

  onQuickFilterChanged() {
    this.gridApi.setQuickFilter((<HTMLInputElement>document.getElementById('quickFilter')).value);
  }

  refreshEvenRowsCurrencyData(){
    console.log('tak')
  }
}
