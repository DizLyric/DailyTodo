<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <main class="d-flex justify-content-center align-items-center vh-100">
        <div class="jumbotron">
            
            <h1 class="display-4">
                <img src="../assets/logo.png" alt="logo" width="100" height="100">
                Daily Todo
            </h1>
            <p class="lead">Менеджер задач № 1 в мире. Он поможет вам обрести концентрацию, организованность и покой</p>
            <hr class="my-4">
            <p>Организуйте работу и жизнь ПРЯМО СЕЙЧАС</p>
            <p class="lead">

                <button @click="$router.push({name: 'List'})" class="btn btn-outline-primary btn-lg">НАЧАТЬ</button>
            </p>
        </div>
    </main>
</template>