import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import BrowsePage from '../components/BrowsePage'
import InvestmentPage from '../components/InvestmentPage'
import CompleteBioPage from '../components/CompleteBioPage'
import PaymentPage from '../components/Paymentpage'
import AboutPage from '../components/AboutPage'
import HelpPage from '../components/HelpPage'
import HowtoPage from '../components/HowtoPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/browse/page/:page',
      name: 'browse',
      component: BrowsePage
    },
    {
      path: '/browse',
      redirect: 'browse/page/1'
    },
    { 
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/investment/:id',
      name: 'investment',
      component: InvestmentPage
    },
    {
      path: '/help',
      name: 'help',
      component: HelpPage
    },
    {
      path: '/complete',
      name: 'completeBio',
      component: CompleteBioPage
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentPage
    },
    {
      path: '/howto',
      name: 'howto',
      component: HowtoPage
    }
  ]
})

