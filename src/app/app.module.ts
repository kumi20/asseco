import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductListComponent } from "./product-list/product-list.component";

import { HttpClientModule } from "@angular/common/http";

import { AppServices } from "./app-services.service";
import { AuthGuard } from './auth.guard';
import { ProductComponent } from "./product-list/product/product.component";

import { PageNotFaoundComponent } from "./page-not-faound/page-not-faound.component";

import { AgGridModule } from '@ag-grid-community/angular';
import { ChildMessageRenderer } from './product-list/modifed.component';

import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

import {
  DxTileViewModule,
  DxButtonModule,
  DxListModule,
  DxAccordionModule,
  DxCheckBoxModule,
  DxSliderModule,
  DxTagBoxModule,
  DxTemplateModule,
} from "devextreme-angular";
import { LogOnComponent } from './log-on/log-on.component';
import { ContentComponent } from './content/content.component';
import { OfferComponent } from './offer-list/offer/offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductComponent,
    PageNotFaoundComponent,
    ChildMessageRenderer,
    LogOnComponent,
    ContentComponent,
    OfferComponent,
    OfferListComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    DxButtonModule,
    DxListModule,
    DxTileViewModule,
    DxAccordionModule,
    DxCheckBoxModule,
    DxSliderModule,
    DxTagBoxModule,
    DxTemplateModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),
    AgGridModule.withComponents([
      ChildMessageRenderer,
    ]),
  ],
  providers: [AppServices, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
