<script setup>
import { computed } from 'vue';
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router';
const [store, route, router] = [useStore(), useRoute(), useRouter()]

const todo = computed(() => store.getters.todoByID(route.params.id))
const toggleIsDeleted = () => store.dispatch('toggleIsDeleted', todo.value.id)
const deleteTodo = () => {
    store.dispatch('deleteTodo', todo.value.id)
    alert('Задача удалена!')
    router.push({name: 'Deleted'})
}
    
</script>

<template>
    <div v-if="todo != undefined" class="w-100">
        <div class="wrapper p-5 vh-100 overflow-y-scroll">
            <h2>{{ todo.name }}</h2>
            
            <hr>
            
            <p>{{ todo.description }}</p>
            
            <hr>
            
            <button
            @click="!todo.isDeleted ? toggleIsDeleted() : deleteTodo()"
            class="btn btn-outline-danger w-25"
            type="button">
                {{ !todo.isDeleted ? 'В корзину' : 'Удалить' }}
            </button>
            <button
            @click="!todo.isDeleted ? $router.push({name: 'Edit'}) : toggleIsDeleted()"
            class="btn btn-outline-primary float-end w-25"
            type="button">
                {{ !todo.isDeleted ? 'Редактировать' : 'Вернуть' }}
            </button>
        </div>
    </div>
</template>

<style scoped>
p {
    text-align: justify;
}
</style>