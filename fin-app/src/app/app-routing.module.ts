import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinDashboardComponent } from './pages/fin-dashboard/fin-dashboard.component';
import { FinTransactionsComponent } from './pages/fin-transactions/fin-transactions.component';
import { FinGroupsComponent } from './pages/fin-groups/fin-groups.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: FinDashboardComponent },
  { path: 'transactions', component: FinTransactionsComponent },
  { path: 'groups', component: FinGroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
