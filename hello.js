<script>
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("orderForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        alert("Order success. Thank you");
    })
});
</script>