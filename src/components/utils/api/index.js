import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://apiv2.payafrik.io',
    headers: {
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25maXJtZWQiOnRydWUsIl9pZCI6IjYwY2M2MTQxNDU3MzIxM2IzZWVhNWExYiIsIm5hbWUiOiJJbW1hbnVlbCBPbnVtIiwicGhvbmUiOiIrMjM0ODA2MjQ2NTUyOSIsImVtYWlsIjoiaW1tYW51ZWwuby5vbnVtQGdtYWlsLmNvbSIsIm90cCI6Ijk2MzUyMyIsImNyZWF0ZWRBdCI6IjIwMjEtMDYtMThUMDk6MDI6NTcuNjk2WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDYtMThUMDk6NTQ6NTUuMjk1WiIsIl9fdiI6MCwic2Vzc2lvbiI6IjYwY2M5YzlmZDliODVhM2ZiMGZiYjFlMCIsImlhdCI6MTYyNDAyMjE3NSwiZXhwIjoxNjI0MDIzMDc1fQ.1CjZ0NIZo69_B0R3Dz4-RuqBZb0VQqqHOaI9x6PosEg",
      "Content-Type": "application/json",
    },
});

export default {
    getData: (others) =>
    instance({
        'method':'GET',
        others,
    }),
    postData: (others) =>
    instance({
        'method': 'POST',
        others,
    })
}

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

  