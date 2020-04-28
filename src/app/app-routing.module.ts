import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { PageNotFaoundComponent } from "./page-not-faound/page-not-faound.component";

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "product/:id", component: ProductDetailsComponent },
  { path: '**', component: PageNotFaoundComponent},
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
export class AppRoutingModule {}
