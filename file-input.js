new Vue({
  el: '#app',
  data: {
    file: null,
    csvData: null,
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
    },
    loadCSV() {
      if (!this.file) {
        alert('Please select a CSV file.');
        return;
      }

      // Read the file and pass the data to the display screen
      const reader = new FileReader();
      reader.onload = (e) => {
        this.csvData = Papa.parse(e.target.result, { header: true, dynamicTyping: true });
        // Redirect to the CSV display screen
        window.location.href = `display-csv.html?file=${encodeURIComponent(JSON.stringify(this.csvData))}`;
      };
      reader.readAsText(this.file);
    },
  }
});


  
  