import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  public itemsVentas = [
    {
      'id' : 1,
      'sale_id' : 1,
      'description' : 'Venta 1 desc',
      'department' : 'sports',
      'price' : 150.00,
    },
    {
      'id' : 1,
      'sale_id' : 1,
      'description' : 'Venta 1 desc',
      'department' : 'sports',
      'price' : 250.00,
    },
    {
      'id' : 1,
      'sale_id' : 1,
      'description' : 'Venta 1 desc',
      'department' : 'sports',
      'price' : 350.00,
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.apirequest({});

  }

  apirequest(obj : any, api: string = '/getAllSales.php', type : string = 'get'){

    // obj.responseType = 'json';

    this.http.get('http://127.0.0.1/evaluacionTecnica_backend/'+api, obj).subscribe((response : any) => {
      console.log(api+' response: ',response);
      this.itemsVentas = response.data;
    })


  }

  showTicket = (sale_id : any) => {
    console.log('show ticket: ',sale_id);
  }

}
