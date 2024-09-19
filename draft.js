console.log("Start")

function log(message){
    console.log(message)
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(`TimeOut ${i}`)
    }, 0)
    log(`Message ${i}`)
}

console.log("End")