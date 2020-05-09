let express = require('express')
let morgan = require('morgan')
let cors = require('cors')
const playstore = require('./playstore.js')
let app = express()




app.use(morgan('common'))
app.use(cors())

app.get('/playstore', (req, res)=>{
	const { sort, genres } = req.query
	if (sort){
		if(!['App', 'Rating'].includes(sort)){
			return res.send('sort must be by either App or Rating')
		}
	}
	if (sort){
	 playstore.sort((a, b) => {
		return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0
	})
}
	if (genres){
		if(!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genres)){
			return res.send('genres must be by either Action, Puzzle, Strategy, Casual, Arcade, Card')
		}
	}

	const results = () =>{
		return playstore.filter(item => item.Genres === genres)
	} 

	if (genres){
		return res.json(results())
	}

	res.json(playstore)
})

app.listen(8000, ()=>{
	console.log('listening!')
})