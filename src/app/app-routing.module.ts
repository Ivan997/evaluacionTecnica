import { TicketComponent } from './ticket/ticket.component';
import { VentasComponent } from './ventas/ventas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'ticket', component: TicketComponent},
  { path : 'ventas', component: VentasComponent},
  { path : '**', redirectTo: 'ventas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
