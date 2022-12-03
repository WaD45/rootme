<script type="text/javascript">
  var inputs = document.getElementsByTagName("input");
  for (x = 0 ; x < inputs.length ; x++){
    myname = inputs[x].getAttribute("name");
    if(myname.indexOf("FLAG")==0){
      alert(myname);
       }
    }
    </script>
