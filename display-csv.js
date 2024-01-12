new Vue({
  el: '#app',
  data: {
    columns: [],
    rows: [],
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const csvDataString = urlParams.get('file');

    if (!csvDataString) {
      alert('Invalid CSV data.');
      // Redirect to the file input screen
      window.location.href = 'file-input.html';
      return;
    }

    try {
      // Parse the CSV data received from the file input screen
      const csvData = JSON.parse(decodeURIComponent(csvDataString));
      this.columns = csvData.meta.fields;
      this.rows = csvData.data;
    } catch (error) {
      alert('Error parsing CSV data.');
      console.error(error);
      // Redirect to the file input screen
      window.location.href = 'file-input.html';
    }
  }
});

