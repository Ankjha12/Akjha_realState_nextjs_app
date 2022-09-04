import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
// export const baseURL = "https://bayut.p.rapidapi.com";

// headers: {
//     'X-RapidAPI-Key': '0130a84b67mshb841c4a4c681103p14a672jsnf1f198840d99',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// };

// headers: {
//   'X-RapidAPI-Key': '0130a84b67mshb841c4a4c681103p14a672jsnf1f198840d99',
//   'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }

// export const fetchLocationApi = async (url) => {
//   const { data } = await axios.get(url, {
//     headers: {
//       "X-RapidAPI-Key": "0130a84b67mshb841c4a4c681103p14a672jsnf1f198840d99",
//       "X-RapidAPI-Host": "bayut.p.rapidapi.com",
//     },
//   });
// };

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "0130a84b67mshb841c4a4c681103p14a672jsnf1f198840d99",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
