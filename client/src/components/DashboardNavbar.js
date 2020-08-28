import React, {useState} from 'react';
import Sidebar from 'react-sidebar';
import {MdDehaze, MdSettings} from 'react-icons/md';
import SidebarContent from './SidebarContent';

const DashboardNavbar = () => {
  // eslint-disable-next-line;
  const [sidebarOpen, setSidebarOpen] = useState (false);

  const onSetSidebarOpen = open => {
    setSidebarOpen (open);
  };

  return (
    <Sidebar
      sidebar={<SidebarContent />}
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{
        sidebar: {background: '#a11d15', color: 'white', width: '300px'},
      }}
    >
      <div className="p-3 mb-5" style={{backgroundColor: '#a11d15'}}>
        <MdDehaze
          color="white"
          size="20"
          onClick={() => onSetSidebarOpen (true)}
        >
          Open sidebar
        </MdDehaze>

        <div className="float-right text-white small">
          <MdSettings color="white" size="20px" />
        </div>

      </div>
    </Sidebar>
  );
};

export default DashboardNavbar;
