let title = document.getElementById('title');
let price = document.getElementById('price');
let tax = document.getElementById('tax');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let btncreat = document.getElementById('btncreat');



// get total
function GetTotal(){
    if (price.value != ''){
        let result = (+price.value + +tax.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = 'green';
    }else{
        total.innerHTML = '';
        total.style.background = 'red';


    }
}




// create product

let dataPro ;
if(localStorage.products != null){
    dataPro = JSON.parse(localStorage.products)
}else{
    dataPro = [];
}


btncreat.onclick = function(){

    let newPro= {
        title: title.value,
        price: price.value,
        tax: tax.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }
    
    if (newPro.count > 1){
        for (let i = 0; i < newPro.count ; i++){dataPro.push(newPro);}
    } else{dataPro.push(newPro)}

    localStorage.setItem('products' , JSON.stringify(dataPro));

    clearData();
    ShowData();

}


// save localstorage
// clear inputs


function clearData(){
    title.value= '';
    price.value= '';
    tax.value= '';
    ads.value= '';
    discount.value= '';
    total.innerHTML= '';
    count.value= '';
    category.value= '';
}
// read

function ShowData(){
    let table = '';

    for(let i = 0; i < dataPro.length; i++){
        table += `
         <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].tax}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td> <button id="update">Update</button></td>
                    <td> <button onclick=" deleteData(${i})" id="delete">Delete</button></td>
                </tr>
        
        `
    }

    document.getElementById('tbody').innerHTML=table;

}
ShowData()
// count
// delete 
function deleteData(i){

    dataPro.splice(i,1);
    ShowData()
}
// update
// search 

    let searchMood = 'title';

    function getSearchMood(id)
    {
        let search= document.getElementById('search');

        if (id == 'btn-title'){
             searchMood = 'title';
             search.placeholder='Search By Title';

        } else{
             searchMood = 'category';
             search.placeholder='Search By Category';

        }

        search.focus()
    }




// clean data