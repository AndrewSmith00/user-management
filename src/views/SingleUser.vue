<template>
    <div class="userpage">
        <div class="user__data">
            <span class="user__label">Имя: </span>{{user.first_name}}
        </div>
        <div class="user__data">
            <span class="user__label">Фамилия: </span>{{user.last_name}}
        </div>
        <div class="user__data">
            <span class="user__label">Логин: </span>{{user.login}}
        </div>
        <div class="user__data">
            <span class="user__label">EMAIL: </span>{{user.email}}
        </div>
        
        <div class="input-wrapper">
            <button class="button button_delete" @click="deleteUser">Удалить</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userId: null,
            }
        },

        created() {
            this.userId = this.$route.params.id
        },

        computed: {
            user() {
                return this.$store.getters.GET_BY_ID(this.userId)
            }
        },

        methods: {
            async deleteUser() {
                await this.$store.dispatch('DELETE_USER', this.userId)
                this.$store.push('/')
            }
        }
    }
</script>

<style>
.userpage {
    width: 50%;
    margin-left: 10%;
}

.user__data {
    display: grid;
    grid-template-columns: 150px 150px;
    padding: 20px 0;
    font-size: 24px;
}

.user__label {
    font-weight: 600;
} 

.button_delete {
    margin: 40px 0;
    color: #fff;
    background-color: rgb(7, 3, 35);
}

.button_delete:hover {
    background-color: rgb(22, 2, 95);
}
</style>