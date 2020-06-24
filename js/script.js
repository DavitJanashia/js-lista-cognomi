var btn = document.getElementById('button');
var lista = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

for (var i = 0; i < lista.length; i++){
  lista.sort();
  document.getElementById('lista').innerHTML += '<li>' + lista[i] + '</li>';
}

btn.addEventListener('click', function(){
  var cognome = document.getElementById('input').value;


  lista.push(cognome);
  lista.sort();

  console.log(lista);

  document.getElementById('lista').innerHTML = '';
  for (var i = 0; i < lista.length; i++){
    document.getElementById('lista').innerHTML += '<li>' + lista[i] + '</li>';
  }

  var indexx = lista.indexOf(cognome);
  document.getElementById('posizione').innerHTML = 'Posizione nella lista: ' + (indexx + 1);
});
