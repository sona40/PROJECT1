const db = require('../db')
const controler = require('../controler/authControler')

class AuthController {
    async registration (req, res) {
        try{
          const email = req.body.email
          const password = req.body.password 
          const sql = "INSERT INTO users(email, password) VALUES (?, ?)"
          db.query(sql, [email, password], function(err, results){
            if(err) console.log(err);
            else console.log("Dannie dabavleni");
          })
        } catch(e) {
           
        }
    }
    async login (req, res) {
        try{
            const login = req.body.login
            const sql = "INSERT INTO users(login) VALUES (?)"
            db.query(sql, [login], function(err, results){
              if(err) console.log(err);
              else console.log("Dannie dabavleni"); 
        })
    } catch (e){
        
        }
    }
  }

module.exports = new AuthController()