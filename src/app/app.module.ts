import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './component/employee/employee.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { OnHover } from './directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    UppercasePipe,
    OnHover
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
