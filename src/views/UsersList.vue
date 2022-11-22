<template>
  <div class="users-list">
    <div class="navigation">
      <div class="navigation__sort">
        <span class="title">Сортировать </span>
        <select v-model="selected">
          <option selected value="alphabetDownscaling">по имени | A-Z</option>
          <option value="alphabetUpscaling">по имени | Z-A</option>
        </select>
      </div>
    </div>

    <div class="user" v-for="(user, index) in sortedUsers" v-bind:key="index">
      <div class="user__firstname">Имя: {{user.first_name}}</div>
      <div class="user__lastname">Фамилия: {{user.last_name}}</div>
      <div class="user__login">Логин: {{user.login}}</div>
      <div class="user__email">email: {{user.email}}</div>      

      <router-link class="user__overview" :to="user.id">Обзор</router-link>
    </div>

    <div class="adding">
      <button class="button adding__button" @click="showAdd=true">Добавить +</button>
      <Add v-if="showAdd" @close="showAdd=false"></Add>
    </div>
  </div>
</template>

<script>
import Add from '../components/ModalAddUser.vue';

export default {
  components: {Add},
  data() {
    return {
      selected: "alphabetDownscaling",
      showAdd: false,
    }
  },

  computed: {
    sortedUsers() {
      function sortStrings(a, b, order) {
        if (order == "down") {
          if (a.toUpperCase() < b.toUpperCase()) return -1;
          if (a.toUpperCase() > b.toUpperCase()) return 1;
          return 0;
        } else {
          if (a.toUpperCase() < b.toUpperCase()) return 1;
          if (a.toUpperCase() > b.toUpperCase()) return -1;
          return 0;
        }
      }

      switch (this.sort) {
        case "alphabetDownscaling":
          return [...this.$store.state.users].sort((a, b) =>
            sortStrings(a.firts_name, b.first_name, "down")
          );
        case "alphabetUpscaling":
          return [...this.$store.state.users].sort((a, b) =>
            sortStrings(a.first_name, b.first_name, "up")
          );
        default:
          return this.$store.state.users;
      }
  },
},

  mounted() {
    this.$store.dispatch("GET_USERS");
  },
};
</script>

<style>
.users-list {
  width: 100%;
}

.user {
  width: 80%;
  margin: auto;
  padding: 15px 30px;
  display: flex;
  flex-flow: column nowrap;
  background-color: #fff;
  border: 3px solid rgb(22, 2, 95);
  border-radius: 8px;
}

.user a {
  font-weight: bold;
  margin: 10px 0;
  color: #2c3e50;
  text-decoration: none;
}

.navigation {
  width: 80%;
  margin: auto;
  margin-bottom: 30px;
}

.navigation__sort {
  padding: 0 10px 0 10px;
  font-size: 14px;
}

select {
  background-color: inherit;
  border: none;
  border-radius: 8px;
  color: #3a3a3a;
  padding: 7px 0;
  transition: 0.4s;
  cursor: pointer;
}

option {
  background-color: inherit;
}

select:hover {
  background-color: #ebebeb;
}

.button {
  border: none;
  margin: 20px 10%;
  border-radius: 8px;
  font-size: 16px;
  padding: 7px 7px 7px 0;
  background-color: inherit;
  cursor: pointer;
  color: inherit;
  transition: 0.4s;
  padding: 7px;
}

.button:hover {
  background-color: #ebebeb;
}
</style>
