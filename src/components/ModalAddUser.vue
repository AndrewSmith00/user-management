<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">Добавить пользователя</div>

          <div class="modal-body">
            <form id="form" action="submit" @submit.prevent="addUser">
              <div class="input-wrapper">
                <label for="first_name">Введите имя: </label>
                <input name="first_name" type="text" v-model="first_name" />
              </div>
              <div class="input-wrapper">
                <label for="first_name">Введите фамилию:</label>
                <input name="last_name" type="text" v-model="last_name" />
              </div>
              <div class="input-wrapper">
                <label for="first_name">Введите логин:</label>
                <input name="login" type="text" v-model="login" />
              </div>
              <div class="input-wrapper">
                <label for="first_name">Введите email:</label>
                <input name="email" type="text" v-model="email" />
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <div class="input-wrapper">
            <button
              class="button"
              type="button"
              @click="$emit('close')"
            >
              Отмена
            </button>
            <button class="button" type="submit" form="form">
              Добавить
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      first_name: null,
      last_name: null,
      login: null,
      email: null,
    };
  },

  methods: {
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
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 60%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.input-wrapper {
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.input-wrapper>input {
    border-radius: 8px;
}
</style>
