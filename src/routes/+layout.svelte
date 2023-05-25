<script lang="ts">
  import '@picocss/pico'
  function goTo(){
 window.location.href = "./"

  }
</script>

<article>
<nav class="container-fluid">
  <ul>
      <li><img src="/Notess.gif" alt="logo" style="height:40px;"></li>
    <li  on:click={()=>goTo()}><strong>Notess</strong></li>
  </ul>
  <ul>
  <details role="list">
  <summary aria-haspopup="listbox" role="button" style="height:35px; width:50%px; padding:5px; margin-top:20px; font-size:.7rem;">
    Quick Search
  </summary>
  <ul role="listbox" style="font-size:.7rem;">
    <li><a>Action</a></li>
    <li><a>Another action</a></li>
    <li><a>Something else here</a></li>
  </ul>
</details> 
<li> <input type="text" id="search" style="height:35px;" placeholder="search"></li>

  </ul>
</nav>
</article>
<slot/>
<style>
  article{
    padding:0px;
    margin:0px;
}
</style>
