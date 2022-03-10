import React, { FunctionComponent } from 'react'
import { CountryType } from '../types';


interface ICountryProps{
    coun:CountryType;
    name: string;
}

const Country :FunctionComponent<ICountryProps> =(props)=>{
    const {coun} = props;
  return (
    <div>
        {coun.capital}  +  {props.name}
    </div>
  )
}

export default Country