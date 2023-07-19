import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'Home',
			path: '/',
			component: () => import('../views/HomeView.vue')
		},
		{
			name: 'ListLayout',
			path: '/list',
			component: () => import('../components/ListLayout.vue'),
			children: [
				{
					name: 'List',
					path: '',
					component: () => import('../views/ListView.vue')
				},
				{
					name: 'TodoLayout',
					path: ':id',
					component: () => import('../components/TodoLayout.vue'),
					children: [
						{
							name: 'Todo',
							path: '',
							component: () => import('../views/TodoView.vue')
						},
						{
							name: 'Edit',
							path: 'edit',
							component: () => import('../views/AddView.vue')
						},
					]
				},
				{
					name: 'Add',
					path: 'add',
					component: () => import('../views/AddView.vue')
				},
				{
					name: 'Deleted',
					path: 'deleted',
					component: () => import('../views/ListView.vue')
				},

			]
		},
		{
			name: 'NotFound',
			path: "/:catchAll(.*)",
			component: () => import('../components/NotFound.vue')
		}

	]
})

export default router
