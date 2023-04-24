import App from './App.vue';
import MovieDialog from './components/MovieDialog.vue';

const routes = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/detail/:movieId',
    name: 'movie-details',
    components: { MovieDialog },
    props: true,
  },
];

export default routes;
