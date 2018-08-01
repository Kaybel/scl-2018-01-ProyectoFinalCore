firebase.initializeApp({
  apiKey: "AIzaSyD9Mljc7zSuxCnR_6L15voA-5_0Olk0SBM",
  authDomain: "proyecto-final-6656c.firebaseapp.com",
  databaseURL: "https://proyecto-final-6656c.firebaseio.com",
  projectId: "proyecto-final-6656c",
  storageBucket: "proyecto-final-6656c.appspot.com",
  messagingSenderId: "701488365879"
});

var db = firebase.firestore();

function enviar() {
  const nombreVisita = document.getElementById('validationCustom01').value;
  document.getElementById('validationCustom01').value = '';
  const apellidoVisita = document.getElementById('validationCustom02').value;
  document.getElementById('validationCustom02').value = '';
  const emailVisita = document.getElementById('validationCustomUsername').value;
  document.getElementById('validationCustomUsername').value = '';
  const rutVisita = document.getElementById('validationCustom03').value;
  document.getElementById('validationCustom03').value = '';
  const patenteVisita = document.getElementById('validationCustom04').value;
  document.getElementById('validationCustom04').value = '';
  const motivoVisita = document.getElementById('inlineFormCustomSelectPref').value;
  document.getElementById('inlineFormCustomSelectPref').value = '';
  const espacioVisita = document.getElementById('inlineFormCustomSelectPref2').value;
  document.getElementById('inlineFormCustomSelectPref2').value = '';
  const check = document.getElementById('invalidCheck').value;
  document.getElementById('invalidCheck').value = '';
  const telefonoVisita = document.getElementById('validationCustom0005').value;
  document.getElementById('validationCustom0005').value = '';

  db.collection('registro').add({
    name: nombreVisita,
    lastName: apellidoVisita,
    email: emailVisita,
    rut: rutVisita,
    patente: patenteVisita,
    motivo: motivoVisita,
    espacio: espacioVisita,
    telefono: telefonoVisita,
  })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
};

// leer documentos
let card = document.getElementById('cardPublicacion');
db.collection('registro').onSnapshot((querySnapshot) => {
  card.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().name}`);
    card.innerHTML += `
    <tr>
    <td>${doc.data().name}</td>
    <td>${doc.data().lastName}</td>
    <td>${doc.data().email}</td>
    <td>${doc.data().rut}</td>
    <td>${doc.data().telefono}</td>
    <td>${doc.data().patente}</td>
    <td>${doc.data().motivo}</td>
    <td>${doc.data().espacio}</td>
    </tr>
      `
  });
});

function showResponsePage() {
  console.log('2');
  $('#respuestaPage').show();
  $('#registroPage').hide();
  $('#tablePage').hide();
  $('#adminPage').hide();
}

const preload = document.getElementById('preload');
setTimeout(() => {
  preload.style.display = 'none';
}, 2000);

// camera 
/*
navigator.webcam = (
  navigator.msGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.getUserMedia
);
function success(stream) {
  video.src = window.URL.createObjectURL(stream)
  video.play()

}
function error() {
  alert('No podemos ingresar a la cámara :(');
  console.log(error)
}
navigator.webcam({
  video: true,
  audio: false
}, success, error); */
