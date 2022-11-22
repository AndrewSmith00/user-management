<template>
  <div class="adding-page">
    <form action="submit">
      <div class="input-wrapper">
        <label class="user__label" for="last_name">Введите имя: </label>
        <input type="text" name="first_name" v-model="first_name" />
      </div>

      <div class="input-wrapper">
        <label class="user__label" for="last_name">Введите фамилию: </label>
        <input type="text" name="last_name" v-model="last_name" />
      </div>

      <div class="input-wrapper">
        <label class="user__label" for="login">Введите логин: </label>
        <input type="text" name="login" v-model="login" />
      </div>

      <div class="input-wrapper">
        <label class="user__label" for="email">Введите email:</label>
        <input type="text" name="email" v-model="email" />
      </div>
    </form>

    <div class="input-wrapper">
    <button class="button button_add" @click="addUser">Добавить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first_name: null,
      last_name: null,
      login: null,
      email: null,
    }
  },

  methods: {
    addUser: {
      addUser() {
        if (
            this.first_name !== null &&
            this.last_name !== null &&
            this.login !== null &&
            this.email !== null
        ) {
            let newUser = {
                first_name: this.first_name,
                last_name: this.last_name,
                login: this.login,
                email: this.email
            }

            this.$store.dispatch("POST_USER", newUser);
        }

        this.$emit('close');
    }
    }
  }
}
</script>

<style>
  .adding-page {
    width: 50%;
    margin-left: 10%;
}

  .button_add {
    padding: 10px 7px;
    margin: 0;
    font-size: 20px;
    background-color: rgb(7, 3, 35);
    color: #fff;
  }

  .button_add:hover {
    background-color: rgb(22, 2, 95);
  }

  .adding-page .input-wrapper {
    margin-bottom: 30px;
  }
</style>
