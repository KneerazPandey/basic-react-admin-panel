import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataSource';
import { Link } from 'react-router-dom';
import './datatable.scss';



const DataTable = () => {
  const actionColumns = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to='/user/test' style={{textDecoration: 'none'}}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      } 
    }
  ];

  return (
    <div className='dataTable'>
       <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumns)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable;