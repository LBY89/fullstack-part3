const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const content = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://BaoyingLiu:${password}@cluster0.xcnc1.mongodb.net/phoneApp?retryWrites=true&w=majority`
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  content: String,
  number: String,
  date: Date,
  important: Boolean,
})

const Person = mongoose.model('Person', personSchema)


Person.find({}).then(result => {
  console.log('phonebook:')
  result.forEach(person => {
    console.log(person.content, person.number)
  })
  mongoose.connection.close()
})