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
    <div class="edit">Edit</div>
    <div class="Trash">Trash</div>
	  </div>
</div>
	{/each}
	</div>
	<style>
	.note-card{
		width: 200px;
		height: 200px;
		margin-right: 15px;
		background-color: #fff;
		padding: 15px;
		border-radius: 10px;
		display: grid;
		grid-template-rows: 1fr 4fr 2fr 1fr;
	}
	  .title {
		  font-weight: bold;
		  margin-bottom: 10px;
    color: hsl(195, 85%, 41%);
		}
  .preview{
    color: grey;
  }
	.preview {
		  font-size: 15px;
		  word-break: break-word;
		}
	.tag {
 color: hsl(195, 85%, 41%);

		  background-color: #d6d2d2;
		  padding: 2px 10px;
		  border-radius: 20px;
		  font-size: 12px;
		  margin-right: 5px;
		  height: 25px;
		  width: 50px;
  }
	.tag-wrapper{
		white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    height: 200px;
    margin-top:20px;
    width: 200px;
  }
.container{
    display: flex;
    felx-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }	
	</style>
	
	
