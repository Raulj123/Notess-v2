<script lang ="ts">
   

</script>
  <div class="note-card" on:click >
    <div class="title">Title</div>
    <div class="preview">content</div>

  <div class="tag-wrapper">
    <div class="tag">label</div>
  </div>

  <div class="card-footer">
    <div class="date">date</div>
  </div>
</div>

<style>
.note-card{
    width: 150px;
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

</style>

