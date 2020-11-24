var app = new Vue({
    el: '#app',
    data: {
      total: 0,
      items: [
        { tipo: 'Analisis', precio: 300 },
        { tipo: 'Diseño', precio: 400 },
        { tipo: 'Desarrollo', precio: 250 },
        { tipo: 'Pruebas', precio: 220 },
        { tipo: 'Deploy', precio: 280 }
      ]
    },
      methods: {
        changeClass: function () {
          var precio = Number(event.target.children[1].innerText);
          if(event.target.className == "agregado")
          {
              event.target.className = "no-agregado";
              this.total -= precio;
          }
          else
          {
              event.target.className = "agregado";
              this.total += precio;
          }
        }
      }
  })
  