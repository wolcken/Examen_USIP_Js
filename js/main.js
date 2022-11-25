/*
 Author: Alfredo Ramos<alfredoxd00@hotmail.com>
 Final Test: Bases de javascript
 Date: 24/11/2022
 University: USIP
*/

console.log("Aqui ira todo tu codigo...EXITOS !!!");

const btn = document.getElementById('calcular');
btn.addEventListener('click', () => {
  document.getElementById('respuesta').value = calcular();
})

const val_bolv = [1,131.80,2.81,23.92,0.14];
const val_chil = [0.0076,1,0.021,0.18,0.0011];
const val_mex = [0.36,46.97,1,8.52,0.052];
const val_arg = [0.042,5.51,0.12,1,0.0061];
const val_dol = [6.91,910.35,19.38,165.20,1];

const moneda_cambio = [val_bolv, val_chil, val_mex, val_arg, val_dol];

function moneda(val_introducido, de_i, a_i){
  //alert(de_i +" "+ a_i + "       "+moneda_cambio[de_i]+"  "+moneda_cambio[de_i][a_i]);
  switch(a_i){
    case '0':
      return  val_introducido * moneda_cambio[de_i][a_i];
    
    case '1':
      return val_introducido * moneda_cambio[de_i][a_i];
    
    case '2':
      return val_introducido * moneda_cambio[de_i][a_i];
    
    case '3':
      return val_introducido * moneda_cambio[de_i][a_i];

    case '4':
      return val_introducido * moneda_cambio[de_i][a_i];
  }
}

function calcular(){

  var val_introducido = document.getElementById('monto').value;
  
  var de_i = document.getElementById('de').value;
  var a_i = document.getElementById('a').value;
  
  var resultado = moneda(val_introducido, de_i, a_i);

  return resultado;
}

const btn2 = document.getElementById('nuevo');
btn2.addEventListener('click', () => {
  document.getElementById('monto').value = "";
  document.getElementById('respuesta').value = "";
})