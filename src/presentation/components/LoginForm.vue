<template>
    <div>
        <form>
            <label>Email</label>
            <input type="text" name="" id="" v-model="id" >
            <label for=""></label>
            <input type="password" name="" id="" v-model="password">
            <button type="submit" @click.prevent="handleData()" >login</button>
        </form>
    </div>
</template>



<script>
import {userStore as user} from '@/data/store/user';
import Credentials from '@/domain/entities/credentials';


export default {
    data(){
        return{
            id:"",
            password:""
        }
    },
    setup(){
        const userStore = user();

        return {
            userStore
        }
    },
    methods:{
        handleData(){
            const userCredentials = new Credentials(this.id, this.password);
            this.userStore.loginUser(userCredentials)
        }
    }
}
</script>