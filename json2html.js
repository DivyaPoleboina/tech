export default function(data) {
  // Check if the input data is an array of objects
  if (!Array.isArray(data)) {
    throw new Error("Data must be an array of objects.");
  }

  // Get headers from the first object in the array
  const headers = Object.keys(data[0]);
  
  // Initialize table HTML structure
  let table = '<table data-user="sairamyaakkiraju@gmail.com"><thead><tr>';

  // Add table headers dynamically
  headers.forEach(header => {
    table += `<th>${header}</th>`;  // Correct template literal usage
  });
  
  table += '</tr></thead><tbody>';

  // Add table rows dynamically
  data.forEach(row => {
    table += '<tr>';
    
    // For each header, add the corresponding value from the row
    headers.forEach(header => {
      table += `<td>${row[header]}</td>`;  // Correct template literal usage
    });

    table += '</tr>';
  });
  
  table += '</tbody></table>';

  return table;  // Return the generated table
}
