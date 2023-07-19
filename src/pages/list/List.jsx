import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/datatable/DataTable';
import './list.scss';

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="listTable">
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default List;