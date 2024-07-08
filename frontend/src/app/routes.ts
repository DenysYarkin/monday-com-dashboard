import {HomeComponent} from "./components/home/home.component";
import {Routes} from "@angular/router";
import {OauthCallbackComponent} from "./components/oauth-callback/oauth-callback.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    // TODO:
    path: 'login',
    redirectTo: 'https://auth.monday.com/oauth2/authorize?'// +
  },
  {
    path: 'callback',
    component: OauthCallbackComponent,
    title: 'OAuth2 Callback'

  }
];
export default routeConfig;

