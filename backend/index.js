const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());

app.use(express.static('public'));
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true })); 

const data = [{
                id: 0,
                name: 'Taco',
                age: '16',
                JS: false
			},
			{
                id: 1,
                name: 'Chicken',
                age: '21',	
                JS: false
			}];

// Get all of people
app.get('/people',function(req,res){
res.json(data);
})

// Get a single person
app.get('/people/:id',function(req,res){
	let id = req.params.id;
	const single = data.filter(singleData => {
		if(singleData.id == id ) {
			return true;
		}
	})
	res.json(single);
})
// Post a new person
app.post('/people',function(req,res){
	let person = {id:req.body.id,name:req.body.name,age:req.body.age, JS:req.body.JS}
	data.push(person);
    res.json(data);
})

// Delete a person
app.delete('/people/:id',function(req,res){
	let id = req.params.id;

	data.filter((person) => {
		if(person.id == id) {
			var index =data.indexOf(person);
			data.splice(index,1);
		}
	})

	res.json(data);
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});