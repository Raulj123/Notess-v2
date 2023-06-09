<script lang="ts">
  import type {PageData} from '../$types'
  export let data: PageData
  console.log(data)
  $: ({note}= data)
</script>
<h2 style="text-align:center; font-weight:bold; margin-bottom:0px; margin-top:20px;">Editing Note  <i class="fa-solid fa-pen-to-square"></i></h2>
<form action="?/updateNotes" method="POST">
  <div class="wrapper">
    <div class="grid">
 <label for ="title">
      Title
      <input type="text" id="title" name="title" placeholder="Title" value={note.title} required>
    </label>
 <label for ="label">
      Label
      <details role="list">
  <summary aria-haspopup="listbox">{note.label}</summary>
  <ul role="listbox">
    <li>
      <label>
        <input type="radio"name="label" value="CS 💻"bind:group={note.label}>
        CS 💻
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="label" value="Math 🧮"bind:group={note.label}>
        Math 🧮
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="label"value="Productivity 🎯"bind:group={note.label}>
        productivity 🎯
      </label>
    </li>
  </ul>
</details>
    </label>

    </div>
       <label for = "content">
      Content
      <textarea  id="content" name="content" placeholder="Content" rows="4" value={note.content} required></textarea>
    </label>
       <label for ="date">
      Date
      <input type="date" id="date" name="date" placeholder="Date" value={note.date} required>
    </label>
    <button type="submit">Update</button>
  </div
  >
</form>
<small style="display:flex; justify-content:center; margin-bottom: 10px; margin-top:0px;">Won't accept titles over 30 char and content over 200 </small>

<style>
  .wrapper{
    width: 70%;
    margin-top: 20px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom:20px;
  }
</style>
