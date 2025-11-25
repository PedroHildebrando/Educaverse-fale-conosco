const express = require('express'); 
const cors = require('cors'); 
const crypto = require('crypto'); 
// O módulo mysql2/promise não precisa ser requerido aqui, já que está em db.js
// const mysql = require('mysql2/promise'); 

const porta = 3000; 
const app = express(); 
const pool = require('./db.js'); 

app.use(cors()); 
app.use(express.json()); 

// -----------------------------------------------------

// 🔹 ROTA DE CADASTRO 
app.post("/cadastro", async (req, res) => { 
    try { 
        const {nome_sobrenome,email} = req.body; 
        let { senha } = req.body; 

        if (!email || !senha) { 
            return res.json({ resposta: "Preencha e-mail e senha" }); 
        } 

        senha = senha.trim(); 

        if (senha.length < 6) { 
            return res.json({ resposta: "A senha deve ter no mínimo 6 caracteres" }); 
        } 

        // Verifica se o e-mail já existe 
        const [existe] = await pool.query( 
            "SELECT * FROM cadastro WHERE email = ?", 
            [email] 
        ); 

        if (existe.length > 0) { 
            return res.json({ resposta: "E-mail já está cadastrado" }); 
        } 
        
        // Cria hash da senha 
        const hash = crypto.createHash("sha256").update(senha).digest("hex"); 

        // Insere no banco 
        const sqlInsert = "INSERT INTO cadastro (nome_sobrenome, email, senha) VALUES (?, ?, ?)";
        await pool.query(sqlInsert, [nome_sobrenome, email, hash]); 

        return res.json({ resposta: "Cadastro realizado com sucesso!" }); 
    } catch (err) { 
        console.log(err); 
        return res.status(500).json({ resposta: "Erro no servidor" }); 
    } 
}); 

// -----------------------------------------------------

// 🔹 ROTA DE LOGIN 
app.post("/login", async (req, res) => { 
    try { 
        const {nome_sobrenome, email} = req.body; 
        let { senha } = req.body; 

        senha = String(senha || "").trim().replace(" ", ""); 

        if (senha === "") { 
            return res.json({ resposta: "Preencha uma senha" }); 
        } else if (senha.length < 6) { 
            return res.json({ resposta: "A senha tem que conter no mínimo 6 caracteres" }); 
        } 

        const hash = crypto.createHash("sha256").update(senha).digest("hex"); 
        const sql = 'SELECT * FROM cadastro WHERE email = ? AND senha = ?'; 
        const [resultado] = await pool.query(sql, [email, hash]); 

        if (resultado.length === 1) { 
            return res.json({ resposta: "Login realizado com sucesso!" }); 
        } else { 
            return res.status(401).json({ resposta: "Usuário e/ou senha inválido." }); 
        } 

    } catch (error) { 
        console.log(error); 
        return res.status(500).json({ resposta: "Erro no servidor" });
    } 
}); 

// -----------------------------------------------------

app.listen(porta, () => { 
    console.log("Servidor Rodando na porta:", porta); 
});