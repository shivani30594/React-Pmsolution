import React from "react";
import Workbook from "react-excel-workbook";

const ExportExcel = props => {
  const { data, filename = "example.xlsx", btnname = "Excel" } = props;
  const data1 = data.rows;
  return (
    <React.Fragment>
      <Workbook
        filename={filename}
        element={<span className="">{btnname}</span>}
      >
        <Workbook.Sheet data={data1} name="Sheet A">
          {data.columns.map(data => (
            <Workbook.Column label={data.label} value={data.field} />
          ))}
        </Workbook.Sheet>
      </Workbook>
    </React.Fragment>
  );
};

export default ExportExcel;
