const mysql = require("mysql2");

const connection = mysql.createConnection({
//  host: "localhost", // MYSQL HOST NAME
//  user: "root", // MYSQL USERNAME
//  password: "", // MYSQL PASSWORD
//  database: "nodejs", // MYSQL DB NAME
//  port: 3306,

  host: "bfathyad9xbsrj1bxsth-mysql.services.clever-cloud.com", // MYSQL HOST NAME
  user: "udqc0upkadqgwzmi", // MYSQL USERNAME
  password: "e7M5GvcItRRko8HTco0c", // MYSQL PASSWORD
  database: "bfathyad9xbsrj1bxsth", // MYSQL DB NAME
  port: 3306,


});

connection.connect((err) => {
  if (!err) console.log("Database connected successfully");
  else
    console.log(
      "Database connection failed" + JSON.stringify(err, undefined, 2)
    );
});

module.exports = connection;

/**
 * En Node.js, module es un objeto global que representa el módulo actual
 * en el cual se está ejecutando el código. Proporciona una forma de exportar
 * valores desde un módulo para que puedan ser utilizados en otros módulos.
 */
