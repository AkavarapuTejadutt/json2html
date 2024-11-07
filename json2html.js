export default function json2html(data) {
    // Extract unique headers from the data
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Generate table header
    const thead = `<thead>
      <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
    </thead>`;
  
    // Generate table body
    const tbody = `<tbody>
      ${data.map(row => `<tr>${
        headers.map(header => `<td>${row[header] || ''}</td>`).join('')
      }</tr>`).join('')}
    </tbody>`;
  
    // Combine into the full table
    return `<table data-user="akavaraputejadutt@gmail.com">
      ${thead}
      ${tbody}
    </table>`;
  }
  