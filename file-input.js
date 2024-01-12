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
        // Store CSV data in sessionStorage
        sessionStorage.setItem('csvData',JSON.stringify(this.csvData));
        
        // Redirect to the CSV display screen
        window.location.href = 'display-csv.html';
      };
      reader.readAsText(this.file);
    },
  }
});


  
  