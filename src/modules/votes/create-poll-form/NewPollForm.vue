<template>
  <form @submit.prevent="submitForm()" class="form">
    <base-input
      v-model="form.topic"
      type="text"
      label="Name"
      placeholder="Poll name"
    />

    <div>
      <p>Options</p>
      <ul v-if="!!form.options.length">
        <new-option
          v-for="option in form.options"
          :key="option.name"
          :id="option.id"
          :name="option.name"
          @on-delete-click="deleteOption"
        />
      </ul>

      <div>
        <input class="form__input" v-model="option" />
        <button type="button" @click="addOption(option)">Add</button>
      </div>
    </div>

    <base-button variant="primary">Add poll</base-button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import BaseInput from "@/modules/shared/BaseInput.vue";
import BaseButton from "@/modules/shared/BaseButton.vue";
import type { IPoll } from "@/modules/votes/poll.types";
import { usePollsStore } from "@/modules/votes/polls.store";
import NewOption from "@/modules/votes/create-poll-form/NewOption.vue";

type IFormValues = IPoll;

const form = reactive<IFormValues>({
  id: "",
  topic: "",
  author: "",
  options: [],
});
const option = ref("");

const store = usePollsStore();

const deleteOption = (id: string) => {
  form.options = form.options.filter((option) => option.id !== id);
};

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

<style scoped lang="scss">
.form {
  display: flex;
  flex-flow: column;
  margin-top: 40px;
  row-gap: 30px;
  width: 40%;

  &__input {
    background-color: #434343;
    border: none;
    color: #f1f1f1;
    padding: 10px 20px;
  }
}
</style>
