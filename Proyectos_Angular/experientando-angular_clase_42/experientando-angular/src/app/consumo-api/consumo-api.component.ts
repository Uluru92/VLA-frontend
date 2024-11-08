import { Component, OnInit } from '@angular/core';
import { ConsumoApiPaisService } from '../services/consumo-api/consumo-api-pais.service';
import { Pais } from '../models/Pais';


@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrl: './consumo-api.component.scss'
})
export class ConsumoApiComponent implements OnInit
{
  palabraClave: string = "";
  palabrasFiltradas: any[] = [];
  paisesString: string = ""

  vectorPaises : Pais[] = [];

  constructor(private paisesServices : ConsumoApiPaisService){}

  ngOnInit(): void {
      //Aqui es donde yo hago el consumo del api
    
      this.paisesServices.obtenerPaisesDelAPI().subscribe(
        data =>
          {           
            this.vectorPaises = data.DetalleRespuesta;
            console.log(this.vectorPaises) 
          },
        error=>{
          console.log("Error al cargar los paises", error)
        }
      )
  }

  filtrarPalabra(): void
  {

    this.paisesServices.obtenerPaisesDelAPI().subscribe(
      data => {
        this.vectorPaises = data.DetalleRespuesta;
        console.log(this.vectorPaises)
      },
      error => {
        console.log("Error al cargar los paises", error)
      }
    )

    const paisesString: string = this.vectorPaises.join(' ');

    if (this.palabraClave.trim() !== '') {
      alert(paisesString)

    }
  }
}