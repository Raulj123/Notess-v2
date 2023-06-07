<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData
	console.log(data)
	$: ({notes}= data)
	function addNote(){

	console.log("clicked")
	 window.location.href = "./addPage/"
	} 
	</script>
	
	
	
	<div id="app">
	<button class="add-note" type="button" on:click={()=>addNote()}>+</button>
	</div>
	{#each notes as note}
	  <div class="note-card" >
		<div class="title">{note.title}</div>
		<div class="preview">{note.content}</div>
	
		<div class="tag-wrapper">
		<div class="tag">{note.label}</div>
	  </div>
	
	  <div class="card-footer">
		<div class="date">{note.date}</div> 
	  </div>
	</div>
	{/each}
	
	<style>
	.note-card{
		width: 200px;
		height: 200px;
		margin-right: 15px;
		background-color: #fff;
		padding: 15px;
		border-radius: 10px;
		box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
		display: grid;
		grid-template-rows: 1fr 4fr 2fr 1fr;
	}
	  .title {
		  font-weight: bold;
		  margin-bottom: 10px;
		}
	.preview {
		  font-size: 15px;
		  word-break: break-word;
		}
	.tag {
		  background-color: #d6d2d2;
		  padding: 2px 10px;
		  border-radius: 20px;
		  font-size: 12px;
		  margin-right: 5px;
		  height: 15px;
		  width: 100px;
		  &-wrapper {
			display: flex;
			align-items: flex-end;
			flex-wrap: wrap;
		  }
		}
	.card-footer {
		  display: flex;
		  justify-content: space-between;
		  align-items: flex-end;
		}
	  .date {
			color: #afaeae;
			font-size: 14px;
		  }
	#app{
	  
	overflow:auto;
	display:grid;
	grid-template-columns: repeat(auto-fill,200px);
	padding:20px;
	gap:20px;
	
	}
	
	</style>
	
	
