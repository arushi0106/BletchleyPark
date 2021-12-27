
import Crossword from "../models/crossword.js"

export const getnewsfeed =  (req, res) => {     // for getting newsfeed of user
   let cross; 
    Crossword.find({isContest:false}, function (err, Crosswords) {
        
        if (err) {
            cross = "error";
        }
        else {
            cross = Crosswords;
            
            res.send(cross);        // sending crosswords
        }
       


    })
    
}