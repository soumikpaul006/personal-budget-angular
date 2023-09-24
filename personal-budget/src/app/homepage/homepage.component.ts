import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/auto';




@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  public dataSource ={
    datasets:[
      {
        data: [] as any[],
        backgroundColor:[
            '#ffcd56',
            '#ff6384',
            '#36a2eb',
            '#fd6b19',
            '#4caf50',
            '#9c27b0',
            '#795548',
            '#f44336',
            '#2196f3',
            '#ff5722',
            '#607d8b',
        ]
      }
    ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [] as any[]
};


  constructor(private http: HttpClient){}



  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res:any)=>{

        for(let i=0;i<res.myBudget.length;i++)
        {
          this.dataSource.datasets[0].data[i]=res.myBudget[i].budget;
          this.dataSource.labels[i]=res.myBudget[i].title;
        }
        this.createChart();

    });
  }

  ngOnInit(): void {
    // this.http.get('http://localhost:3000/budget')
    // .subscribe((res:any)=>{

    //     for(let i=0;i<res.myBudget.length;i++)
    //     {
    //       this.dataSource.datasets[0].data[i]=res.myBudget[i].budget;
    //       this.dataSource.labels[i]=res.myBudget[i].title;
    //     }
    //     this.createChart();

    // });
  }

  createChart(){
    var ctx=document.getElementById('myChart') as HTMLCanvasElement;
    var myPieChart=new Chart(ctx,{
        type:'pie',
        data: this.dataSource
    });
  }
}
