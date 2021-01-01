window.onload = function(){
	var item = document.getElementsByClassName("item");
	var it = item[0].getElementsByTagName("div");
	
	var content = document.getElementsByClassName("content");
	var con = content[0].getElementsByTagName("div");
	
	for(let i=0;i<it.length;i++){
		it[i].onclick = function(){
			for(let j=0;j<it.length;j++){
				it[j].className = '';
				con[j].style.display = "none";
			}
			this.className = "active";
			it[i].index=i;
			con[i].style.display = "block";
		}
	}
}

function beijin(){
	document.getElementById('Back').style.backgroundImage="url(img/beijin1.jpg)";
	}
function beijin1(){
	document.getElementById('Back').style.backgroundImage="url(img/beijin.jpg)";
	}




function Login(){
	var userName = document.getElementById("UserName").value
	var passWord = document.getElementById("PassWord").value
	var email = document.getElementById("email").value
	   alert("用户名: "+userName+" "+"密码: "+ passWord+"邮箱："+email);
	}
function login(){
	var userName = document.getElementById("user_Name").value
	var passWord = document.getElementById("passWord").value
	alert("用户名: "+userName+" "+"密码: "+ passWord);
	}