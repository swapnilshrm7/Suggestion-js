function GetSuggestion()
				{
				var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Ashwarya", "Gurbaksh"]; 
				names.sort();
				var len=names.length;
				var input=document.getElementById("UserInput").value;
				var regex=input;
				var ul=document.getElementById("suggestions");
				document.getElementById("suggestions").innerHTML ="";
				var output="";
				regex=(new RegExp(regex));
				console.log(regex);
				var i=0,j=0,h=0;
				for(i=0;i<len;i++){
					if(regex.test(names[i].toLowerCase())==true){
						j++;
						var li=document.createElement("li");
						li.innerHTML=names[i];
						li.id=i+1;
						li.setAttribute("onclick","AddData(this.innerHTML)");
						ul.appendChild(li);
						
						}
					}
				if(j>=5){
					ul.style.height="220px";
					}
				else{
					h=j*45;
					ul.style.height=h+'px';
					}
				if(j==0){
					ul.style.height="0px";
					var li=document.createElement("li");
					li.innerHTML="no match found";
					ul.appendChild(li);
					}
				if(input==""){
					document.getElementById("suggestions").innerHTML ="";
					}
				}
				function AddData(text){
					var ul=document.getElementById("suggestions");
					document.getElementById("UserInput").value=text;
					document.getElementById("suggestions").innerHTML ="";
					ul.style.height="0px";
				}
				function minimize(){
					var ul=document.getElementById("suggestions");
					document.getElementById("suggestions").innerHTML ="";
					ul.style.height="0px";
					}
				function remove(){
					var ul=document.getElementById("suggestions");
					document.getElementById("suggestions").innerHTML ="";
					document.getElementById("UserInput").value="";
					ul.style.height="0px";
					}