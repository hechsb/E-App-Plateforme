import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component'
import { ClassesComponent } from './user/classes/classes.component';




const routes: Routes = [

  { path: 'user', component: UserComponent },
  { path: 'classes', component: ClassesComponent }


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
