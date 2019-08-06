import Vue from 'vue'
import Router from 'vue-router'
import Dlu from '@/pages/dlu/Dlu'
import Kuangia from '@/pages/kuangia/Kuangia'
import Yuangong from '@/pages/yuangong/Yuangong'
import Ztsz from '@/pages/xinzi/Ztsz'
import Jcxxsz from '@/pages/xtgl/Jcxxsz'
import gongzi from '@/pages/gongzi/gongzi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dlu',
      component: Dlu
    },
		{
		  path: '/Kuangia',
		  name: 'Kuangia',
		  component: Kuangia
		},
		{
		  path: '/Yuangong',
		  name: 'Yuangong',
		  component: Yuangong
		},

		{
		  path: '/Ztsz',
		  name: 'Ztsz',
		  component: Ztsz
		},
		{
		  path: '/Jcxxsz',
		  name: 'Jcxxsz',
		  component: Jcxxsz
		},
    			{
      path: '/gongzi',
      name: 'gongzi',
      component: gongzi
    },
    	{
      path: '/Yuangong',
      name: 'Yuangong',
      component: Yuangong
    },
  ]
})
