//  RESET() method and CLEAR() method & differences

// REST() - https://codepen.io/mr-xpert/pen/WBROzo?editors=1010

<!DOCTYPE html>
<html>
<body>

<p>Press the "Reset form" button to reset the form.</p>

<form id="myForm">
    Weight: <input type="number"><br>
    Reps: <input type="number"><br><br>
    <input type="button" onclick="myFunction()" value="Reset form">
</form>

<script>
function myFunction() {
    // Syntax formObject.reset()
    // here is the reset() to the form 
  document.getElementById("myForm").reset();
}
</script>

</body>
</html>