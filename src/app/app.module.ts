import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './menu/menu.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MatDatepickerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './info/info.component';
import { ScheduleService } from './services/schedule.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FilterPipe } from './services/filter.pipe';
import { FormsModule } from '@angular/forms';
import { MenuIconComponent } from './menu/menu-icon/menu-icon.component';
import { SocialIconComponent } from './menu/social-icon/social-icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuComponent,
    ScheduleComponent,
    InfoComponent,
    FilterPipe,
    MenuIconComponent,
    SocialIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    AngularSvgIconModule
  ],
  providers: [ScheduleService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
