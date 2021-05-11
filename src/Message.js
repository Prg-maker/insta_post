const Message = {
    newMessage( min , max) {
        const message = [
            'Crie algum conteúdo para ajudar a comunidade',
            "Crie alguma coisa",
            "Está na hora de postar algo no insta",
        ]

        let curretMessage = 1 
        max = message.length
        min = 0
    
        min = Math.ceil(min)
        max = Math.floor(max)
    
        const result = Math.floor(Math.random() * (max - min) + min)
    
        let resultAndCurrent = result * curretMessage
        let end = message[resultAndCurrent]
    
        
    
        return end
    
    

    }
}

export {Message}