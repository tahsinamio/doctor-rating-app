import React from 'react';
import { Link } from "react-router-dom"

const Admin = () => {
  return (
    <div>
      <h2>ADMIN DASHBOARD</h2>
      <div>
        <Link
          to="/create/doctor"
        >
          <button class="btn waves-effect waves-light">
            Add Doctor
            <i class="material-icons right">add</i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Admin