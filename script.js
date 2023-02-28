
let nav=document.createElement("nav");
nav.innerText=" GUVI ZEN FSD WEBCODE-1"
nav.setAttribute("class",'navbar');
nav.style.backgroundColor="#c5aa6a"
nav.style.color='white'
nav.style.fontSize='20px'
nav.style.height="40px"
nav.style.marginTop='0px'
document.body.append(nav);

let h1=document.createElement("h1");
h1.innerText="Enter the name to search country";
h1.style.color='blue';
h1.style.marginLeft='100px'
h1.style.fontFamily='Ariel'
document.body.append(h1);

let input=document.createElement("input");
input.innerText="Enter the name to search country";
input.setAttribute("type",'text')
input.setAttribute("id",'name')
input.style.marginLeft='100px'
input.style.padding='3px'
input.style.width='440px'
input.style.height='40px'

document.body.append(input);

let input1=document.createElement("input");
input1.setAttribute("type",'submit')
input1.setAttribute("onclick","getNationalise()");
input1.style.padding='3px'
input1.style.width='100px'
input1.style.color='yellow';
input1.style.height='40px'
input1.style.marginLeft='20px'
input1.style.backgroundColor="grey"

document.body.append(input1);

let div=document.createElement("div");
div.setAttribute("id","details")
document.body.append(div);



async function getNationalise(){
    try{

        var name=document.getElementById('name').value
        console.log(name)
        let res= await fetch(`https://api.nationalize.io/?name=${name}`);
        let data=await res.json();
        //console.log(data);

        let details=document.getElementById('details');
       details.innerHTML=`
       <div  style="margin-left="100px"class=container>
       <label for="searchFilter" style="margin-left:180px">search</label>
       <input id="searchInput"style='margin-left:30px;margin-top:30px;' onkeyup="myFunction()" type="text>
       <div class="row data ">

       <div class="col-md-4 mt-30 image">
        <img src="https://t4.ftcdn.net/jpg/02/60/74/69/360_F_260746971_m4dHGLCIl22kp3wu01tU32677ca65OZi.jpg" class="img-fluid rounded-start ml-3" alt="...">
        </div>
        <div class="col-md-8">

        <div class="filterItems">

          <h5 id="item1"class="card-title fItems">${name}</h5>
          <p  id="item2"class="card-text m-0 fItems "><small class="text-muted">Country:Id-1 <b>${data.country[0].country_id}</b> And Probability is <b>${data.country[0].probability}</b></small></p>
          <p id="item3" class="card-text m-0 fItems"><small class="text-muted">Country:Id-2 <b>${data.country[1].country_id} </b>And Probability is <b>${data.country[1].probability}</b></small></p>
       
          </div>
      </div>
      </div>
    </div>
     `
    // var search=getElementById("searchInput");
    // search.setAttribute("onkeyup","myFunction");
    function myFunction() {
        var input, filter, items, fItems, a, i, txtValue;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        items = document.getElementById("filterItems");
        fItems = items.getElementsByClassName("fItems");
        for (i = 0; i < li.length; i++) {
            a = fItems[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                fItems[i].style.display = "";
            } else {
                fItems[i].style.display = "none";
            }
        }
    }

    }
    catch(err){
        console.log(err);
    }
    
}


 

   
