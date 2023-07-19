<script setup>
import { computed, ref } from 'vue'
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { v4 as uuidv4 } from 'uuid';

const [store, route, router] = [useStore(), useRoute(), useRouter()]
const todo = route.params.id ? computed(() => store.getters.todoByID(route.params.id)) : null

const validate = () => {
	if (!form.value.name) {
		return alert('Пожалуйста, введите название задачи')
	} 

	store.dispatch('addTodo', {...form.value, id: uuidv4().split('-')[1]})

	form.value.name = ''
	form.value.description = ''
	alert('Задача добавлена!')
}

const replaceTodo = () => {
	if (!form.value.name) {
		return alert('Пожалуйста, введите название задачи')
	} 
	store.dispatch('replaceTodo', {...form.value})
	alert('Задача изменена!')
	router.push({name: 'Todo', params: {id: todo.value.id}})

}
	
	const form = ref({
		id: todo ? todo.value.id : null,
		name: todo ? todo.value.name : '',
		description: todo ? todo.value.description : '',
		status: todo ? todo.value.status : 'Выполнить',
		isDeleted: todo ? todo.value.isDeleted : false,
	})

</script>


<template>
	<div class="container">
		<div class="wrapper w-75 p-3 my-5 mx-auto border border-primary rounded-3 clearfix">
			<div class="form-floating mb-3">
				<input v-model="form.name" type="text" class="form-control" id="todoName" placeholder="Название">
				<label>Название</label>
			</div>

			<!-- <hr> -->

			<div class="form-floating">
				<textarea v-model="form.description" class="form-control" id="todoDescription" placeholder="Описание"></textarea>
				<label>Описание (опционально)</label>
			</div>

			<!-- <hr> -->
<br>
			<div class="d-flex w-75 justify-content-between">
				<input v-model="form.status" value="Выполнить" type="radio" class="btn-check" name="options-outlined" id="toDoToggle" autocomplete="off">
				<label class="btn btn-outline-danger w-25" for="toDoToggle">Выполнить</label>

				<input v-model="form.status" value="Выполняется" type="radio" class="btn-check" name="options-outlined" id="inProgressToggle" autocomplete="off">
				<label class="btn btn-outline-warning w-25" for="inProgressToggle">Выполняется</label>

				<input v-model="form.status" value="Выполнена" type="radio" class="btn-check" name="options-outlined" id="doneToggle" autocomplete="off">
				<label class="btn btn-outline-success w-25" for="doneToggle">Выполнена</label>
			</div>

			<hr>
			
			<button @click="!todo ? validate() : replaceTodo()" type="button" class="btn btn-outline-primary float-end w-25">Сохранить</button>

		</div>
	</div>
</template>

<style scoped>
	#todoDescription{
		height: 10em;
	}
</style>