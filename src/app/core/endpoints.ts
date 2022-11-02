import { environment } from 'src/environments/environment';

const base: string = '/api/';

const endpoints: any = {
  users: 'users',
  any: 'xxx',
};

Object.keys(endpoints).forEach((key: string) => {
  endpoints[key] = environment.apiUrl + base + endpoints[key];
});

export default endpoints;
