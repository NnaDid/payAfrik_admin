import React, { useState,useEffect} from 'react'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons';
import CircularProgress from '@mui/material/CircularProgress';
// import {UserRows} from '../../DummyData'
import {getAllUsers} from '../../components/utils/api'
import {getAminUserToken} from '../../components/utils/Common'

import { Link } from 'react-router-dom'; 

export default function UserList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const AllUsers =  async ()=>{
            const userAccessToken = getAminUserToken(); 
             await getAllUsers(userAccessToken).then(res=>{
                const DataResult = res.data.data.categories;  
                setData(DataResult); 
                console.log(data);
            }).catch(err=>{
                console.log(err)
            })       
        }
        AllUsers();
    }, [data]);

    const handleDelete = (id)=>{  setData(data.filter((item)=>item.id !==id)) }
 
const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'accountType',headerName: 'AccountType', width: 150, },
    { field: 'name',   headerName: 'Name', width: 200, },
    { field: 'email',  headerName: 'Email', width: 200 },
    { field: 'phone',  headerName: 'Phone', width: 200 },
    { field: 'bvnVerified', headerName: 'Bvn Status',  width: 150,  }, 
    { field: 'confirmed', headerName: 'Confirmed',  width: 150,  }, 
    { field: 'deactivated', headerName: 'Deactivated', width: 150,  }, 
    { field: 'devices', headerName: 'Devices', width: 200,  }, 
    { field: 'paymentcards', headerName: 'Payment Cards', width: 200,  }, 
    { field: 'otp', headerName: 'OTP', width: 150,  }, 
    { field: 'otpExpiry', headerName: 'OTP Expiry', width: 200,  }, 
    { field: 'smartMeterInterest', headerName: 'SmartMeterInterest', width: 250,  }, 
    { field: 'userCode', headerName: 'UserCode', width: 200,  }, 
    { field: 'createdAt', headerName: 'CreatedAt', width: 200,  }, 
    { field: 'updatedAt', headerName: 'UpdatedAt', width: 200,  }, 
    
    
    { field: 'action',headerName: 'Action', width: 150,
      renderCell:(params)=>{
          return(
              <>
                <Link to ={"/user/"+params.row.id} >
                    <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
              </>
          )
      }
    }, 
  ];
    return (
        
        <div className="userList" style={{ height: 400, width: '100%', margin:20}}>
           <h1 className="usersTitle">Users</h1>
           {!data ? <CircularProgress /> : 
                   <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    checkboxSelection
                />
               
           }
           
           

        </div>
    )
}
