console.log('Email service is Running.. .')

$('#bookSession1').on('click', e => {
	e.preventDefault();
	const Name = $("#namee").val().trim();
	const contact = $("#contactt").val().trim();
	const location = $("#locationn").val().trim();

	const data ={
		name: Name,
		contact,
		location
	}

	$.post('/email', data, function(res){
		console.log(res)
		if(res = 'success'){
			document.getElementById("namee").value = ''
			document.getElementById("contactt").value = ''
			document.getElementById("locationn").value = ''
			alert('message sent successfully')
		} else{
			alert('failed to send messgae')
		}
	})
})


$('#bookSession2').on('click', e => {
	e.preventDefault();
	const firstName = $("#firstName").val().trim();
	const lastName = $("#lastName").val().trim();
	const email = $("#email").val().trim();
    const contact = $("#contactNumber").val().trim();
    const message = $("#querry").val().trim();

	const data ={
		firstName,
        lastName,
		contact,
        email,
        message
	}

	$.post('/detailed/email', data, function(res){
		console.log(res)
		if(res = 'success'){
			document.getElementById("#firstName").value = '';
            document.getElementById("#lastName").value = '';
			document.getElementById("#email").value = '';
			document.getElementById("#contactNumber").value = '';
            document.getElementById("#querry").value = '';
			alert('message sent successfully')
		} else{
			alert('failed to send messgae')
		}
	})
})