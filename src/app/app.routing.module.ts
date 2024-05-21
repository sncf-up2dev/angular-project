import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LivraisonsComponent } from "../features/livraisons/components/livraisons.component";
import { NotFoundComponent } from "./components/not-found.component";
import { LivraisonGuard, livraisonGuard } from "../features/livraisons/guards/livraison.guard";

const routes: Routes = [
    {
        path: 'colis',
        title: 'Colis',
        loadChildren: () => import('../features/colis/colis.module').then(m => m.ColisModule)
    },
    { path: 'livraisons', title: 'Livraisons', component: LivraisonsComponent, canActivate: [livraisonGuard] },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }