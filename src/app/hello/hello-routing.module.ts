import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { TestRouteComponent } from './TestRoute/test-route.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'test-route',
    component: TestRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelloRoutingModule {}
