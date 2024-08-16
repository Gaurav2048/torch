import { useState } from 'react';
import axiosInstance from './axiosInstance';

const useAxios = (config: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (data: any) => {
    try {
      const result = await axiosInstance({
        ...config,
        data
        // transformResponse: [function (data) {
        //     return {
        //         ...data, 
        //         id: data._id
        //     };
        //   }],
      });
      console.log('hook', result.data)
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };


  return { response, error, loading, fetchData };
};

export default useAxios;
