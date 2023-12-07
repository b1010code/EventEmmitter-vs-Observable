import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventSendComponent } from './component/event-send/event-send.component';
import { EventReceiveComponent } from './component/event-receive/event-receive.component';
import { ObserveSendComponent } from './component/observe-send/observe-send.component';
import { ObserveReceiveComponent } from './component/observe-receive/observe-receive.component';
import { EventService } from './service/event.service';
import { ObservableService } from './service/observable.service';
import { SiblingComponent } from './component/sibling/sibling.component';
import { MenuComponent } from './component/menu/menu.component';
import { BindingPropertyComponent } from './component/binding-property/binding-property.component';
import { OutputPropertyComponent } from './component/output-property/output-property.component';
import { PropertyService } from './service/property.service';

@NgModule({
  declarations: [
    AppComponent,
    EventSendComponent,
    EventReceiveComponent,
    ObserveSendComponent,
    ObserveReceiveComponent,
    SiblingComponent,
    MenuComponent,
    BindingPropertyComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventService, ObservableService,PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
