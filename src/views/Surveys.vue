<template>
  <page-component>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
        <router-link
          :to="{ name: 'SurveyCreate' }"
          class="flex align-center gap-1 py-2 px-3 text-white bg-emerald-400 rounded-md hover:bg-emerald-500"
        >
          <span>Add a new Survey</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </router-link>
      </div>
    </template>

    <loader v-if="loading"></loader>
    <section v-else>
      <section class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        <survey-list-item
          v-for="(survey, ind) in surveys"
          :key="survey.id"
          :survey="survey"
          @delete="deleteSurvey"
          class="opacity animate-fade-in-down flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]"
          :style="{ animationDelay: `${ind * 0.1}s` }"
        ></survey-list-item>
      </section>
      <div class="flex justify-center mt-5 ">
        <nav
          class="relative pb-8 z-0 inline-flex justify-center rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            v-for="(link, i) of links"
            :key="i"
            :disabled="!link.url"
            v-html="link.label"
            href="#"
            aria-current="page"
            @click="getForPage($event, link)"
            class="relative inline-flex align-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
            :class="[
              link.active
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-500'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
              i === 0 ? 'rounded-l-md' : '',
              i === link.length ? 'rounded-r-md' : '',
            ]"
          ></a>
        </nav>
      </div>
    </section>
  </page-component>
</template>

<script setup>
import store from "../store";
import { computed } from "vue";
import { useRouter } from "vue-router";

import PageComponent from "../components/PageComponent.vue";
import SurveyListItem from "../components/SurveyListItem.vue";

const router = useRouter();

const surveys = computed(() => store.state.surveys.data);

const links = computed(() => store.state.surveys.links);

const loading = computed(() => store.state.surveys.loading);

store.dispatch("getSurveys");

function deleteSurvey(survey) {
  if (confirm("Are you sure you want to delete")) {
    return store.dispatch("deleteSurvey", survey.id).then(() => {
      store.dispatch("getSurveys");
    });
  }
}

function getForPage(ev, link) {
  ev.preventDefault();

  if (!link.url || link.active) {
    return;
  }

  store.dispatch("getSurveys", { url: link.url });
}
</script>

