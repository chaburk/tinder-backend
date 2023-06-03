import mongoose from "mongoose";

//creates schema for cards
const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

//exports the schema as a card collection
export default mongoose.model('cards', cardSchema)