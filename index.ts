#!/usr/bin/env node
import inquirer from "inquirer";
let todos:string[]=[]
let loop=true;
 while(loop){
    const answers:{
        Todo:string,
        addmore:boolean
    }=await inquirer.prompt([
              {
                type:"input",
                name:"todolist",
                message:"add your daily routine"

              },
              {
                type:"confirm",
                name:"addmore",
                message:"add more in your daily routine",
                default:false
              },

    ])
    const {Todo,addmore}=answers;
    console.log(answers);
    
    loop=addmore
    if(Todo){
      todos.push(Todo)
    }else{
      console.log("kindly add yor daily routine");
      
    }
         
    
 }
 if (todos.length>0){
    console.log("Todo list");
    
    todos.forEach(todo=>{
        console.log(todo);
        
    })
 }
 else{
    console.log("no todos");
    
 }
 