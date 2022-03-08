 import axios from 'axios';

 const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'

 const options = {
    // method: 'GET',
    // url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
    params: {
      latitude: '12.91285',
      longitude: '100.87808',
    //   limit: '30',
    //   currency: 'USD',
    //   distance: '2',
    //   open_now: 'false',
    //   lunit: 'km',
    //   lang: 'en_US'
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'e83cb8e58dmshbf19c1984ea6790p105672jsn4c24858dff74'
    }
  };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {  
//       console.error(error);
//   });

 export const getPlacesData = async () =>{
     try{
         //request
         const {data: { data }} = await axios.get(URL, options);

         return data;
     } catch (error) {
         console.log(error);

     }
 }

 