import { Injectable } from '@angular/core';
import {Place} from './place.model'
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[]=[
    {id:'1',
    title:'Eiffel Tower',
    imageURL:'https://www.eluniverso.com/resizer/M126TTnDu3BgNmzt24x4qEzMmro=/1040x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/542RZLPEBFADZDGKFGILSM2BA4.jpg'  
    ,comments:['Awesone place','Wonderful Experience']
  
  },
  {id:'2',
  title:'Statue of Liberty ',
  imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg'  
  ,comments:['Awesone place','Wonderful Experience']

},
{id:'3',
  title:'Awesome Place ',
  imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg'  
  ,comments:[]}






]

  constructor() { }

  getPlaces(){
    return [...this.places]
  }

  addPlace(title: string,imageURL:string){
    this.places.push({
      title,
      imageURL,
      comments:[],
      id:this.places.length+ 1+""
    });
  }

  deletePlace(placeId:string){
      this.places=this.places.filter(place=>{
        return place.id!==placeId
      })
  }

  getPlace(placeId:string){
    return{
      ...this.places.find(place => {
        return place.id === placeId
      })   //Busco ID, Agrego a PLACES
    }
  }

}
