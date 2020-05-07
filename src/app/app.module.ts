import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductListComponent } from "./product-list/product-list.component";

import { HttpClientModule } from "@angular/common/http";

import { AppServicesService } from "./app-services.service";
import { ProductComponent } from "./product-list/product/product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { PageNotFaoundComponent } from "./page-not-faound/page-not-faound.component";

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    PageNotFaoundComponent,
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
    DxTemplateModule
  ],
  providers: [AppServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
