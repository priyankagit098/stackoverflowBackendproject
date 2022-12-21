import mongoose from 'mongoose'

// mongoose.set("debug", true);
mongoose.set("strictQuery", false);
// const options = {
//   strict: "throw",
//   strictQuery: false
// };

const QuestionSchema =  mongoose.Schema({
    questionTitle: {
        type: String
        
    },
    questionBody: {
        type: String
        
    },
    questionTags: {
        type: [String]
        
    },
    noOfAnswers: {
        type: Number, 
        
    },
   
    upVote: {
        type: [String], 
        default: []
    },
    downVote: {
        type: [String], 
        default: []
    },
    userPosted: {
        type: String
       
       
    },
    userId: {
        type: String
    },
    askedOn: {
        type: Date,
        default: Date.now
    },
    answer: [{
        answerBody: String,
        userAnswered: String,
        userId: String,
        answeredOn: {
            type: Date,
            default: Date.now
        }
    }]
})

export default mongoose.model("Question", QuestionSchema);