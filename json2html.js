export default function json2html(data) {
  // Start the table with the data-user attribute
  let html = `<table data-user="divyapoleboina@gmail.com">`;

  // Extract the headers from the data keys
  const headers = Object.keys(data[0]);
  html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;

  // Generate the rows
  html += `<tbody>`;
  data.forEach(row => {
    html += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
  });
  html += `</tbody></table>`;

  return html;
}
