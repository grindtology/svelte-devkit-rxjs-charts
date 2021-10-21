 <script>
   export let sSize = ""
export let sColor = "red"
 export let sSrc = "/favicon.png"
   let sWidth = ""
   let sHeight = ""

   $: {
     if(sSize === "sm") {
sWidth = "20px"
sHeight = "20px"
     }  else  if(sSize === "md") {
sWidth = "30px"
sHeight = "30px"
     }  else  if(sSize === "lg") {
sWidth = "40px"
sHeight = "40px"
     }  
   }
 </script>

 <img
      alt=""
      style={`color:${sColor}; min-width:${sWidth}; max-width:${sWidth}; max-height:${sHeight}; min-height:${sHeight};`}
      src={sSrc}
    />