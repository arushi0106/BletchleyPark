
import Crossword from "../models/crossword.js"

export const getnewsfeed =  (req, res) => {
   let cross; 
    Crossword.find({isContest:false}, function (err, Crosswords) {
        // console.log(Crosswords);
        if (err) {
            cross = "error";
        }
        else {
            cross = Crosswords;
            // console.log(cross);
            res.send(cross);
        }
        // console.log(cross);


    })
    // console.log(cross);
    // res.send(cross);
}