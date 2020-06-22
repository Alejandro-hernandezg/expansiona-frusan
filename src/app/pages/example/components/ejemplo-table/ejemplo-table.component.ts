import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frusan-ejemplo-table',
  templateUrl: './ejemplo-table.component.html',
  styleUrls: ['./ejemplo-table.component.scss']
})
export class EjemploTableComponent implements OnInit {

  ddlBusqueda = '0';
  ddlHuerto = '0';
  ddlPlanificada = '0';
  ddlProducto = '0';

  mostrarHuerto = false;
  mostrarPlanificada = false;
  mostrarProducto = false;

  datosTabla = [
    {
    Aplicacion: 3,
    FechaPlanificada: '04-06-2020',
    Huerto: 'S Globe 2015',
    SectorHuerto: 'L1-L2',
    ObjetivoAplicacion: 'Nutrición',
    Producto: 'Sulfato de Mg',
    IngredienteActivo: 'Mg' ,
    Dosis: '2',
    UnidadMedida: 'Lt' ,
    Dilucion: '100',
    Volumen: '1000',
    },
    {
      Aplicacion: 3,
      FechaPlanificada: '04-06-2020',
      Huerto: 'S Globe 2015',
      SectorHuerto: 'L1-L2',
      ObjetivoAplicacion: 'Nutrición',
      Producto: 'Sulfato de Mg',
      IngredienteActivo: 'Mg' ,
      Dosis: '2',
      UnidadMedida: 'Lt' ,
      Dilucion: '100',
      Volumen: '1000',
      },
      {
        Aplicacion: 3,
        FechaPlanificada: '04-06-2020',
        Huerto: 'S Globe 2015',
        SectorHuerto: 'L1-L2',
        ObjetivoAplicacion: 'Nutrición',
        Producto: 'Sulfato de Mg',
        IngredienteActivo: 'Mg' ,
        Dosis: '2',
        UnidadMedida: 'Lt' ,
        Dilucion: '100',
        Volumen: '1000',
        },
        {
          Aplicacion: 3,
          FechaPlanificada: '04-06-2020',
          Huerto: 'S Globe 2015',
          SectorHuerto: 'L1-L2',
          ObjetivoAplicacion: 'Nutrición',
          Producto: 'Sulfato de Mg',
          IngredienteActivo: 'Mg' ,
          Dosis: '2',
          UnidadMedida: 'Lt' ,
          Dilucion: '100',
          Volumen: '1000',
          },
          {
            Aplicacion: 3,
            FechaPlanificada: '04-06-2020',
            Huerto: 'S Globe 2015',
            SectorHuerto: 'L1-L2',
            ObjetivoAplicacion: 'Nutrición',
            Producto: 'Sulfato de Mg',
            IngredienteActivo: 'Mg' ,
            Dosis: '2',
            UnidadMedida: 'Lt' ,
            Dilucion: '100',
            Volumen: '1000',
            },
            {
              Aplicacion: 3,
              FechaPlanificada: '04-06-2020',
              Huerto: 'S Globe 2015',
              SectorHuerto: 'L1-L2',
              ObjetivoAplicacion: 'Nutrición',
              Producto: 'Sulfato de Mg',
              IngredienteActivo: 'Mg' ,
              Dosis: '2',
              UnidadMedida: 'Lt' ,
              Dilucion: '100',
              Volumen: '1000',
              },
              {
                Aplicacion: 3,
                FechaPlanificada: '04-06-2020',
                Huerto: 'S Globe 2015',
                SectorHuerto: 'L1-L2',
                ObjetivoAplicacion: 'Nutrición',
                Producto: 'Sulfato de Mg',
                IngredienteActivo: 'Mg' ,
                Dosis: '2',
                UnidadMedida: 'Lt' ,
                Dilucion: '100',
                Volumen: '1000',
                },
                {
                  Aplicacion: 3,
                  FechaPlanificada: '04-06-2020',
                  Huerto: 'S Globe 2015',
                  SectorHuerto: 'L1-L2',
                  ObjetivoAplicacion: 'Nutrición',
                  Producto: 'Sulfato de Mg',
                  IngredienteActivo: 'Mg' ,
                  Dosis: '2',
                  UnidadMedida: 'Lt' ,
                  Dilucion: '100',
                  Volumen: '1000',
                  },
                  {
                    Aplicacion: 3,
                    FechaPlanificada: '04-06-2020',
                    Huerto: 'S Globe 2015',
                    SectorHuerto: 'L1-L2',
                    ObjetivoAplicacion: 'Nutrición',
                    Producto: 'Sulfato de Mg',
                    IngredienteActivo: 'Mg' ,
                    Dosis: '2',
                    UnidadMedida: 'Lt' ,
                    Dilucion: '100',
                    Volumen: '1000',
                    },
                    {
                      Aplicacion: 3,
                      FechaPlanificada: '04-06-2020',
                      Huerto: 'S Globe 2015',
                      SectorHuerto: 'L1-L2',
                      ObjetivoAplicacion: 'Nutrición',
                      Producto: 'Sulfato de Mg',
                      IngredienteActivo: 'Mg' ,
                      Dosis: '2',
                      UnidadMedida: 'Lt' ,
                      Dilucion: '100',
                      Volumen: '1000',
                      },
                      {
                        Aplicacion: 3,
                        FechaPlanificada: '04-06-2020',
                        Huerto: 'S Globe 2015',
                        SectorHuerto: 'L1-L2',
                        ObjetivoAplicacion: 'Nutrición',
                        Producto: 'Sulfato de Mg',
                        IngredienteActivo: 'Mg' ,
                        Dosis: '2',
                        UnidadMedida: 'Lt' ,
                        Dilucion: '100',
                        Volumen: '1000',
                        },
  ];

  constructor() { }

  ngOnInit(): void {
    this.iniciarValores();
  }

  iniciarValores(){
    this.mostrarHuerto = true;
    this.mostrarPlanificada = true;
    this.mostrarProducto = true;
  }


  onOptionsSelected(eve){
    this.iniciarValores();

    if (eve === '2')
    {
      this.mostrarHuerto = false;
    }

    if (eve === '1')
    {
      this.mostrarPlanificada = false;
    }

    if (eve === '3')
    {
      this.mostrarProducto = false;
    }

  }
}