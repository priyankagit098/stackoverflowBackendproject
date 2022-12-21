import mongoose from 'mongoose'

import Questions from '../models/Questions.js'


export const postAnswer = async(req, res) => {
    const {id: _id} = req.params;
    
    const {noOfAnswers, answerBody, userAnswered, userId}= req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable')
    }
    updatedNoOfQuestions(_id, noOfAnswers)
    try {
      const updatedQuestion = await Questions.findByIdAndUpdate( _id, {$addToSet : {'answer' : [{ answerBody, userAnswered, userId}]}})
       res.status(200).json(updatedQuestion)
    }
    catch(error) {
        res.status(404).json(error)
    }
}

export const deleteAnswer = async (req, res) => {
    const {id: _id} = req.params;
    const {answerId, noOfAnswers}= req.body;
    console.log(noOfAnswers)
    console.log(answerId)
    
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable')
    }
    // if (!mongoose.Types.ObjectId.isValid(answerId)) {
    //     return res.status(404).send('Answer unavailable')
    // }
  
   updatedNoOfQuestion(_id, answerId)

    try {
        await Questions.updateOne( 
            
            {_id}, {$pull : {'answer' : {_id : noOfAnswers}}}
            
        )
        res.status(200).send('Successfully deleted')
    } catch (error) {
        res.status(404).json(error)
    }

} 



const updatedNoOfQuestion = async(_id, answerId) => {

    try {
        await Questions.findByIdAndUpdate(_id, {$set : {'noOfAnswers' : answerId}}, {new: true})
    } catch (error) {
        console.log(error)
    }
}


const updatedNoOfQuestions = async(_id, noOfAnwers) => {

    try {
        await Questions.findByIdAndUpdate(_id, {$set : {'noOfAnswers' : noOfAnswers}})
    } catch (error) {
        console.log(error)
    }
}