import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { DashboardComponent } from './pages/dashboard.component';

import { DemandOverviewComponent } from './pages/demand/demand-overview/demandOverview.component';
import { DemandDiscoverComponent } from './pages/demand/demand-discover/demandDiscover.component';
import { DemandReportsComponent } from './pages/demand/demand-reports/demandReports.component';
import { DemandReportsWavechartComponent } from './pages/demand/demand-reports-wavechart/demandReportsWavechart.component';
import { DemandReportsTotalDemandComponent } from './pages/demand/demand-reports-totaldemand/demandReportsTotalDemand.component';
import { DemandReportsLocationsComponent } from './pages/demand/demand-reports-locations/demandReportsLocations.component';
import { DemandReportsProfileComponent } from './pages/demand/demand-reports-profile/demandReportsProfile.component';

import { OutboundOverviewComponent } from './pages/outbound/outbound-overview/outboundOverview.component';
import { OutboundDiscoverComponent } from './pages/outbound/outbound-discover/outboundDiscover.component';
import { OutboundReportsComponent } from './pages/outbound/outbound-reports/outboundReports.component';
import { OutboundReportsLocationsComponent } from './pages/outbound/outbound-reports-locations/outboundReportsLocations.component';
import { OutboundReportsTotaldemandComponent } from './pages/outbound/outbound-reports-totaldemand/outboundReportsTotaldemand.component';
import { OutboundReportsWavechartComponent } from './pages/outbound/outbound-reports-wavechart/outboundReportsWavechart.component';
import { OutboundReportsProfileComponent } from './pages/outbound/outbound-reports-profile/outboundReportsProfile.component';

import { HubsComponent } from './pages/hubs/hubs/hubs.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DemandOverviewComponent,
    DemandDiscoverComponent,
    DemandReportsComponent,
    DemandReportsWavechartComponent,
    DemandReportsTotalDemandComponent,
    HubsComponent,
    DemandReportsLocationsComponent,
    DemandReportsProfileComponent,
    OutboundOverviewComponent,
    OutboundDiscoverComponent,
    OutboundReportsComponent,
    OutboundReportsWavechartComponent,
    OutboundReportsTotaldemandComponent,
    OutboundReportsLocationsComponent,
    OutboundReportsProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
