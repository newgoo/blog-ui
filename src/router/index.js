import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';

import Idx from '../components/idx/Index.vue';
import Classification from '../components/idx/Classification.vue';
import AboutMe from '../components/idx/AboutMe.vue';
import Archive from '../components/idx/Archive.vue';
import Tag from '../components/idx/Tag';
import Detail from '../components/blog/Detail';
import ClassificationDetail from '../components/class/classificationdetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          name: 'index',
          path: '/',
          component: Idx
        },
        {
          name: 'detail',
          path: 'blog/:id',
          component: Detail
        },
        {
          name: 'classification',
          path: '/classification',
          component: Classification
        },
        {
          name: 'classificationdetail',
          path: '/classification/:id',
          component: ClassificationDetail
        },
        {
          name: 'archive',
          path: '/archive',
          component: Archive
        },
        {
          name: 'aboutme',
          path: '/aboutme',
          component: AboutMe
        },
        {
          name: 'tag',
          path: '/tag',
          component: Tag
        }
      ]
    }
  ]
});
