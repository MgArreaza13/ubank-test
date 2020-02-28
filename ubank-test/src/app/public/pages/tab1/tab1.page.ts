import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from "ng2-charts";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  public barChartLabels: Label[] = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A", backgroundColor: '#8E2DE2', },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B", backgroundColor: '#fe23c1', }
  ];


  public detailsArray: Array<any> = [
    {
      class: 'bg-gradient-orange',
      mount: '5000,00'
    },
    {
      class: 'bg-gradient-purple',
      mount: '3000,00'
    },
    {
      class: 'bg-gradient-pink',
      mount: '2000,00'
    }
  ];


  public rulesArray: Array<any> = [

    {
      title: 'Travel',
      date: '20/02/2020',
      mount: '2000,00'
    },
    {
      title: 'Travel',
      date: '20/02/2020',
      mount: '2000,00'
    },
    {
      title: 'Travel',
      date: '20/02/2020',
      mount: '2000,00'
    }, {
      title: 'Travel',
      date: '20/02/2020',
      mount: '2000,00'
    },
  ]




  constructor(
    private navCtrl: NavController,
  ) { }


  openMenu() {
    this.navCtrl.navigateRoot('/menu');
  }

    // events
    public chartClicked({
      event,
      active
    }: {
      event: MouseEvent;
      active: {}[];
    }): void {
      console.log(event, active);
    }
  
    public chartHovered({
      event,
      active
    }: {
      event: MouseEvent;
      active: {}[];
    }): void {
      console.log(event, active);
    }
  
    public randomize(): void {
      // Only Change 3 values
      const data = [
        Math.round(Math.random() * 100),
        59,
        80,
        Math.random() * 100,
        56,
        Math.random() * 100,
        40
      ];
      this.barChartData[0].data = data;
    }

}
