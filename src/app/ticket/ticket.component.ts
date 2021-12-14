import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  folio       : any = 0;
  department  : string = 'Department';
  date        : any = '14/12/2021';
  description : string = 'content ticket';
  customer    : string = '';
  email       : string = '';
  finalPrice  : number = 50.50;

  actualTicket = -1;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.route.queryParams.subscribe(params => {this.actualTicket = params['sale_id']});
  }

  ngOnInit(): void {


    var params = "ticket="+this.actualTicket;

    this.apirequest(params, 'getSpecificTicket').then((response : any) => {

      var data = response.data;

      this.department = data['department'];
      this.description = data['description'];
      this.email = data['email'];
      this.customer = data['fullname'];
      this.finalPrice = data['price'];
      this.date = data['sale_date'];

      console.log('response: ',response);
    })
  }

  apirequest(params : string, api: string = 'getAllSales', type : string = 'get'){

    return new Promise((resolve, reject) => {
      this.http.get('http://127.0.0.1/evaluacionTecnica_backend/'+api+'.php?'+params).subscribe((response : any) => {
        console.log(api+' response: ',response);
        resolve(response);
      })
    })





  }

}
