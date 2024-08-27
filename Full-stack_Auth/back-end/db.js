import mysql from "mysql";

//Create a connection pool (recomended for handling multiple connections ))
const pool = mysql.createPool({
  // MySql Connection String
  // if there is error connection mysql execute this :
  // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
  host: "localhost",
  user: "root",
  password: "@salom@0094",
  database: "signup"
});

// connect to Mysql
// db.connect((err) => {
//   if (err) {
//     return console.error("Error connection to MySQL : " + err.stack);
//   }

//   console.log("Connected to MySQL as ID " + db.threadId);
// });

// Export the pool for use in other modules
export default pool;
