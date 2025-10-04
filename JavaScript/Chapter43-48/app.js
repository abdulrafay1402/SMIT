function showAlert(mobileName) {
        alert('You clicked on: ' + mobileName);
      }

      function deleteRow(btn) {
        if (confirm('Are you sure you want to delete this record?')) {
          const row = btn.parentNode.parentNode;
          row.parentNode.removeChild(row);
        }
      }

      function toggleText() {
        const moreText = document.getElementById('moreText');
        const seeMoreSpan = document.querySelector('.see-more');
        
        if (moreText.style.display === 'none' || moreText.style.display === '') {
          moreText.style.display = 'block';
          seeMoreSpan.textContent = 'see less';
        } else {
          moreText.style.display = 'none';
          seeMoreSpan.textContent = 'see more';
        }
      }