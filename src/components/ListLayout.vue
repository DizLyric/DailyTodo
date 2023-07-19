<script setup>
import { RouterView } from 'vue-router';
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
	<main class="d-flex">
		<Sidebar />
		<RouterView />
	</main>
</template>