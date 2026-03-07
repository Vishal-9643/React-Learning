import conf from "../Conf/conf";
import { Client, Account , ID } from "appwrite";

export class Authservice{
     client = new Client();
     account;

     constructor(){
          this.client
              .setEndpoint(conf.URL)
              .setProject(conf.PID);
          this.account = new Account(this.client);
          
     }

     async createAccount({email,password,name}){
          try{
               const user = await this.account.create(ID.unique(),email,password,name);
               if(user){
                    return this.login({email,password});
               }else{
                    return user;
               }

          }catch(error){
               throw error;
          }

     }

     async login({email,password}){
          try{
               return await this.account.createEmailSession(email,password);
          }catch(error){
               throw error;
          }
     }

     async getUser(){
          try{
               return await this.account.get();
          }
          catch(error){
               throw error;
          }

          return null;
     }

     async logout(){
          try{
               await this.account.deleteSessions();
          }catch(error){
               throw error;
          }
     }
}

const authservice = new Authservice();

export default authservice;