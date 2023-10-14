const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "seu_host",
  user: "seu_usuario",
  password: "sua_senha",
  database: "seu_banco_de_dados",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }

  console.log("Conexão com o banco de dados estabelecida com sucesso.");

  // Aqui você pode realizar consultas ou outras operações no banco de dados

  connection.end((err) => {
    if (err) {
      console.error("Erro ao encerrar a conexão:", err);
      return;
    }
    console.log("Conexão com o banco de dados encerrada.");
  });
});
