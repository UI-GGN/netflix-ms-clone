import { ConfigModuleOptions } from '@nestjs/config';
import appConfig from './app.config';

const getEnvFilePath = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
    return '.env';
  }
  return `${process.env.NODE_ENV}.env`;
};

const configModuleOptions: ConfigModuleOptions = {
  envFilePath: getEnvFilePath(),
  isGlobal: true,
  load: [appConfig],
};

export default configModuleOptions;
