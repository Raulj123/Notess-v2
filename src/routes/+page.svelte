<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData
	$: ({notes}= data)
	function addNote(){

	console.log("clicked")
	 window.location.href = "./addPage/"
	} 
	</script>
	
<div class="container">	
	
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
		<a href="/{note.id}" class="Edit">
			<i class="fa-solid fa-pencil"></i>
		  </a>
		  <form action="?/deleteNote&id={note.id}" method="POST">
			<button type="submit" style=" border:none; background-color: transparent;margin: 0; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center;">
			  <i style="color: hsl(195, 85%, 41%);" class="fas fa-trash"></i>
			</button>
		  </form>
    

	  </div>
</div>
	{/each}
	</div>
	<style>
	.note-card{
		width: 200px;
		height: 250px;
		margin-right: 15px;
		background-color: #fff;
		padding: 15px;
		border-radius: 10px;
		display: grid;
		grid-template-rows: 1fr 4fr 2fr 1fr;
	}
	  .title {
		  font-weight: bold;
		  
    color: hsl(195, 85%, 41%);
	overflow: hidden;
		}
  
	.preview {
		overflow: hidden;
		color: grey;
		  font-size: 15px;
		  word-break: break-word;
		}
	.tag {
 		color: hsl(195, 85%, 41%);
 		display: inline-block;
		  background-color: #d6d2d2;
		  padding: 2px 10px;
		  border-radius: 20px;
		  font-size: 12px;
		  margin-right: 5px;
		  height: 25px;
  }
	.tag-wrapper{
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
		padding:0px;
		margin:0px;
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
	  
    display:flex;
    margin:20px;
    	}

  .add-note{
    height: 250px;
    margin-top:20px;
    width: 200px;
  }
.container{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }	
  form {
    margin:0px;
  }

	</style>
	
	
