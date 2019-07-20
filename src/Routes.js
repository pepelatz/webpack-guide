import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';
import NotFound from './pages/NotFound';
import App from './App';

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true
      },
      {
        component: About,
        path: '/about'
      },
      {
        component: Todo,
        path: '/todo'
      },
      {
        component: NotFound
      }
    ]
  }
];
