import React, {Fragment} from 'react';

//import '../../styles/App.scss';
import './style.scss';
import SearchWideBar from "../../components/SearchWideBar/SearchWideBar";
import UserManage from "../../components/UserManage/UserManage"

function UserManagement() {
  return (
      <Fragment>
        <SearchWideBar />
        <UserManage />
      </Fragment>
  );
}

export default UserManagement;
