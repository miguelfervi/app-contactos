/** Import containers */
import App from '../components/App';
import Detalle from '../components/Detalle';

const routes = [
  {
    exact: true,
    path: '/',
    component: App,
  },
  {
    exact: false,
    path: '/detail/:id',
    component: Detalle,
  },
];

export default routes;
