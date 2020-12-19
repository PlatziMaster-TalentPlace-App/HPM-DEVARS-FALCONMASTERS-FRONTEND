import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'https://hpm-devars-falconmasters-backend-1toe9ysiq.vercel.app/api/vacancies';

const useInitialState = () => {
  const [vacancies, setVacancies] = useState([])

  useEffect(async () => {
    const response = await axios(API)
    setVacancies(response.data)
  }, [])

  return {
    vacancies
  }
}

export default useInitialState
