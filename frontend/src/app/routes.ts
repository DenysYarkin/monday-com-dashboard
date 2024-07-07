import {HomeComponent} from "./home/home.component";
import {BoardsListComponent} from "./boards-list/boards-list.component";
import {Routes} from "@angular/router";
import {environment} from '../environments/environment';
import {OauthCallbackComponent} from "./oauth-callback/oauth-callback.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'boards',
    component: BoardsListComponent,
    title: 'Home details',
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

