import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js";
import {getReceiverSocketId,io} from '../socket/socket.js'

export const  sendMessage = async (req,res)=>{
     try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{
                $all:[senderId,receiverId]
            }
     })

        if(!conversation)
            {
               const conversation =  await Conversation.create({
                    participants:[senderId,receiverId],
                })
            }

        const newMessage = new Message({
            senderId:senderId,
            receiverId:receiverId,
            message:message,
        })
        if(newMessage) {conversation.messages.push(newMessage._id);}

        // with this it takes more time as one waits for another
        // await conversation.save();
        // await newMessage.save();

        // this will allow both processes to run parallely
        await Promise.all([conversation.save(),newMessage.save()]);


        // socket functionality
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            // io.to(socketId).emit()  is used to send an event to a specific client
            io.to(receiverSocketId).emit('newMessage',newMessage)
        }

        res.status(201).json(newMessage);
     } catch (error) {
         console.log("Error in sendMessage controller",error.message);
         res.status(500).json({msg:"internal server error"});
     }
}

export const getMessage =  async (req,res)=>{
    try {
        const {id:userToChat} = req.params;
        
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChat]}
        }).populate("messages");// not reference but actual messages will be there by using populate method

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
        }
    catch (error) {
        console.log("Error in getMessage controller",error.message);
        res.status(500).json({msg:"internal server error"});
    }
}

