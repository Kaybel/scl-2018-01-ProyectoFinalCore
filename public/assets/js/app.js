firebase.initializeApp({
  apiKey: 'AIzaSyD9Mljc7zSuxCnR_6L15voA-5_0Olk0SBM',
  authDomain: 'proyecto-final-6656c.firebaseapp.com',
  databaseURL: 'https://proyecto-final-6656c.firebaseio.com',
  projectId: 'proyecto-final-6656c',
  storageBucket: 'proyecto-final-6656c.appspot.com',
  messagingSenderId: '701488365879'
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
  const check = document.getElementById('iinvalidCheck').value;
  document.getElementById('invalidCheck').value = '';

  db.collection('registro').add({
    name: nombreVisita,
    lastName: apellidoVisita,
    email: emailVisita,
    rut: rutVisita,
    patente: patenteVisita,
    motivo: motivoVisita,
    espacio: espacioVisita,
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
    console.log(`${doc.id} => ${doc.data().img}`);
    card.innerHTML += `
      <div class="card">
        <img class="card-img-top" src="${doc.data().img}"text=Image cap" alt="Card image cap">
        <h5 class="card-title">${doc.data().title}</h5>
        <p class="card-text">${doc.data().text}</p>
        <i class="fas fa-heart" id="hola" onclick="like()" ></i><span id="contador"></span>
        <i class="fas fa-trash-alt" onclick="eliminar('${doc.id}')"></i>
        <i class="fas fa-pencil-alt" onclick="editar('${doc.id}', '${doc.data().title}', '${doc.data().text}')"></i>
        
        <section class="center">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <textarea class="txt" id="comment" placeholder="Añade un comentario..."></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <button type="submit" class="btn" id="btncomentario" onclick="comentar()">
                <i class="fas fa-plus" aria-hidden="true"></i> Comentar</button>
              </div>
            </div>
            <div class="row">
              <div class="col-12" id="cont"></div>
            </div>
          </div>
        </section>
      </div>
      `;
  });
});

const preload = document.getElementById('preload');
setTimeout(() => {
  preload.style.animation = 'fadeout 1s ease';
  preload.style.display = 'none';
}, 3000);

// camera
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
}, success, error);
