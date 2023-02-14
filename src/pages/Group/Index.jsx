import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { api } from '../../network/api';

function Index() {

    const [groups, setgroups] = useState([]);

    useEffect(() => {
        api.getAll('/groups')
            .then(res => {
                setgroups(res)
                console.log('Res', res);
            })
          
    }, [])

    const handleDelete = (id) => {
        console.log(id);
    };

    const columns = [
        { field: 'id', headerName: 'Group ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'createDate', headerName: 'Create Date', width: 150 },
        { field: 'members', headerName: 'Members', width: 500 },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: (params) => {
                return <button onClick={() => handleDelete(params.id)}>Delete</button>
            }
        }
    ];

    return (<>
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={groups}
                columns={columns}
            />
        </div>

    </>)
}

export default Index