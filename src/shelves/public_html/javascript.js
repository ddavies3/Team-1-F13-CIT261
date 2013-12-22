<script>
if(typeof(Storage)!=="undefined")
  {
  localStorage.list="beans";
  document.getElementById("result").innerHTML="Item: " + localStorage.lastname;
  }
else
  {
  document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
  }
</script>
