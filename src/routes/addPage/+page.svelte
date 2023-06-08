
<h2 style="text-align:center; font-weight:bold; margin-bottom:0px; margin-top:20px;">Add your note!</h2>
<form method="POST">
  <div class="wrapper">
    <div class="grid">
 <label for ="title">
      Title
      <input type="text" id="title" name="title" placeholder="Title" required>
    </label>
 <label for ="label">
      Label
      <details role="list">
  <summary aria-haspopup="listbox">Labels</summary>
  <ul role="listbox">
    <li>
      <label>
        <input type="radio"name="label" value="CS 💻">
        CS 💻
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="label" value="Math 🧮">
        Math 🧮
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="label"value="Productivity 🎯">
        productivity 🎯
      </label>
    </li>
  </ul>
</details>
    </label>

    </div>
       <label for = "content">
      Content
      <textarea  id="content" name="content" placeholder="Content" rows="4"  required></textarea>
    </label>
       <label for ="date">
      Date
      <input type="date" id="date" name="date" placeholder="Date"required>
    </label>
    <button type="submit">Submit</button>
  </div>
</form>

<style>
  .wrapper{
    width: 70%;
    margin-top: 20px;
    margin-right:auto;
    margin-left:auto;
    margin-bottom:20px;
  }
</style>
