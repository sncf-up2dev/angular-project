import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ColisComponent } from "./components/colis.component";
import { ColisDetailsComponent } from "./components/colis-details.component";

const routes: Routes = [
    {
        path: '',
        title: 'Colis',
        component: ColisComponent,
        children: [
            {
                path: ':colisId',
                component: ColisDetailsComponent,

            },
        ]
    }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ColisRoutingModule { }