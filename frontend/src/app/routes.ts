import {HomeComponent} from "./components/home/home.component";
import {Routes} from "@angular/router";
import {OauthCallbackComponent} from "./components/oauth-callback/oauth-callback.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginComponent} from "./components/login/login.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'callback',
    component: OauthCallbackComponent,
    title: 'OAuth2 Callback'

  }
];
export default routeConfig;

