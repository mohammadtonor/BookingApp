import { userColumns, userRows } from '../../dataTableSource';
import './datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const DataTable = () => {
  const actionColumn = [
    {
        field: "action",
        headerName: "Actions",
        width: 200,
        renderCell: () => {
            return (
                <div className='cellAction'>
                    <div className='viewButton'>View</div>
                    <div className='deleteButton'>Delete</div>
                </div>
            )
        }
    }
  ]
  return (
    <div className='datatable'>
     <DataGrid
        rows={userRows}
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