const ExcelJS = require('exceljs');

exports.convertToExcel = async (req, res) => {
  const jsonData = req.body;

  // Create a new workbook and worksheet
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Data');

  // Add column headers
  const headers = Object.keys(jsonData[0]);
  worksheet.columns = headers.map(header => ({ header, key: header, width: 20 }));

  // Add rows
  jsonData.forEach(data => {
    worksheet.addRow(data);
  });

  // Send the Excel file directly as a response
  res.setHeader('Content-Disposition', 'attachment; filename=data.xlsx');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  
  await workbook.xlsx.write(res);
  res.end();
};
