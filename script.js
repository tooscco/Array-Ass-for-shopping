var cart = []

function addItem() {
    if (items.value ===''){
        // alert('Fill in the empty spaces')
        err.innerHTML =`Fill in the empty spaces`
    } else {
        cart.push(items.value)
        document.getElementById('items').value = ''
        displayItem()
        
    } 
    
} 

function deleteFirst(){
    cart.shift()
    displayItem()
}

function deleteLast(){
    cart.pop()
    displayItem()
}

function addStart(){
    cart.unshift(items.value)
    displayItem()
}

function displayItem(){
    show.innerHTML += ''
        var tableHTML =`<table class="table text-center">`
        tableHTML+=`<tr>`;
        tableHTML +=`<th> S/N </th>`

        tableHTML+= `<th> Product </th>`
        tableHTML += `</tr>`
        for(var i=0; i< cart.length; i++){
            tableHTML +=`<tr>`
            tableHTML += `
            <small><td style="width :100px ">${i+1}</td></smal>
            <p><td>${cart[i]}</td></p>
            `
            tableHTML += `</tr>`
        }
        tableHTML +=`</table >`
        document.getElementById('show').innerHTML=tableHTML
}

