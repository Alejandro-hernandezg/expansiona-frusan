import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'frusan-formulario-inicio',
  templateUrl: './formulario-inicio.component.html',
  styleUrls: ['./formulario-inicio.component.scss']
})
export class FormularioInicioComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
     /*  nombre: ['Alejandro', [Validators.required, Validators.pattern('^[0-9.]+$')]  ], */
      nombre: ['Alejandro', [Validators.required]],
      apellido: ['Hernandez', [Validators.required]],
    });

    this.form.valueChanges.subscribe(data => {
      console.log(this.form.valid);
    });
  }

  muestraDatos() {
    console.log(this.form.value);
    const nombre = this.form.get('nombre').value;
    const apellido = this.form.get('apellido').value;
    alert('Mi nombre es: ' + nombre + ' ' + apellido);

/*     this.form.patchValue({
      nombre: 'Ricardo',
      apellido: 'Bastardo'
    }); */

    /* this.form.get('nombre').setValue('Claudio');
    this.form.get('apellido').setValue('Nagdar'); */

  }

}
