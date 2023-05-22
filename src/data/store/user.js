
import { defineStore } from "pinia";
import UserAuth from "../repositories/userAuth";

const userAuthInstance=new UserAuth();

export const  userStore = defineStore("userstore", {
    actions:{
        async loginUser(user){
          const res=await userAuthInstance.userAuth(user);
          console.log(res)
        }
    }
})