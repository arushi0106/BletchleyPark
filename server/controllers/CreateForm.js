export const getCreateForm = (req,res) =>{
    console.log(req.body);
    const names=req.body.clue;

const re = /\s*(?:;|$)\s*/
const nameList = names.split(re)
var myjson=[];
nameList.forEach(myfun);


function myfun(item, index)
{
    console.log(item);
    const se = /\s*(?:,|$)\s*/
    const x=item.split(se);
    var input_json = 
        {
          clue: x[0],
          answer:  x[1],
        }
        myjson.push(input_json);
    console.log(x[0]);
    console.log(x[1]);

}
console.log(myjson);

    res.send('THIS WORKS');
}

// clue,ans;