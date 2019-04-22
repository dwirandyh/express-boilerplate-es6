import express from 'express';
import {Todo, TodoItem} from '../../database/models';

class WelcomeController {
    async index(req, res){
        const getTodo = Todo.findOne();
        const getTodoItems = getTodo.then(res => {
            return TodoItem.findAll({
                where: {todoId: res.id}
            })
        })

        // promise all
        Promise.all([getTodo, getTodoItems]).then(result => {
            var todo = result[0];
            var todoItems = result[1];
            res.render('welcome', { title: todo.title });
        });
        
    }
}

export default new WelcomeController();