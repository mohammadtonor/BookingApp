import { Link } from 'react-router-dom';
import { userColumns, userRows } from '../../dataTableSource';
import './datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState } from 'react';


const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(data => data.id !== id));
  }

  const actionColumn = [
    {
        field: "action",
        headerName: "Actions",
        width: 200,
        renderCell: (params) => {
            return (
                <div className='cellAction'>
                  <Link to={'/users/test'}>
                    <div className='viewButton'>View</div>
                  </Link>
                    <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
    }
  ]
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        <span>Add New User</span>
        <Link to='/users/new'>
          Add New
        </Link>
      </div>
     <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable