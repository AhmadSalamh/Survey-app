<template>
  <section class="h-full">
    <header class="bg-white shadow">
      <div class=" mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          {{ title }}
        </h1>
        <slot name="header"></slot>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="h-96 rounded-lg">
            <slot></slot>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style>
</style>
