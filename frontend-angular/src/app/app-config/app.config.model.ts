export interface IAppConfig {
  env: {
    name: string;
  };
  pathFolderSite: string;
  prod: boolean;
  baseAPI: string;
  subscriptionKey: string;
  appInsights: {
    instrumentationKey: string;
  }
}
