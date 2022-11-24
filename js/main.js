/*
 Author: Diego Adrian<adry.dabp@gmail.com>
 Final Test: Bases de javascript
 Date: 23/11/2022
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

function calcular(){
  var val_introducido = parseInt(document.getElementById('monto').value);

  var de_i = document.getElementById('de').value;
  var a_i = document.getElementById('a').value;

  var resultado = 0;

  if(de_i == '1'){
    switch(a_i){
      case '1':
        resultado = val_introducido * val_bolv[0];
      break;
      case '2':
        resultado = val_introducido * val_bolv[1];
      break;
      case '3':
        resultado = val_introducido * val_bolv[2];
      break;
      case '4':
        resultado = val_introducido * val_bolv[3];
      break;
      case '5':
        resultado = val_introducido * val_bolv[4];
      break;
    }
  }
  else{
    if(de_i == '2'){
      switch(a_i){
        case '1':
          resultado = val_introducido * val_chil[0];
        break;
        case '2':
          resultado = val_introducido * val_chil[1];
        break;
        case '3':
          resultado = val_introducido * val_chil[2];
        break;
        case '4':
          resultado = val_introducido * val_chil[3];
        break;
        case '5':
          resultado = val_introducido * val_chil[4];
        break;
      }
    }
    else{
      if(de_i == '3'){
        switch(a_i){
          case '1':
            resultado = val_introducido * val_mex[0];
          break;
          case '2':
            resultado = val_introducido * val_mex[1];
          break;
          case '3':
            resultado = val_introducido * val_mex[2];
          break;
          case '4':
            resultado = val_introducido * val_mex[3];
          break;
          case '5':
            resultado = val_introducido * val_mex[4];
          break;
        }
      }
      else{
        if(de_i == '4'){
          switch(a_i){
            case '1':
              resultado = val_introducido * val_arg[0];
            break;
            case '2':
              resultado = val_introducido * val_arg[1];
            break;
            case '3':
              resultado = val_introducido * val_arg[2];
            break;
            case '4':
              resultado = val_introducido * val_arg[3];
            break;
            case '5':
              resultado = val_introducido * val_arg[4];
            break;
          }
        }
        else{
          if(de_i == '5'){
            switch(a_i){
              case '1':
                resultado = val_introducido * val_dol[0];
              break;
              case '2':
                resultado = val_introducido * val_dol[1];
              break;
              case '3':
                resultado = val_introducido * val_dol[2];
              break;
              case '4':
                resultado = val_introducido * val_dol[3];
              break;
              case '5':
                resultado = val_introducido * val_dol[4];
              break;
            }
          }
        }
      }
    }
  }

  

  return resultado;
}