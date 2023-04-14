console.log('this is tic tac toe game')
let scrorX = 0
let scror0 = 0
let scrorX1 = true
let audio = new Audio('music/ting.mp3')
let winner_audio = new Audio('music/music.mp3')

let trun = 'X'
function trunvalue() {
    if (trun === 'X') {
        trun = 0
    }
    else {
        trun = 'X'

    }

}
let game_box = document.getElementsByClassName('box')


Array.from(game_box).forEach(function (element) {
    element.addEventListener('click', function () {


        let span = element.getElementsByTagName('span')[0]
        if (span.innerText == '') {
            audio.play()
            span.innerText = trun
            trunvalue()

            check_winner()

        }

        document.querySelector('.game-trun').innerText = `Trun is ${trun}`

    })

})






const check_winner = function () {

    let spantext = document.getElementsByClassName('span-innerText')

    let game_value = [
        [0, 1, 2, 3, 5, 0, 2, 6, 0, 5, 7, 0],
        [3, 4, 5, 3, 15, 0, 2, 19, 0, 5, 22, 0],
        [6, 7, 8, 3, 25, 0, 2, 32, 0, 5, 37, 0],
        [0, 3, 6, -7, 15, 90, -11, 19, 90, -11, 22, 90],
        [1, 4, 7, 3, 15, 90, 2, 19, 90, 5, 22, 90],
        [2, 5, 8, 13, 15, 90, 15, 19, 90, 2022, 90],
        [0, 4, 8, 3, 15, 45, 2, 19, 45, 5, 22, 45],
        [2, 4, 6, 3, 15, 135, 2, 19, 90, 5, 22, 135],

    ]
    let reswin = [






        // [2, 6, 0],
        // [2, 19, 0],
        // [2, 32, 0],
        // [-11, 19, 90],
        // [2, 19, 90],
        // [15, 19, 90],
        // [2, 19, 45],
        // [2, 19, 90],


    ]
    game_value.forEach(function (e) {

        if ((spantext[e[0]].innerText === spantext[e[1]].innerText) && (spantext[e[2]].innerText === spantext[e[1]].innerText) && (spantext[e[0]].innerText !== "")) {
            console.log('ok')
            document.getElementById('winnerimage').style.width = '15vw'
            let duration = Math.floor(winner_audio.duration)
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "25vw";
       


       

            if (trun == '0' && scrorX1 == true) {

                scrorX1 = false
                winner_audio.play()
                console.log('if condition')
                document.getElementById('scrorX').innerText = scrorX += 1
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width = "25vw";
                document.querySelector(".rese-line").style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`
                document.querySelector(".rese-line").style.width = "35vw";
                document.querySelector(".rese-line2").style.transform = `translate(${e[9]}vw, ${e[10]}vw) rotate(${e[11]}deg)`
                document.querySelector(".rese-line2").style.width = "35vw";
            }
            else {

  
            

            }



             if(trun=='X'&&scrorX1==true){
                 scrorX1=false
                 winner_audio.play()
                 document.getElementById('scror-zero').innerText=scror0+=1

                 document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                 document.querySelector(".line").style.width = "25vw";
                 document.querySelector(".rese-line").style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`
                 document.querySelector(".rese-line").style.width = "35vw";
                 document.querySelector(".rese-line2").style.transform = `translate(${e[9]}vw, ${e[10]}vw) rotate(${e[11]}deg)`
                 document.querySelector(".rese-line2").style.width = "35vw";
             }
             else{
        
  
             }



            setTimeout(() => {
                let spantext = document.getElementsByClassName('span-innerText')
                Array.from(spantext).forEach(function (element) {
                    element.innerText = " ";
                    trun = 'X'
                    spantext.innerText = trun
                    document.querySelector('.game-trun').innerText = `Trun is X`

                })
                document.getElementById('winnerimage').style.width = '0vw'
                document.querySelector(".line").style.width = "0vw";
                document.querySelector(".rese-line").style.width = "0vw";
                document.querySelector(".rese-line2").style.width = "0vw";
                winner_audio.pause()
                console.log('start time out')
            }, duration * 1000);




        }

        else {
            console.log('else')
        }
    })











}
document.getElementById('reset').addEventListener('click', function () {
    let spantext = document.getElementsByClassName('span-innerText')
    Array.from(spantext).forEach(function (element) {
        element.innerText = " ";


        trun = 'X'
        spantext.innerText = trun

        document.querySelector('.game-trun').innerText = `Trun is X`




    })
    document.getElementById('winnerimage').style.width = '0vw'
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".rese-line").style.width = "0vw";
    document.querySelector(".rese-line2").style.width = "0vw";
    winner_audio.pause()
    scrorX1 = true

})


