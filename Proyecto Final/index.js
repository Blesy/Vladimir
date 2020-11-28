
var app = new Vue({
    el: '#app',
    data: {
      disabled: false,
      boton: 'Agregar',
      indice: 0,
      form: {
        nombre: '',
        apellido: '',
        edad: Number,
        grado: 'Primaria',
        lenguaje: 'Javascript'
      },
      filas: [
        {
          nombre: 'José',
          apellido: 'López',
          edad: 22,
          grado: 'Universidad',
          lenguaje: 'PHP'
        },
        {
          nombre: 'Maria',
          apellido: 'Gonzalez',
          edad: 18,
          grado: 'Preparatoria',
          lenguaje: 'C#'
        },
        {
          nombre: 'David',
          apellido: 'Díaz',
          edad: 28,
          grado: 'Maestria',
          lenguaje: 'PHP'
        },
        {
          nombre: 'Ernesto',
          apellido: 'Espinoza',
          edad: 23,
          grado: 'Universidad',
          lenguaje: 'PHP'
        },
        {
          nombre: 'Saúl',
          apellido: 'Rodriguez',
          edad: 19,
          grado: 'Preparatoria',
          lenguaje: 'C#'
        },
        {
          nombre: 'Juan',
          apellido: 'López',
          edad: 22,
          grado: 'Universidad',
          lenguaje: 'PHP'
        },
        {
          nombre: 'Andrea',
          apellido: 'Gonzalez',
          edad: 18,
          grado: 'Preparatoria',
          lenguaje: 'C#'
        },
        {
          nombre: 'Daniel',
          apellido: 'Díaz',
          edad: 28,
          grado: 'Maestria',
          lenguaje: 'PHP'
        },
        {
          nombre: 'Enrique',
          apellido: 'Espinoza',
          edad: 23,
          grado: 'Universidad',
          lenguaje: 'PHP'
        },
        {
          nombre: 'Samuel',
          apellido: 'Rodriguez',
          edad: 19,
          grado: 'Preparatoria',
          lenguaje: 'C#'
        }
      ]
    },
    methods: {
      agregar: function () {
        var form = this.form;
        if (form.nombre && form.apellido && form.edad > 12) {
          if (this.boton === 'Agregar') {
            this.filas.push(form);
          } else if (this.boton === 'Guardar') {
            this.filas[this.indice] = form;
            this.disabled = false;
            this.boton = 'Agregar';
            var row = document.getElementsByTagName('tr')[this.indice+1];
            row.setAttribute("class", "");
          }
          this.form = {
            nombre: '',
            apellido: '',
            edad: Number,
            grado: 'Primaria',
            lenguaje: 'Javascript'
          }
        }
      },
      eliminar: function() {
        var index = event.target.parentElement.parentElement.rowIndex - 1;
        var arr = [];
        for (let i = 0; i < this.filas.length; i++) {
          if (i !== index) {
            arr.push(this.filas[i])
          }          
        }
        this.filas = arr;
      },
      editar: function() {
        var index = event.target.parentElement.parentElement.rowIndex - 1;
        this.form = this.filas[index];
        this.disabled = true;
        this.boton = 'Guardar';
        this.indice = index;
        var row = document.getElementsByTagName('tr')[index+1];
        row.setAttribute("class", "active");
      }
    }
  })
  