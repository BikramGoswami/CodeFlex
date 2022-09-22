import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ExamUIComponent } from './exam-ui/exam-ui.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExamSelectionComponent } from './exam-selection/exam-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportSuccessComponent } from './report-success/report-success.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { Report } from './appmodel/report';
import { ReportComponent } from './report/report.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AdminForgetPasswordComponent } from './admin-forget-password/admin-forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    HomeComponent,
    ExamUIComponent,
    MenuBarComponent,
    UserDashboardComponent,
    AboutUsComponent,
    ExamUIComponent,
    ExamSelectionComponent,
    ReportSuccessComponent,
    AdminSearchComponent,
    RemoveQuestionComponent,
    AddQuestionComponent,
    AdminDashboardComponent,
    ReportComponent,
    ForgotPasswordComponent,
    InstructionsComponent,
    AdminForgetPasswordComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
