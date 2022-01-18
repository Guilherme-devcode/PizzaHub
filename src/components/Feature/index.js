import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements'

function Feature() {
    return (
        <FeatureContainer>
            <h1>Pizza do dia: Doritos Cheddar!</h1>
            <p>Os ingredientes são: 
            muçarela, doritos, cheddar, bacon e azeitonas!</p>
            <FeatureButton>Peça Já</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
