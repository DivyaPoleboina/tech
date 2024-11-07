export default function(data) {

  if (lArray.isArray(data)) {
  
  throw new Error("Data must be an array of objects."); }
  
  const headers = Object.keys(data[0]);
  
  let table<table data-user="sairamyaakkiraju@gmail.com"><thead><tr>";
  
  // Add table headers
  
  headers.forEach(header =>
   {
  
  table += '<th>${header}</th>";
  
  });
  
  table += </tr></thead><tbody>";
  
  // Add table rows
  
  data.forEach(row => {
  
  table += '<tr>';
  
  headers.forEach(header => {
  
  });
  
  A
  
  table += "<td>${row[header]}</td>";
  
  table += '</tr>';
  
  });
  table += "</tbody></table>";

return table;
}
