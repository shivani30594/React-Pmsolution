import React from "react";
import { Link } from "react-router-dom";

const DeliverablesTableListItems = props => {
  return (
    <React.Fragment>
      <tr>
        <td>
          <Link to="/deliverablesWiki">Design Document</Link>
        </td>
        <td>
          <Link to="/workpackageWiki">WP01</Link>
        </td>
        <td>Document</td>
        <td>Arindam</td>
        <td>03/01/2020</td>
        <td>
          <select
            name="status"
            className="form-control"
            defaultValue="Transmitted"
          >
            <option selected disabled>
              Select
            </option>
            <option>NotStarted</option>
            <option>In Progress</option>
            <option>Submitted</option>
            <option>Transmitted</option>
            <option>Closed</option>
          </select>
        </td>
        <td>NULL</td>
        <td>NULL</td>
        <td>NULL</td>
        <td>
          <select name="public" className="form-control">
            <option>Y</option>
            <option>N</option>
          </select>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default DeliverablesTableListItems;
