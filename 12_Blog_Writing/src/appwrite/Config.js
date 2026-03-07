import conf from "../Conf/conf";
import { Client, ID , Databases , Storage , Query } from "appwrite";

export class Sevice{
     client = new Client();
     database;
     storage;

     constructor(){
          this.client
                 .setEndpoint(conf.URL)
                 .setProject(conf.PID);
          this.database = new Databases(this.client);
          this.storage = new Storage(this.client);
     }

     async createPost({title,slug,content,Image,status,userID}){
          try {
               return await this.database.createDocument(
                    conf.DBID,
                    conf.COLID,
                    slug,
                    {
                         title,
                         content, 
                         Image,
                         status,
                         userID
                    }
               )
               
          } catch (error) {
               console.log("Appwrite error",error );
               
          }

     }

     async updatePost(slug,{title,content,Image,status}){
          try {
               return await this.database.updateDocument(
                    conf.DBID,
                    conf.COLID,
                    slug,
                    {
                         title,
                         content, 
                         Image,
                         status
                    }
               )
          } catch (error) {
               console.log("Appwrite error",error );
          }

     }

     async deletePost(slug){
          try {
                await this.database.deleteDocument(
                    conf.DBID,
                    conf.COLID,
                    slug
               )
               return true;
          } catch (error) {
               console.log("Appwrite error",error );
               return false;
          }
     }

     async getPost(slug){
          try {
               return await this.database.getDocument(
                    conf.DBID,
                    conf.COLID,
                    slug
               )
          } catch (error) {
               console.log("Appwrite error",error );
               return false;
          }
     }

     async getPosts(queries = [Query.equal("status","active")]){
          try {
               return await this.database.listDocuments(
                    conf.DBID,
                    conf.COLID,
                    queries
               )
          } catch (error) {
               console.log("Appwrite error",error );
               return false;
          }

     }

     // File Uplaod
     async uploadFile(file){
          try {
               return await this.storage.createFile(
                    conf.BID,
                    ID.unique(),
                    file
               )
          } catch (error) {
               console.log("Appwrite error",error );
               return false;
          }
     }

     async deleteFile(fileID){
          try {
                await this.storage.deleteFile(
                    conf.BID,
                    fileID
               )
               return true;
          } catch (error) {
               console.log("Appwrite error",error );
               return false;
          }
     }

     getFilePreview(fileID){
          return this.storage.getFilePreview(
               conf.BID,
               fileID
          )
     }
}

const service = new Sevice();

export default service;
