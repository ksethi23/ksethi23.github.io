new Vue({
  el: '#app',
  data: {
    columns: [],
    rows: [],
  },
  mounted() {
    // Retrieve CSV data from sessionStorage
    const storedData = sessionStorage.getItem('csvData');

    // Check if CSV data exists
    if (!storedData) {
      alert('Invalid CSV data.');
      // Redirect to the file input screen
      window.location.href = 'index.html';
      return;
    }

    try {
      // Parse the CSV data retrieved from sessionStorage
      const csvData = JSON.parse(storedData);
      this.columns = csvData.meta.fields;
      this.rows = csvData.data;
    } catch (error) {
      alert('Error parsing CSV data.');
      console.error(error);
      // Redirect to the file input screen
      window.location.href = 'index.html';
    }
  }
});




