import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list/product-list.component";
import { PageNotFaoundComponent } from "./page-not-faound/page-not-faound.component";

import { ContentComponent } from './content/content.component';
import { OfferComponent } from './offer-list/offer/offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';

import { LogOnComponent } from './log-on/log-on.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "", component: LogOnComponent },
  {
    path: "content", component: ContentComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'offer',
        pathMatch: 'full'
      },
      { path: 'offer', component: OfferListComponent, outlet: 'content-outlet', canActivate: [AuthGuard] }
    ]
  },
  { path: '**', component: PageNotFaoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
