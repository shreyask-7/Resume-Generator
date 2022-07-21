var input = document.getElementById('uploadImage');
    input.onchange = function(evt){
        var tgt = evt.target || window.event.srcElement, 
            files = tgt.files;

        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                localStorage['foo'] = fr.result;
            }
            fr.readAsDataURL(files[0]);
        }
    }
function AddNewWeField() {
	//console.log("Adding A new file");
	 let newNode= document.createElement('textarea');
	 newNode.classList.add("form-control");
	 newNode.classList.add("weField");
	 newNode.classList.add("mt-2");
	 newNode.setAttribute("rows",2);
	 newNode.setAttribute("placeholder","Enter here");
	 let WEob= document.getElementById('WE');
	 let weAddButtonob= document.getElementById('weAddButton');

	 WEob.insertBefore(newNode, weAddButtonob);
   }
   //Education and Qualification
   function AddNewEqField() {
	  let newNode= document.createElement('textarea');
	  newNode.classList.add("form-control");
	  newNode.classList.add("eqField");
	  newNode.classList.add("mt-2");
	  newNode.setAttribute("rows",2);
	  newNode.setAttribute("placeholder","Enter here");

	  let Eqob= document.getElementById('eq');
	  let eqAddButtonob= document.getElementById('eqAddButton');

	  Eqob.insertBefore(newNode, eqAddButtonob);
	}
	
	

   //Interests And Hobbies
   function AddNewIhField() {
	  let newNode= document.createElement('textarea');
	  newNode.classList.add("form-control");
	  newNode.classList.add("ihField");
	  newNode.classList.add("mt-1");
	  newNode.setAttribute("rows",1);
	  newNode.setAttribute("placeholder","Enter here");

	  let Ihob= document.getElementById('ih');
	  let ihAddButtonob= document.getElementById('ihAddButton');

	  Ihob.insertBefore(newNode, ihAddButtonob);
	}
    
	//References
	function AddNewRefField() {
	  let newNode= document.createElement('textarea');
	  newNode.classList.add("form-control");
	  newNode.classList.add("refField");
	  newNode.classList.add("mt-2");
	  newNode.setAttribute("rows",2);
	  newNode.setAttribute("placeholder","Enter here");

	  let refob= document.getElementById('ref');
	  let refAddButtonob= document.getElementById('refAddButton');

	  refob.insertBefore(newNode, refAddButtonob);
	}

  //CV generation
  function generateCV(){

	localStorage.setItem("name", document.getElementById("nameField").value);

	localStorage.setItem("contact", document.getElementById("contactField").value);

	localStorage.setItem("address", document.getElementById("addressField").value);

	localStorage.setItem("insta", document.getElementById("instaField").value);

	localStorage.setItem("mail", document.getElementById("mailField").value);

	localStorage.setItem("linkedin", document.getElementById("linkedField").value);

	localStorage.setItem("github", document.getElementById("gitField").value);

	localStorage.setItem("objective", document.getElementById("objectiveField").value);
	
	// bannerImage = document.getElementById('imgfield');
    // imgData = getBase64Image(bannerImage);
    // localStorage.setItem("image", imgData);

	let wes = document.getElementsByClassName('weField')
	 let str =''
	 for(let e of wes)
	 {
		 str = str + `<li> ${e.value} </li>`;
	 }
	 //localStorage.setItem("work", str);
	 localStorage.setItem("work", JSON.stringify(str)); 

	//academic qualifications
	 let aqs = document.getElementsByClassName('eqField')
	 let str1 =''
	 for(let e of aqs)
	 {
		 str1 = str1 + `<li> ${e.value} </li>`;
		 
	 }
	 localStorage.setItem("qualification", JSON.stringify(str1));
	 

	 //hobbies
	 let ihs = document.getElementsByClassName('ihField')
	 let str2 =''
	 for(let e of ihs)
	 {
		 str2 = str2 + `<li> ${e.value} </li>`;
	 }
	 localStorage.setItem("hobbie", JSON.stringify(str2));

	 //reference
	 let rfs = document.getElementsByClassName('refField')
	 let str3 =''
	 for(let e of rfs)
	 {
		 str3 = str3 + `<li> ${e.value} </li>`;
	 }
	 localStorage.setItem("reference", JSON.stringify(str3));
	 localStorage.setItem("skill1", document.getElementById("skill_value1").value);
   	localStorage.setItem("skillper1", document.getElementById("skill_comp1").value);

   	localStorage.setItem("skill2", document.getElementById("skill_value2").value);
   	localStorage.setItem("skillper2", document.getElementById("skill_comp2").value);

   	localStorage.setItem("skill3", document.getElementById("skill_value3").value);
   	localStorage.setItem("skillper3", document.getElementById("skill_comp3").value);

   	localStorage.setItem("skill4", document.getElementById("skill_value4").value);
   	localStorage.setItem("skillper4", document.getElementById("skill_comp4").value);


	   window.location.href ="http://127.0.0.1:5500/app/carousel.html";
  }
