<script setup lang="ts">
import { reactive, ref } from "vue";
import type { IPoll } from "@/types/poll";
import { usePollsStore } from "@/store/store";
import { v4 as uuidv4 } from "uuid";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";

type IFormValues = IPoll;

const form = reactive<IFormValues>({
  id: "",
  topic: "",
  author: "",
  options: [],
});
const option = ref("");

const store = usePollsStore();

const addOption = (newOption: string) => {
  form.options = [
    ...form.options,
    { id: uuidv4(), name: newOption, votes: [] },
  ];
  option.value = "";
};

const submitForm = () => {
  store.addPoll({ ...form, id: uuidv4() });
};
</script>

<template>
  <main class="page-layout">
    <h1>Create a poll</h1>

    <form @submit.prevent="submitForm()" class="form">
      <base-input
        v-model="form.topic"
        type="text"
        label="Name"
        placeholder="Poll name"
      />

      <base-input
        v-model="form.author"
        type="text"
        label="Author"
        placeholder="Your name"
      />

      <div>
        <p>Options</p>
        <ul v-if="!!form.options.length">
          <li v-for="option in form.options" :key="option.name">
            {{ option.name }}
          </li>
        </ul>

        <div>
          <input class="form__input" v-model="option" />
          <button type="button" @click="addOption(option)">Add</button>
        </div>
      </div>

      <base-button variant="primary">Add poll</base-button>
    </form>
  </main>
</template>

<style scoped lang="scss">
.page-layout {
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 40px;
  width: 100%;
}

.form {
  display: flex;
  flex-flow: column;
  margin-top: 40px;
  row-gap: 30px;

  &__input {
    background-color: #2c3e50;
    border: none;
    color: #f1f1f1;
  }
}
</style>
