// Esta funcion se encagar princopalmente de actulizar el value del input que se encuentra en el Form dle producto para asi poder mandar el mensaje que se enscribe como propiedad, tambien se encarga de ocultar el campo de texto cuando ya se escribe y se manda el mesaje, asi como tambien permite cambiar el mesaje cuando se presion nuevamente el boton.

function addCustomMessage(button) {

    console.log(button);
    var customMessageInput = document.getElementById('CustomMessage');
    var successMessage = document.getElementById('successMessage');

    // Obtener el valor del input
    var messageValue = customMessageInput.value;

    if(button.classList.contains('add-message')){
        if (messageValue.trim() !== '') {
            // Asignar el valor del input al mensaje de éxito
            successMessage.innerText = 'Message added successfully: ' + messageValue;
    
            // Mostrar el mensaje de éxito y ocultar el input y el botón
            customMessageInput.style.display = 'none';
            successMessage.style.display = 'block';
            button.classList.remove('add-message');
            button.innerText = "Change message"
        } else {
            // Mostrar un mensaje de error si no se ha ingresado un mensaje
            alert('Please enter a message before clicking "Add Message".');
        }
    }else{

        // Mostrar el campo de texto para reescribir el mensaje
        customMessageInput.style.display = 'block';
        successMessage.style.display = 'none';
        button.classList.add('add-message');
        button.innerText = "Add message"
    }
  
}

// Esta funcion valida que si el el vlaue del input esta vacio entonces ese input se elimine para que no se envie en el formulario del producto.

function validateForm() {
    var customMessageInput = document.getElementById('CustomMessage');

    // Verificar si el valor del input está vacío
    if (customMessageInput.value.trim() === '') {
        // Si está vacío, quitar el input del formulario
        customMessageInput.parentNode.removeChild(customMessageInput);
    }
    // Permitir el envío del formulario
    return true;
}

function toggleMessageVisibility() {
    var giftMessageContainer = document.querySelector('.gift-message-container');
    var showMessageCheckbox = document.getElementById('showMessageCheckbox');

    // Mostrar u ocultar el contenedor basado en el estado del checkbox
    giftMessageContainer.style.display = showMessageCheckbox.checked ? 'flex' : 'none';
}