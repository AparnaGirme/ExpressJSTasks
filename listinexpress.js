import bodyParser from 'body-parser';
import express from 'express';
import {LinkedList} from './linked-list';


const app = express();

var ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.print();

app.get('/',(req, res) =>{
    return res.send(Object.values(ll.print()));
});

app.post('/:val', (req, res) => {
    var val = parseInt(req.params.val);
    ll.add(val);
    return res.send(Object.values(ll.print()));
});

app.put('/:val1/:val2',(req, res) => {
    var val1 = parseInt(req.params.val1);
    var val2 = parseInt(req.params.val2);
    console.log(val1+" "+val2);
    var rem = ll.updateVal(val1, val2);
    if(rem) res.send(Object.values(ll.print()));
    else return res.send('Could not find the value '+ val1);
});

app.delete('/:val',(req, res) => {
    var val = parseInt(req.params.val);
    var rem = ll.removeVal(val);
    if(rem != -1) res.send(Object.values(ll.print()));
    else return res.send('Could not find the value '+ val);
});

var port = process.env.PORT || 3000;
app.listen(port, () => 
    console.log('App listening  on port %s!',port),
);