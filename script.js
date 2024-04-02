var cart = []

if (cart.length == 0){
    notifyDiv.style.display = 'block'
    notifyDiv.innerHTML = '<p class="text-center bg-dark-subtle p-3 mx-4">No items added yet</>'
}

function addItem() {
    if (items.value ===''){
        // alert('Fill in the empty spaces')
        err.style.display= 'block'
    } else {
        notifyDiv.style.display = 'none'
        err.style.display= 'none'
        divBtn.style.display = 'block'
        cart.push(items.value)
        document.getElementById('items').value = ''
        displayItem()
        
    } 
    
} 

function addFirst(){
    if (firstAdd.value == ''){
        alert('add')
    } else {
        cart.unshift(document.getElementById('firstAdd').value);
        console.log(cart);
        document.getElementById('firstAdd').value = ''
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

// function addFirst(){
//     cart.unshift(items.value)
//     displayItem()
// }

function delAll(){
    var confirmation = confirm('Are you sure you want to delete. This action is irreversible')
    if (confirmation == true){
        cart.splice(0, cart.length)
        displayItem()
    }
}

function plsEditNow() {
    if(newNumber.value === '' && newValue.value === ''){
alert('check number')
    }else{ 
        if ((Number(newNumber.value)) > cart.length) {
            alert('you have exceeded')
        }else{
            var ediAny = Number(document.getElementById('newNumber').value)
            var replay = document.getElementById('newValue').value
            cart.splice(ediAny-1, 1, replay)
            document.getElementById('newNumber').value = ''
            document.getElementById('newValue').value = ''
            displayItem()
        }
    }
    // var ediAny = Number(prompt('which number are you editing'))
    // var replay = prompt('new value')
    // cart.splice(ediAny-1, 1, replay)
    // displayItem()
}

function deleteAny(){
    var any = Number(prompt('Which number are you deleting'))
    cart.splice(any-1, 1)
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

