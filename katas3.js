const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const body = document.querySelector('body')

const showResults = (katas, results) => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const kataTitle = document.createElement('h1')
    p.innerHTML = results
    kataTitle.innerHTML = katas
    div.appendChild(kataTitle)
    div.appendChild(p)
    body.appendChild(div)
}

const kata1 = () => {
    let output = [];
    for (let i = 1; i <= 25; i++) {
        output.push(i)   
    }
    showResults("Kata 1", output.join(" "))
    return output.join(" ")
}

kata1()

const kata2 = () => {
    let output = [];
    for (let i = 25; i >= 1; i--){
        output.push(i)
    }
    showResults("Kata 2", output.join(" "))
    return output.join(" ")
}

kata2()

const kata3 = () => {
   let output = [];
   for (let i = 1; i <= 25; i++){
       output.push(i*(-1))
   }
   showResults("Kata 3", output.join(" "))
   return output.join(" ")
}

kata3()

const kata4 = () => {
    let output = [];
   for (let i = 25; i >= 1; i--){
       output.push(i*(-1))
   }
   showResults("Kata 4", output.join(" "))
   return output.join(" ")
}

kata4()

const kata5 = () => {
    let output = [];
    for (let i = 25; i >= -25; i--){
        output.push(i)
    }
    showResults("Kata 5", output.join(" "))
    return output.join(" ")
}

kata5()

const kata6 = () => {
   let output = [];
   for (let i = 1; i <= 100; i++){
       if (i % 3 == 0){
           output.push(i)
       }
   }
   showResults("Kata 6", output.join(" "))
   return output.join(" ")
}

kata6()

const kata7 = () => {
    let output = [];
    for (let i = 1; i <= 100; i++){
        if (i % 7 == 0){
            output.push(i)
        }
    }
    showResults("Kata 7", output.join(" "))
    return output.join(" ")
}

kata7()

const kata8 = () => {
    let output = [];
    for (let i = 100; i >= 1; i--){
        if (i % 3 == 0 || i % 7 == 0){
            output.push(i)
        }
    }
    showResults("Kata 8", output.join(" "))
    return output.join(" ")
}

kata8()

const kata9 = () => {
    let output = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0 && i % 5 == 0){
            output.push(i)
        }
    }
    showResults("Kata 9", output.join(" "))
    return output.join(" ")
}

kata9()

const kata10 = () => {
    let output = [];
    for (let i = 0; i < sampleArray.length; i++){
        output.push(sampleArray[i])
    }
    showResults("Kata 10", output.join(" "))
    return output.join(" ")
}

kata10()

const kata11 = () => {
    let output = [];
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 == 0){
            output.push(sampleArray[i])
        }
    }
    showResults("Kata 11", output.join(" "))
    return output.join(" ")
}

kata11()

const kata12 = () => {
    let output = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0){
            output.push(sampleArray[i])
        }
    }
    showResults("Kata 12", output.join(" "))
    return output.join(" ")
}

kata12()

const kata13 = () => {
    let output = [];
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 8 == 0) {
            output.push(sampleArray[i])
        }
    }
    showResults("Kata 13", output.join(" "))
    return output.join(" ")
}

kata13()

const kata14 = () => {
    let output = [];
    for (let i = 0; i < sampleArray.length; i++){
        output.push(sampleArray[i]**2)
    }
    showResults("Kata 14", output.join(" "))
    return output.join(" ")
}

kata14()

const kata15 = () => {
    let output = [];
    let soma = 0
    for (let i = 1; i <= 20; i++){
        soma += i
    }
    output.push(soma)
    showResults("Kata 15", output.join(" "))
    return output.join(" ")
}

kata15()

const kata16 = () => {
    let output = [];
    let soma = 0
    for (let i = 0; i < sampleArray.length; i++) {
        soma += sampleArray[i] 
    }
    output.push(soma)
    showResults("Kata 16", `A soma de <em>sampleArray</em> é: <strong>${output.join(" ")}</strong>`)
    return output.join(" ")
} 
 
kata16()

const kata17 = () => {
    let output = [];
    let verifica = sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < verifica) {
        verifica = sampleArray[i]
        }
    }
    output.push(verifica)
    showResults("Kata 17", `O menor elemento em <em>sampleArray</em> é: <strong>${output.join(" ")}</strong>`)
    return output.join(" ")
}

kata17()

const kata18 = () => {
    let output = [];
    let verifica = sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > verifica) {
        verifica = sampleArray[i]
        }
    }
    output.push(verifica)
    showResults("Kata 18", `O maior elemento em <em>sampleArray</em> é: <strong>${output.join(" ")}</strong>`)
    return output.join(" ")
}

kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

const containerDiv = document.createElement("div")
body.appendChild(containerDiv)

const kataBonus1 = () => {
    const title = document.createElement("h3")
    const text = document.createElement("p")
    text.innerHTML = `Kata Bônus 1`
    title.appendChild(text)
    containerDiv.appendChild(title)
    for (let i = 1; i <= 20; i++){
        const div = document.createElement("div")
        div.style.height = "20px"
        div.style.width = "100px"
        div.style.margin = "3px"
        div.style.backgroundColor = "grey"
        div.style.border = "3px solid black"
        div.style.borderRadius = "5px"
        containerDiv.appendChild(div)
    }
}

kataBonus1()

const kataBonus2 = () => {
    const title = document.createElement("h3")
    const text = document.createElement("p")
    text.innerHTML = `Kata Bônus 2`
    title.appendChild(text)
    containerDiv.appendChild(title)
    let defaultWidth = 105
    for (let i = 1; i <= 20; i++) {
        const div = document.createElement("div")
        div.style.width = defaultWidth + "px"
        div.style.height = "20px"
        div.style.backgroundColor = "grey"
        div.style.margin = "3px"
        div.style.border = "3px solid black"
        div.style.borderRadius = "5px"
        containerDiv.appendChild(div)
        defaultWidth += 5
    }
}

kataBonus2()

const kataBonus3 = () => {
    const title = document.createElement("h3")
    const text = document.createElement("p")
    text.innerHTML = `Kata Bônus 3`
    title.appendChild(text)
    containerDiv.appendChild(title)
    for (let i = 0; i < 20; i++) {
        const div = document.createElement("div")
        div.style.width = sampleArray[i] + "px"
        div.style.height = "20px"
        div.style.backgroundColor = "grey"
        div.style.margin = "3px"
        div.style.border = "3px solid black"
        div.style.borderRadius = "5px"
        containerDiv.appendChild(div)
    }
}

kataBonus3()

const kataBonus4 = () => {
    const title = document.createElement("h3")
    const text = document.createElement("p")
    text.innerHTML = `Kata Bônus 4`
    title.appendChild(text)
    containerDiv.appendChild(title)
    for (let i = 0; i < 20; i++) {
        const div = document.createElement("div")
        div.style.width = sampleArray[i] + "px"
        div.style.height = "20px"
        div.style.backgroundColor = "grey"
        div.style.margin = "3px"
        div.style.border = "3px solid black"
        div.style.borderRadius = "5px"
            if (i % 2 == 0) {
                div.style.backgroundColor = "red"
            }
        containerDiv.appendChild(div)
    }
}

kataBonus4()

const kataBonus5 = () => {
    const title = document.createElement("h3")
    const text = document.createElement("p")
    text.innerHTML = `Kata Bônus 5`
    title.appendChild(text)
    containerDiv.appendChild(title)
    for (let i = 0; i < 20; i++) {
        const div = document.createElement("div")
        div.style.width = sampleArray[i] + "px"
        div.style.height = "20px"
        div.style.backgroundColor = "grey"
        div.style.margin = "3px"
        div.style.border = "3px solid black"
        div.style.borderRadius = "5px"
            if (sampleArray[i] % 2 == 0) {
                div.style.backgroundColor = "red"
            }
        containerDiv.appendChild(div)
    }
}

kataBonus5()
