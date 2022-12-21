
function fun1(){
    var inps=document.getElementById("fname").value

    var inp=inps.toLowerCase()
     
    function talk(i){
        let utterance = new SpeechSynthesisUtterance(i);
        speechSynthesis.speak(utterance);
        
    }



    if("hello" == inp){
        document.querySelector("h1").innerHTML="hello there how are you doing today"
        talk("hii there, how are you doing")
        
    }

    else if("hii" == inp){
        document.querySelector("h1").innerHTML="hello there how are you doing today"
        talk("hii there, how are you doing")

    }

    else if("who are you" == inp){
        document.querySelector("h1").innerHTML="i am an intelligent chat bot, made by roshan"
        talk("i am syntheya an intelligent chat bot, made by roshan ")


    }

    else if("what are you" == inp){
        document.querySelector("h1").innerHTML="i am a chat bot,you can talk with me "
        talk("i am a chat bot, you can talk with me ")

    }

    else if("how smart are you" == inp){
        document.querySelector("h1").innerHTML="my algorithms are still learning, but i can say that, i am smarter than my previous version "
        talk("my algorithms are still learning, but i can say that, i am smarter than my previous version")

    }

    else if("what is your name" == inp){
        document.querySelector("h1").innerHTML="my name is synthesis, but you can call me, syntheya"
        talk("my name is synthesis, but you can call me, syntheya")

    }

    else if("who is elon musk" == inp){
        document.querySelector("h1").innerHTML="Elon musk is the richest person on the earth and he is a bad ass,real life iron man"
        talk("Elon musk is the richest person on the earth, and yes, he is a bad ass,real life, iron man")

    }
    else if("fuck you" == inp){
        document.querySelector("h1").innerHTML="i am an AI language model but your words are still feels very real"
        talk("i am an AI language model, but your words are still feels very real")

    }

    else if("good" == inp){
        document.querySelector("h1").innerHTML="great"
        talk("great")

    }
    else if("ok" == inp){
        document.querySelector("h1").innerHTML="great"
        talk("great")

    }



    else{
        document.querySelector("h1").innerHTML="sorry, i am still in developing phase i cant answer that for now "
        talk("sorry, i am still in developing phase, i cant answer that for now ")

    }


    
}

