import {Notifyer} from "./Notifyer.js"
import {Timer} from "./Timer.js"
import {Emitter} from "./Emitter.js"
import {Message} from "./Message.js"

console.log(Message.newMessage())




const notify = Notifyer.notify({
    title:"Hora do post",
    body:Message.newMessage(),
})



const App= {
    async start(){

        try{

            await Notifyer.init()

            Emitter.on('countdown-start', notify)
            Emitter.on('countdown-end', Timer.init)

            Timer.init()

            

        }catch(err){
            console.log(err.message)
        }


    }
}

export {App}