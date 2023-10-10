import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yossoi.navigator',
  appName: 'navigator',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
