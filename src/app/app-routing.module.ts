import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { MainComponent } from "./pages/main/main.component";
import { HomeComponent } from "./pages/home/home.component";
import { NewPostComponent } from "./components/new-post/new-post.component";
import { PersonalComponent } from "./components/personal/personal.component";

const routes: Routes = [
    { path: "", redirectTo: "/main/home", pathMatch: "full" },
    { path: "main", component: MainComponent, children: [
        { path: "home", component: HomeComponent },
        { path: "new-post", component: NewPostComponent},
        { path: "personal", component: PersonalComponent }
    ] },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
