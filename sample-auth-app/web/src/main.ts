import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Amplify, Auth } from 'aws-amplify';
import { AWS_AUTH_CONFIG } from './aws-auth.config';

Amplify.configure(AWS_AUTH_CONFIG);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
