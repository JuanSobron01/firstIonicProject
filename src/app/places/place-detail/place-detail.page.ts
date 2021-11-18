import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
//Angular ROUTER PERMITE NAVEGAR
//ActivateRoute permite mostrar los datos relacionadas a la URL donde estoy

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place  //Propiedad 

  constructor(private activatedRoute: ActivatedRoute, private placesServices: PlacesService,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      //redirect
      const recipeId=paramMap.get('placeId')
      console.log(recipeId)
      this.place=this.placesServices.getPlace(recipeId)
      console.log(this.place)
    })
  }

  deletePlace(){
    this.placesServices.deletePlace(this.place.id);
    this.router.navigate(['/places'])
    
  }

}
