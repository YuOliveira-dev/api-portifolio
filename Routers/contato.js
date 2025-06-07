const express = require('express')
const router = express.Router();
const db = require("../db");

router.post('/', async (req, res) => {
    const {nome, email, mensagem} = req.body;
    
    if (!nome || !email || !mensagem) {
        return res.status(400).json({erro: 'Todos os campos são obrigatórios'});
    }
    
    try {
        await db.execute(
            'INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)',
            [nome, email, mensagem]
        );
        res.status(200).json({ sucesso: true});
        
    } catch (erro) {
        console.error(erro);
        res.status(500).json({erro: 'erro ao salvar no banco'});
    };
});

module.exports = router;