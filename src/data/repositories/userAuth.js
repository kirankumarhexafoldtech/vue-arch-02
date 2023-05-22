import axios from "axios";

// import BaseRepository from "./BaseRepositories";
export default class UserAuth {
    async userAuth(user){
        try{
            const res=await axios.post(`${process.env.VUE_APP_BASEAPI}login`,user);
            const data=await res.data;
            return data
        }catch(err){
            return false
        }
    }
}