import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BleComponent } from './ble/ble.component';

const routes: Routes = [
  { path: '', component: BleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
