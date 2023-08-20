import {logger, consoleTransport} from 'react-native-logs';

export default function useLog(level: string) {
  const config = {
    levels: {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3,
    },
    transport: consoleTransport,
    transportOptions: {
      colors: {
        info: 'blueBright',
        warn: 'yellowBright',
        error: 'redBright',
      },
      extensionColors: {
        root: 'magenta',
        dev: 'green',
      },
    },
  };

  const log = logger.createLogger(config);

  if (level === 'data') {
    return log.extend('data');
  } else {
    return log.extend('root');
  }
}
