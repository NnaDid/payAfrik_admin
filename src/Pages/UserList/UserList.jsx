import React, { useState } from 'react'
import './UserList.css'

import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons'; 
import {UserRows} from '../../DummyData'
import { Link } from 'react-router-dom';


export default function UserList() {
    const [data, setData] = useState(UserRows);

    const handleDelete = (id)=>{ 
        setData(data.filter((item)=>item.id !==id))
    }

    
const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'Username', width: 200, renderCell: (params)=>{
        return (
            <div className="userListUser">
                <img className="userListImg" src={params.row.avartar} alt=""/>
                {params.row.username}
            </div>
        )
    }},
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status', 
      width: 120,
    }, 
    {
      field: 'transaction',
      headerName: 'Transaction', 
      width: 160,
    }, 
    {
      field: 'action',
      headerName: 'Action', 
      width: 150,
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
           <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                checkboxSelection
            />
        </div>
    )
}
