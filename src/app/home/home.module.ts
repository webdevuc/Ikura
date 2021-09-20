import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './header/header.component';
import { IkuraInfoComponent } from './ikura-info/ikura-info.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ikura',
    component: IkuraInfoComponent,
  },
];

@NgModule({
  declarations: [ HomeComponent, IkuraInfoComponent, RoadMapComponent, ContactUsComponent, OurTeamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
