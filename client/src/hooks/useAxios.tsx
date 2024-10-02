import { useState } from "react";
import axiosInstance from "./axiosInstance";

const useAxios = (config: any) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  const fetchData = async (data?: any) => {
    setLoading(true);
    try {
      const result = await axiosInstance({
        ...config,
        headers: {
          "x-access-token": localStorage.getItem("token")
        },
        data: {
          ...data,
          ...config?.data,
        },
        // transformResponse: [function (data) {
        //     return {
        //         ...data,
        //         id: data._id
        //     };
        //   }],
      });
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
