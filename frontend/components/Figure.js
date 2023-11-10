import React from "react"
import Card from './Card'


export default function Figure({imageURL, date}){
    return(
    <figure>
    <img src={imageURL}/> 
    <figcaption>
      This was taken on {date}
    </figcaption>
  </figure>
    )
  }