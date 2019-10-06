import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: any[] = [];
  @Input('chartData') doughnutChartData: any = [
    []
  ];
  @Input('chartType') doughnutChartType: any = '';

  constructor() { }

  ngOnInit() {
  }

}
