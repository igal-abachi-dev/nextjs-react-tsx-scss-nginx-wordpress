import devConfig from '../config.dev.json';
import prodConfig from '../config.prod.json';
import qaConfig from '../config.qa.json';

let _mode = 'dev'

export type configEnv = ('dev' | 'prod' | 'qa');
interface config {
    ApiUrl: string; // "http://127.0.0.1:3000/api"
}

export const configProfider = {
    dev: devConfig as config,
    prod: prodConfig as config,
    qa: qaConfig as config,

    setMode: (mode: configEnv) => {
        _mode = (mode|| 'dev').toLowerCase();
    },
    getConfig: ():config=>{
        switch (_mode) {
            case 'prod':
                return prodConfig as config;
            case 'qa':
                return qaConfig as config;
            case 'dev':
            default:
                return devConfig as config;

        }
    }
};