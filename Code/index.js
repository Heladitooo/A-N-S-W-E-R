
(function ejecucion()
{
var hero = document.querySelector(".hero");
console.log("//¡¡¡¡OPRIME G PARA EMPEZAR!!!!//")

document.addEventListener("keyup",empezar)
var teclas =
{
  G: 71,
  LEFT: 37,
  RIGH: 39

};

function empezar(t)
{


if(t.keyCode == teclas.G)
{
  teclas.G = 50000;
  var time = document.querySelector("#contador");

  function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



  var preguntas;
  function lol()
  {
    var la = random(1,40);
    console.log(la)

    if(la == 1)
    {
      preguntas = "¿De que color es el caballo blanco de simon bolivar?";
      console.log("respuesta: blanco")
    }

    else if(la == 2)
    {
      preguntas = "Creador de varios personajes de marvel que murio en el 2018";
      console.log("respuesta: stand lee")
    }

    else if(la == 3)
    {
      preguntas = "Nombre del presidente de venezuela antes de maduro";
      console.log("respuesta: chaves")
    }
    else if(la == 4)
    {
      preguntas = "Huesos de tu cuerpo que estan por fuera";
      console.log("respuesta: dientes")
    }
    else if(la == 5)
    {
      preguntas = "Si yo tengo 5 manzanas y tu 11 y me quitan 2 ¿cuantas tienes?";
      console.log("respuesta: 11")
    }
    else if(la == 6)
    {
      preguntas = "Serie animada donde capturas pokemones";
      console.log("respuesta: Pokemon")
    }
    else if(la == 7)
    {
      preguntas = "Fontanero que salva a una princesa en los videojuegos";
      console.log("respuesta: Mario bros o Mario")
    }
    else if(la == 8)
    {
      preguntas = "¿Cuantos dedos tiene un humano normal";
      console.log("respuesta: 20")
    }
    else if(la == 9)
    {
      preguntas = "¿En que Epoca historica estamos?";
      console.log("respuesta:")
    }
    else if(la == 10)
    {
      preguntas = "¿Qué es lo que todo el mundo hace al despertar?";
      console.log("respuesta: Abrir los ojos")
    }
    else if(la == 11)
    {
      preguntas = "El padre de luisa tiene 5 hijas: lala, lela, lila, lola y...";
      console.log("respuesta: luisa")
    }

    else if(la == 12)
    {
      preguntas = "¿En qué país se encuentra la Torre Eiffel?";
      console.log("respuesta: francias")
    }
    else if(la == 13)
    {
      preguntas = "¿Cuál es el país con mayor población del mundo?";
      console.log("respuesta: china")
    }

    else if(la == 14)
    {
      preguntas = "¿Si en una carrera adelantas al segundo en que lugar pasas a estar?";
      console.log("respuesta: segundo")
    }
    else if(la == 15)
    {
      preguntas = "Creador de la monalisa";
      console.log("respuesta: Leonardo da vinci")
    }
    else if(la == 16)
    {
      preguntas = "¿Como se llama este producto?";
      console.log("respuesta: A N S W E R")
    }
    else if(la == 17)
    {
      preguntas = "¿Que sistema operativo creo bill gates?";
      console.log("respuesta: Windows")
    }
    else if(la == 18)
    {
      preguntas = "Instrumento de cuerda parecido a la guitarra pero con cuerdas graves";
      console.log("respuesta: bajo")
    }
    else if(la == 19)
    {
      preguntas = "¿En que parte del espacio esta la tierra?";
      console.log("respuesta:")
    }
    else if(la == 20)
    {
      preguntas = "Personaje representativo de disney";
      console.log("respuesta: mikey mouse")
    }
    else if(la == 21)
    {
      preguntas = "Un cerdito hiso la casa de paja otro de ladrillo y el otro...";
      console.log("respuesta: de madera")
    }

    else if(la == 22)
    {
      preguntas = "¿Como se llama iron man?";
      console.log("respuesta: tony stark")
    }
    else if(la == 23)
    {
      preguntas = "Cubo con los numeros del 1 al 6 que se usa para jugar parques";
      console.log("respuesta: dado")
    }
    else if(la == 24)
    {
      preguntas = "¿Que es verde y huele pintura?";
      console.log("respuesta: Pintura verde")
    }
    else if(la == 25)
    {
      preguntas = "Cuanto es lo maximo de madera puedes llevar en MINECRAFT";
      console.log("respuesta:64")
    }
    else if(la == 26)
    {
      preguntas = "Videojuego mas popular en este momento";
      console.log("respuesta: fornite")
    }
    else if(la == 27)
    {
      preguntas = "Si alguien nacio en 1975 y hoy es 2019 ¿Cuantos años tiens?";
      console.log("respuesta: 44 o 45")
    }
    else if(la == 28)
    {
      preguntas = "¿El sol es una?";
      console.log("respuesta: estrella")
    }
    else if(la == 29)
    {
      preguntas = "Un pequeño paso...";
      console.log("respuesta: para el hombre un gran paso para la humanidad")
    }
    else if(la == 30)
    {
      preguntas = "Cuantas letras tiene yo + 5";
      console.log("respuesta: 2")
    }
    else if(la == 31)
    {
      preguntas = "";
      console.log("respuesta:")
    }
    else if(la == 32)
    {
      preguntas = "Cuales son los colores primarios";
      console.log("respuesta: amarillo, azul y rojo")
    }
    else if(la == 33)
    {
      preguntas = "¿Que color da la convinacion de azul y amarillo?";
      console.log("respuesta: Verde")
    }
    else if(la == 34)
    {
      preguntas = "¿Que se usa despues de la antorcha o velas o algo parsido?";
      console.log("respuesta: bombillo")
    }
    else if(la == 35)
    {
      preguntas = "(63251 x 56)- 3,542,056 = 0 ¿Cuando da?";
      console.log("respuesta: 0")
    }
    else if(la == 36)
    {
      preguntas = "Aplicacion con un icono de telefono para comunicacion";
      console.log("respuesta: Whatsapp")
    }
    else if(la == 37)
    {
      preguntas = "¿Cuantas cuerdas tiene una guitarra comun?";
      console.log("respuesta: 6")
    }
    else if(la == 38)
    {
      preguntas = "Capital de colombia";
      console.log("respuesta: Bogota")
    }
    else if(la == 39)
    {
      preguntas = "El circulo negro que tienes en tu cara";
      console.log("respuesta: pupila")
    }
    else if(la == 40)
    {
      preguntas = "Matematicas empieza por...";
      console.log("respuesta: M")
    }
  }

  lol();

  var n = 4;
  var ya = false;

  var termina1 = setInterval(function()
  {

      n--;
      if(n>0)
      {
      ya = true;
      time.innerHTML = n;
      }
      if(n == 0)
      {
        ya = false;
        atras();
        clearInterval(termina1);

      }
    },1000);


    var pregunta = document.querySelector("#Pregunta");
    var ganador = document.querySelector("#Ganador");
    var animacion = document.querySelector(".animacion");

    document.addEventListener("keydown", ganar)

    var gano = false;

    function ganar(t)
    {

    if(ya == false)
    {
      if(t.keyCode == teclas.RIGH)
      {
        ganador.style.display = "grid";
        ganador.innerHTML = "Azul!";
        animacion.style.animationName = "blue";
        ganador.style.color = "blue";
        gano = true;
        ya = true;
      }
      else if(t.keyCode == teclas.LEFT)
      {
        ganador.style.display = "grid";
        ganador.innerHTML = "Rojo!";
        animacion.style.animationName = "red";
        ganador.style.color = "red";
        gano = true;
        ya = true;

      }
    }
  }


  function atras()
  {
      var t = 11;

      var termina2 = setInterval(function(){

        t--;


        if(t > 0)
        {
          time.innerHTML = t;
          pregunta.style.display = "grid";
          pregunta.innerHTML = preguntas;

      }
          if(gano == true)
          {
            clearInterval(termina2);

            ya = true;
          }
          else if (t == 0) {
            pregunta.innerHTML = "Se acabo el tiempo!";
            ya = true;
          }
        },1000)

    }
}
}



})()
