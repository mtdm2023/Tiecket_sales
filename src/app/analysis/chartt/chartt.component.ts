import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChartComponent,ApexAxisChartSeries,ApexFill,ApexPlotOptions,ApexChart,ApexXAxis,ApexYAxis,ApexDataLabels,ApexTooltip,ApexStroke,ApexTitleSubtitle} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  apexTitle:ApexTitleSubtitle;
  apexYaxis:ApexYAxis
  apexPlotoptions:ApexPlotOptions
  fill:ApexFill
};
@Component({
  selector: 'app-chartt',
  templateUrl: './chartt.component.html',
  styleUrls:['./chartt.component.css','./responsive.css']
})

export class CharttComponent {

  @ViewChild('chart') Chart!:ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "استخدام",
          data: [31, 40, 28, 51, 42, 109, 100,50,90,80,80,90],
          color:'#8A74F9'
        },

      ],
      apexTitle :{
        text:'احصائيات استخدام القسيمة',
        style:{
          fontFamily:'Neo Sans Arabic Medium',
          fontSize:'14px',
          fontWeight:400,

        },
        align: 'right',
      },
      chart: {
        height: '264px ',
        type: "area",
        width: '100%',
        toolbar:{
          show:false,

        },
        background:'#FFFF',


      },

          fill: {
            colors: ['#8A74F9'], // Set the desired color for the area fill
          },


      apexYaxis: {
        show: false, // Set to false to hide the Y-axis
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors:['#8A74F9']
      },
      xaxis: {

        categories: ['ديسمبر','نوفمبر','اكتوبر','سبتمبر','أغسطس','يوليو','يونيو','مايو','ابريل','مارس','فبراير','يناير']
      },

      tooltip: {

        enabled:true,
        x: {
          format: "dd/MM/yy HH:mm"
        },
        style:{
          fontFamily:'Arial',

        }

      }
    };
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Update chart size based on media queries
    this.updateChartSize();
  }

  private updateChartSize(): void {
    // Example media query: adjust values based on your needs
    if (window.innerWidth < 768) {
      this.chartOptions.chart!.width = '50px !important';
      this.chartOptions.chart!.height = '10px !important';
    } else {
      this.chartOptions.chart!.width = '50% !important';
      this.chartOptions.chart!.height = '10px !important';
    }
  }
}
