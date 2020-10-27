import React from "react";
import { Link } from "react-router-dom";

const ResourcesTableListItems = props => {
  return (
    <React.Fragment>
      <tr>
        <td>
          <Link to="/projectwiki">P0001</Link>
        </td>
        <td>
          <Link to="/workpackageWiki">WP01</Link>
        </td>
        <td>A01</td>
        <td>1 Jul 19</td>
        <td>31 Aug 19</td>
        <td>
          <select name="status" className="form-control" defaultValue="open">
            <option selected disabled>
              Select
            </option>
            <option>Open</option>
            <option>Closed</option>
            <option>In Progress</option>
          </select>
        </td>
        <td>NULL</td>
      </tr>
    </React.Fragment>
  );
};

export default ResourcesTableListItems;
