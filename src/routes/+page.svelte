<div id="app">
<button class="add-note" type="button">+</button>
</div>
 <style>
   .add-note{
	height:200px;
	
	border:none;
	outline:none;
	
	background: rgba(0,0,0,0.1);
	border-radius:10px;
	font-size:100px;
	cursor: pointer;
	transition:background 0.2s;
}
#app{
  
overflow:auto;
display:grid;
grid-template-columns: repeat(auto-fill,200px);
padding:20px;
gap:20px;

}
 </style>
