import React from "react";
import { Link } from "react-router-dom";

const MeetingTableListItems = props => {
  return (
    <React.Fragment>
      <tr>
        <td>
          <Link to="#">1 Apr 19</Link>
        </td>
        <td>Design Document Review</td>
        <td>Neeraj, @Arindam, @Suresh</td>
        <td>
          <i className="fa fa-file" />
        </td>

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

export default MeetingTableListItems;
