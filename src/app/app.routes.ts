import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admen/login/login.component';
import { LayoutComponent } from './pages/admen/layout/layout.component';
import { ProductComponent } from './pages/admen/product/product.component';
import { CatogreyComponent } from './pages/admen/catogrey/catogrey.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CatogryproductComponent } from './pages/website/catogryproduct/catogryproduct.component';

export const routes: Routes = [
    {path:'',
        redirectTo:'shop'
        ,pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'shop',
        component:LandingComponent,
       
    },
    {path:'',
        component:LayoutComponent,
        children:[
           { path:'product',
            component:ProductComponent
           }
          , { path:'catogry',
            component:CatogreyComponent
           }
        ]
    }
        ,{path:'catogry/:name' , component:CatogryproductComponent}
];
