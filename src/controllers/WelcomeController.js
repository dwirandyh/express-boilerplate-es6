import express from 'express';

class WelcomeController {
    async index(req, res){
        res.render('welcome', { title: 'Express ES 6 MVC Boilperplate'});
    }
}

export default new WelcomeController();