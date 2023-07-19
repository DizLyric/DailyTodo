<template>
    <div class="container">
        <div class="wrapper d-flex flex-column justify-content-center align-items-center w-100 vh-100">
            <h1>
                Страница не найдена
            </h1>

            <button @click="$router.push({name: 'Home'})" class="btn btn-outline-primary my-4">На главную</button>
        </div>
    </div>
</template>