var siteNameInput = document.getElementById("siteName");
var siteURLInput =document.getElementById("siteURL");



var urlcontainer =[

]
if ( localStorage.getItem("site")!=null){
    urlcontainer=JSON.parse(localStorage.getItem("site"))
    displaydata()

}


function addURL(){
    var site = {
        name :siteNameInput.value ,
        URL :siteURLInput.value ,


    }
    urlcontainer.push(site)
    localStorage.setItem("site",JSON.stringify(urlcontainer))
    console.log(urlcontainer);

    displaydata()
    clear()
    
    


  
    
    
    
}

function clear(){
    siteNameInput.value = "" ;
    siteURLInput.value = ""  ;

}


function displaydata(){
    box='';
    for(var i =0 ;i<urlcontainer.length ; i++){
        box+=`
        <tr>
        <td> ${i+1}  </td>
        <td> ${urlcontainer[i].name} </td>
        <td>
        <a href=" ${urlcontainer[i].URL} class="text-white" target="_blank"> <button class="btn btn-warning color"><span><i class="fa-solid fa-eye"></i></span>visit</button></a>
        </td>
        <td>
           <a href="#"> <button class="btn btn-danger"  onclick="deleteURL( ${i}  )"><span><i class="fa-solid fa-trash"></i></span>Delete</button></a>
        </td>
       </tr>
        `
        

    }
    document.getElementById("display").innerHTML=box;
}



function deleteURL(elementnumber){
   urlcontainer.splice(elementnumber,1);
   console.log(urlcontainer);
   localStorage.setItem("site",JSON.stringify(urlcontainer))
   displaydata()


}



function regexName() {
    var regexName =/^[a-zA-Z]{3,10}/
    var text = siteNameInput.value;
    
    if( regexName.test( text) == true ) {
        siteNameInput.classList.add("is-valid")
        siteNameInput.classList.remove("is-invalid")



    }
    else {
        siteNameInput.classList.add("is-invalid")
        siteNameInput.classList.remove("is-valid")



    }
}
function regexURL() {
    var regexURL = /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/
    var title = siteURLInput.value;
    
    if( regexURL.test( title ) == true ) {
        siteURLInput.classList.add("is-valid")
        siteURLInput.classList.remove("is-invalid")



    }
    else {
        siteURLInput.classList.add("is-invalid")
        siteURLInput.classList.remove("is-valid")



    }
}














