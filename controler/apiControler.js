const db = require('../db')

class apiController{

async getUsers (req, res){
    try{
        const users = db.query("Select * From users", function(err, results){
          if(err) console.log(err);
          else console.log(users);
        }) 
    }catch(e){
     
    }
} 

async addUsers (req, res){
    try{
       
    }catch(e){
     
    }
} 
async getPosts (req, res){
    try{
     
   
    } catch(e){
        
    }
    
}

async addPosts (req, res){
    try{
   
    } catch(e){
        
    }
    
}


async getCommentsByPost (req, res){
    try{
     
    } catch(e){
        console.log(e)
    }
    
}

}


module.exports = new apiController()