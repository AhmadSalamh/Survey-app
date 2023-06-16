<template>
  <page-component title="Dashboard">
    <loader v-if="loading"></loader>
    <section
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700"
    >
      <div
        class="bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down order-1 lg:order-2"
      >
        <h3 class="text-2xl font-semibold">Total Surveys</h3>
        <p
          class="text-8xl font-semibold flex-1 flex items-center justify-center"
        >
          {{ data.totalSurveys }}
        </p>
      </div>
      <div
        class="bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down order-2 lg:order-4"
      >
        <h3 class="text-2xl font-semibold">Total Answer</h3>

        <p
          class="text-8xl font-semibold flex-1 flex items-center justify-center"
        >
          {{ data.totalAnswers }}
        </p>
      </div>
      <div
        class="row-span-2 bg-white shadow-md p-4 order-3 animate-fade-in-down lg:order-1"
      >
        <h3 class="text-2xl mb-2 font-semibold">Latest Survey</h3>
        <img
          :src="data.latestSurvey.image_url"
          alt=""
          class="w-[240px] mx-auto object-cover"
        />
        <h3 class="font-bold text-xl mb-3">{{ data.latestSurvey.title }}</h3>

        <ul>
          <li class="flex justify-between text-sm mb-1">
            <span>Create Date:</span>
            <span>{{ data.latestSurvey.created_at }}</span>
          </li>
          <li class="flex justify-between text-sm mb-1">
            <span>Expire Date:</span>
            <span>{{ data.latestSurvey.expire_date }}</span>
          </li>
          <li class="flex justify-between text-sm mb-1">
            <span>Status</span>
            <span>{{ data.latestSurvey.status ? "Active" : "Draft" }}</span>
          </li>
          <li class="flex justify-between text-sm mb-1">
            <span>Questions:</span>
            <span>{{ data.latestSurvey.questions }}</span>
          </li>
          <li class="flex justify-between text-sm mb-3">
            <span>Answers:</span>
            <span>{{ data.latestSurvey.answers }}</span>
          </li>
          <li class="flex justify-between gap-3">
            <router-link
              :to="{
                name: 'SurveyView',
                params: { id: data.latestSurvey.id },
              }"
              class="flex items-center gap-2 py-2 px-4 border border-transparent text-sm rounded-md text-indigo-500 hover:bg-indigo-700 hover:text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                ></path>
              </svg>
              Edit Survey
            </router-link>
            <button
              class="flex items-center gap-2 py-2 px-4 border border-transparent text-sm rounded-md text-indigo-500 hover:bg-indigo-700 hover:text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Answers
            </button>
          </li>
        </ul>
      </div>
      <div
        class="row-span-2 bg-white shadow-md p-4 order-4 animate-fade-in-down lg:order-3"
      >
        <div class="flex justify-between items-center mb-3 px-2">
          <h3 class="text-2xl font-semibold">Latest Answers</h3>
          <a
            href="javascript:void(0)"
            class="text-sm text-blue-500 hover:decoration-blue-500"
          >
            View all
          </a>
          <div>
            <a
              href="#"
              v-for="answer of data.latestAnswers"
              :key="answer.id"
              class="block p-2 hover:bg-gray-100/90"
            >
              <div class="font-semibold">{{ survey.title }}</div>
              <small
                >Answer Made at:
                <i class="font-semibold">{{ answer.end_date }}</i></small
              >
            </a>
          </div>
        </div>
      </div>
    </section>
  </page-component>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const loading = computed(() => store.state.dashboard.loading);
const data = computed(() => store.state.dashboard.data);

store.dispatch("getDashboardData");
</script>
