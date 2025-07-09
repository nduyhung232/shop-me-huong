import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {PosComponent} from "./pages/pos/pos.component";
import {ScanComponent} from "./pages/scan/scan.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'pos', component: PosComponent },
  { path: 'scan', component: ScanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
