<script setup>
import { useStore } from 'vuex';
const store = useStore()

const changeParams = (obj) => store.dispatch('changeParams', obj)

</script>

<template>
	<div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100" style="width: 220px;">
		<p class="fs-4 m-0 text-center">Меню</p>
		<hr>
		<ul class="nav nav-pills flex-column">
			<li class="nav-item">
				<router-link
				:to="{ name: 'Home' }"
				class="nav-link text-white"
				>
					<i class="bi bi-house-door"></i>
					Главная
				</router-link>

			</li>
			<li>
				<router-link
				:to="{ name: 'List' }"
				:class= "{'text-white' : $route.name != 'List'}"
				class="nav-link"
				>
					<i class="bi bi-journal-text"></i>
					Список задач
				</router-link>

			</li>
			<li>
				<router-link
				:to="{ name: 'Deleted' }"
				class="nav-link"
				:class="{'text-white' : $route.name != 'Deleted'}"
				>
					<i class="bi bi-trash"></i>
					Корзина
				</router-link>

			</li>
			<li>
				<router-link :to="{ name: 'Add' }" class="nav-link text-warning">
					<i class="bi bi-journal-plus"></i>
					Добавить задачу
				</router-link>

			</li>
		</ul>
		<hr>
		<div v-if="$route.name == 'List' || $route.name == 'Deleted'">

			<div class="d-flex justify-content-between flex-wrap">
				<h3 @click="changeParams({sorting: 'charASC'})" class="my-auto"><i class="bi bi-sort-alpha-down"></i></h3>
				<h3 @click="changeParams({sorting: 'charDESC'})" class="my-auto"><i class="bi bi-sort-alpha-up"></i></h3>
				<h3 @click="changeParams({sorting: 'numASC'})" class="my-auto"><i class="bi bi-sort-numeric-down"></i></h3>
				<h3 @click="changeParams({sorting: 'numDESC'})" class="my-auto"><i class="bi bi-sort-numeric-up"></i></h3>
			</div>

			<br>

			<div class="d-flex justify-content-between flex-wrap">
				<h3 @click="changeParams({filtering: 'to do'})" class="my-auto"><i class="bi bi-clipboard2-x"></i></h3>
				<h3 @click="changeParams({filtering: 'progress'})" class="my-auto"><i class="bi bi-clipboard2-pulse"></i></h3>
				<h3 @click="changeParams({filtering: 'done'})" class="my-auto"><i class="bi bi-clipboard2-check"></i></h3>
			</div>

			<hr>
	
			<button @click="changeParams({sorting: null, filtering: null})" class="btn btn-outline-danger">Сбросить фильтры</button>
		</div>


	</div>
</template>

<style scoped>
h3 {
	cursor: pointer;
}

h3:hover {
	color: #FFC107;
}
</style>