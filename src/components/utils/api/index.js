import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://apiv2.payafrik.io',
    headers: {
       "Content-Type": "application/json",  
    },
});


const getData = (data) =>  instance({ 'method':'POST',  'url':'/sessions', data:data})


const  postData = (data) => instance({ 'method': 'POST', data})



export { getData, postData }

// 'url':'/query',
// 'params': {
//     'search':'parameter',
// },



// 'url':'/api',
// 'data': {
//     'item1':'data1',
//     'item2':'item2'
// },
// 'headers': {
//     'content-type':'application/json'  // override instance defaults
// }

  