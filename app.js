    function Texto(){
        do{
        	var respuesta = prompt("¿Desea Cifrar o Decifrar? 1)Cipher, 2)Decipher"); /*Se crea una VARIABLE respuesta activando prompt, 
            en donde generamos una alerta para que el usuario elija cifrar o decifrar, por eso se genera una variable*/
            if(respuesta != ""); { //Entonces SI la respuesta no es igual a un "vacío", se generará una nueva condición
        		if(respuesta == "1"); { //SI la respuesta es "1", se activa la funcion Cifrar
                    var word1 = prompt("Ingrese el texto");
        			Cipher("word1"); //ingresa a cifrado
        			}if (respuesta == "2") { //SI la respuesta es "2", se activa la función Decifrar
                        var word2 = prompt("Ingrese el texto");
                        Decipher("word2"); //Ingresa a decifrado
        			     }else { //SI NO ingresa ninguna de las 2 respuestas anteriores se activará el mensaje alert!
        				    alert("Ingrese una opción válida");}
             }
            }while (respuesta == "" || (respuesta != "1" && respuesta != "2"));/*MIENTRAS SI el usuario ingresa un "vacío" o si las respuestas 
          no son ni "1", ni "2" se volverá a preguntar al usuario por medio de prompt*/
      }

    function Cipher(text, shift= 33){
       var Valor="";
       for (var letras of text) { //acá for revisa cada uno de los elementos 
           var i =letras.charCodeAt(0)+shift; /*La variable i indica que las letras al ser ingresadas devolverán el valor 
           Unicode del carácter en la ubicación especificada. y se cambia al siguiente palabra sumando una posicion*/
           Valor+=String.fromCharCode( (i%26)+65); // El texto ingresado por el usuario se podrá convertir el codigo ascii a texto javascript
       }
            return Valor;
    }

    function Decipher(text, shift= 33){
       var Valor="";
       for (var letras of text) { //acá for revisa cada uno de los elementos 
           var i =letras.charCodeAt(0)-shift; /*La variable i indica que las letras al ser ingresadas devolverán el valor 
           Unicode del carácter en la ubicación especificada */
           Valor+=String.fromCharCode( (i%26)+65); // El texto ingresado por el usuario se podrá convertir el codigo ascii a texto javascript
       }
            return Valor;
    }

    console.log((cipher("ABC")+" - "+decipher("UVW"));


