import React from "react"

import styled from "styled-components"
const StyledFigure = styled.figure `
max-width: 60%;
figcaption {
    font-style: italic;
}

`


export default function Figure({imageURL, date}){
    return(
    <StyledFigure>
    <img src={imageURL}/> 
    <figcaption>
      This was taken on {date}
    </figcaption>
  </StyledFigure>
    )
  }