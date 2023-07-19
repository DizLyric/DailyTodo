<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from "vue-router";

const [store, route, isHover] = [useStore(), useRoute(), ref(null)]
const list = computed(() => store.getters.getTodos(route.name))

const classes = {
	danger: ['bg-danger-subtle', 'border-danger-subtle', 'text-danger-emphasis'],
	warning: ['bg-warning-subtle', 'border-warning-subtle', 'text-warning-emphasis'],
	success: ['bg-success-subtle', 'border-success-subtle', 'text-success-emphasis']
}
</script>

<template>
	<div class="d-flex flex-column justify-content-center align-items-center w-100">

		<ol v-if="list.length" class="list-group list-group-numbered p-3 w-100 vh-100 overflow-y-scroll">
			<li
			v-for="(todo, index) in list" :key="todo.id"
				@click="$router.push(`/list/${todo.id}`)"
				@mouseover="isHover = index"
				@mouseout="isHover = null"
				:class="{ 'active': isHover == index }"
				class="list-group-item d-flex justify-content-between align-items-start mb-3"
				>

				<div class="ms-2 me-auto">
					<div class="fw-bold">{{ todo.name }}</div>
					<p class="text-justify">{{ todo.description }}</p> 
				</div>
				<span
				:class="todo.status == 'Выполнить' ? classes.danger : todo.status == 'Выполняется' ? classes.warning : classes.success"
				class="badge border rounded-pill"
				>
					{{ todo.status }}
				</span>
			</li>

		</ol>

		<h1 v-else>
			{{ $route.name == 'List' ? 'Список задач пуст' : 'Корзина пуста' }}
		</h1>
	</div>
</template>

<style scoped>
.list-group-item {
	cursor: pointer;
}

.text-justify{
	text-align: justify;
}
</style>