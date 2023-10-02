<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData
	$: ({notes}= data)
	function addNote(){

	
	 window.location.href = "./addPage/"
	}
const isOpenClass = "modal-is-open";
const openingClass = "modal-is-opening";
const closingClass = "modal-is-closing";
const animationDuration = 400; // ms
let visibleModal = null;
  // Toggle modal
  const toggleModal = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement; // Type assertion to HTMLElement
    const dataTarget = target.getAttribute("data-target");

    if (dataTarget) {
        const modal = document.getElementById(dataTarget);
        if (modal) {
            if (isModalOpen(modal)) {
                closeModal(modal);
            } else {
                openModal(modal);
            }
        } else {
            console.error("Modal element not found.");
        }
    } else {
        console.error("data-target attribute is missing.");
    }
};


// Is modal open
const isModalOpen = (modal:any) => {
  return modal.hasAttribute("open") && modal.getAttribute("open") != "false" ? true : false;
}
const isScrollbarVisible = () => {
    return document.documentElement.scrollHeight > window.innerHeight;
};
// Define getScrollbarWidth function
const getScrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    scrollDiv.style.width = "100px";
    scrollDiv.style.height = "100px";
    scrollDiv.style.overflow = "scroll";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
};

// Open modal
const openModal = (modal:any) => {
  if (isScrollbarVisible()) {
    document.documentElement.style.setProperty("--scrollbar-width", `${getScrollbarWidth()}px`);
  }
  document.documentElement.classList.add(isOpenClass, openingClass);
  setTimeout(() => {
    visibleModal = modal;
    document.documentElement.classList.remove(openingClass);
  }, animationDuration);
  modal.setAttribute("open", true);
};

 // Close modal
const closeModal = (modal:any) => {
  visibleModal = null;
  document.documentElement.classList.add(closingClass);
  setTimeout(() => {
    document.documentElement.classList.remove(closingClass, isOpenClass);
    document.documentElement.style.removeProperty("--scrollbar-width");
    modal.removeAttribute("open");
  }, animationDuration);
};


 


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
			<button data-target="modal-example" on:click={toggleModal} type="submit" style=" border:none; background-color: transparent;margin: 0; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center;">
			  <i style="color: hsl(195, 85%, 41%);" class="fas fa-trash"></i>
			</button>
		  </form>
    
<!-- <button  data-target="modal-example"
  on:click={toggleModal}>Test</button> -->
	  </div>
</div>
	{/each}
	</div>
<!-- Modal -->
<dialog id="modal-example">
  <article>
    <a href="#close"
      aria-label="Close"
      class="close"
      data-target="modal-example"
      on:click={toggleModal}>
    </a>
    <h3>Confirm your action!</h3>
    <p>
      Are you sure you want to delete this note? 
    </p>
    <footer>
      <a href="#cancel"
        role="button"
        class="secondary"
        data-target="modal-example"
        on:click={toggleModal}>
        Cancel
      </a>
      <a href="#confirm"
        role="button"
        data-target="modal-example"
        on:click={toggleModal}>
        Confirm
      </a>
    </footer>
  </article>
</dialog>

	<style>
	.note-card{
		width: 220px;
		height: 290px;
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
	
		}
  
	.preview {
		
		
		margin-top: 10px;
		color: grey;
		  font-size: 15px;
		  height: 120px;
		  overflow-y: auto;
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
		  margin-top: 10px;
		  
  }
	.tag-wrapper{
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
		padding:0px;
		margin:0px;
		height: 40px;
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
    height: 290px;
    margin-top:20px;
    width: 220px;
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
.add-note{
   font-size: 70px;
  }

	</style>
	
	
