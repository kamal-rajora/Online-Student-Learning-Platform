import React from 'react'
import FacilitiesCard from './FacilitiesCard'

export default function Facilities() {

    var icons = ["fence","drum","crayons","toy-car","sandwich","backpack"]
    var heading = ["Play Ground","Music and Dance","Arts and Crafts","Safe Transportation","Healty Food","Education"]
    var text = ["kasd labore kasd et dolor est rebum dlor ut, clita dolor vera lorem amet elitr"]
    var val = ["050","022","030","017","025","047"]
  return (
    // <!-- Facilities Start -->
    <div class="container-fluid pt-5">
        <div class="container pb-3">
            <div class="row">
                {icons.map((value,index)=>{

                    return <FacilitiesCard val={val[index]} icon={icons[index]} heading = {heading[index]} text={text}/>

                })}
                
                
                
                
            </div>
        </div>
    </div>
    // <!-- Facilities Start -->

  )
}
