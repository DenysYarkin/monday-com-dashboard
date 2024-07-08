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
    path: 'login',
    redirectTo: 'https://auth.monday.com/oauth2/authorize?'// +
      // `client_id=${environment.clientId}&` +
      //
      // // TODO: replace
      // `redirect_uri=${"http://localhost:4200/callback"}`,
  },
  {
    path: 'callback',
    component: OauthCallbackComponent,
    title: 'OAuth2 Callback'

  }
];
export default routeConfig;

