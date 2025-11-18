const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const porta = 3000
const app = express()
const pool = require('./db.js')
//módulo crypto
const crypto = require('crypto')

app.use(cors())
//consegue acessar os dados do body
app.use(express.json())

//Criando uma rota

app.post("/faleconosco",async(req,res)=>{
    try {
        const {nome_completo,email,mensagem,telefone} = req.body
       
        sql = `insert into fale_conosco (nome_completo,email,telefone,mensagem) values (?,?,?,?)`
        let [resultado2] = await pool.query(sql, [nome_completo,email,telefone,mensagem])
        if(resultado2.affectedRows == 1){
            res.json({"resposta":"Resposta enviada com sucesso!"})
        }else{
            res.json({"resposta":"Erro ao enviar!"})
        }
    } catch (error) {
        console.log(error)
    }
})


app.listen(porta,()=>{
    console.log("Servidor Rodando")
})