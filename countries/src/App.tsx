import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { CountryType } from './types';
import Country from './components/Country';
import Loading from './components/Loading';

function App() {

    const [countries, setCountries]=useState<CountryType[]>([])
    const [loading, setLoading]= useState<boolean>(false)

    const getCountries = async () =>{
        setLoading(true)
        try {
            const {data} = await axios.get<CountryType[]>("https://restcountries.com/v3.1/all");
            setCountries(data);
            
        } catch (error) {
            console.log("there is an error")
        } finally{
            setLoading(false);
        }


    }
   

    useEffect(()=>{
        getCountries();

    },[]);


  return (
      <div>
          <Loading loading={loading}>
          {countries.map((country, index)=>{
              return (

                <Country key={index} coun={country} name={"mesut"}/>
                //   <p key={index} >
                //      {country.continent}-{country.capital}
                //   </p>
              )
          })}
          </Loading>
      </div>
  )
}

export default App