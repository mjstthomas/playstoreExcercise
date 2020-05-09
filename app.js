let express = require('express')
let morgan = require('morgan')
let cors = require('cors')
const playstore = require('./playstore.js')
let app = express()




app.use(morgan('common'))
app.use(cors())

app.get('/playstore', (req, res)=>{

	res.json(playstore)
})

app.listen(8000, ()=>{
	console.log('listening!')
})