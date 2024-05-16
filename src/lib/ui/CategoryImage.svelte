<script lang="ts">
  export let img = "";

  const fileInput = document.querySelector(".file-input");
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector(".file-name");
      fileName.textContent = fileInput.files[0].name;
    }
  };

  async function create() {
    console.log(`Just uploaded image ${img} for category: ${title}`);
    if (img) {
        
    } else {
      const category: Category = {
            title: title,
            img: img,
        };
        const success = await placemarkService.createCategory(category, get(currentSession));
        if (!success) {
          message = "Create category failed - some error occurred";
          return;
        }
        message = `Thanks! Your category ${title} has been created`;
    }
  }
</script>

<div class="box field is-horizontal">
  <div class="field-label is-normal">
    <label for="longitude" class="label">Latitude</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded">
        <input id="longitude" class="input" type="float" bind:value={latitude} />
      </p>
    </div>
    <div class="field-label is-normal">
      <label for="latitude" class="label">Longitude</label>
    </div>
    <div class="field">
      <p class="control is-expanded">
        <input id="latitude" class="input" type="float" bind:value={longitude} />
      </p>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-image">
    <figure class="image is-256x256">
      <img src={img}>
    </figure>
  </div>
  <div class="card-content">
    <form on:submit|preventDefault={upload}>
    <form action="/category/{{category._id}}/uploadimage" method="POST" enctype="multipart/form-data">
      <div id="file-select" class="file has-name is-fullwidth">
        <label class="file-label"> <input class="file-input" name="imagefile" type="file" name="resume" accept="image/png, image/jpeg">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
           </span>
          <span class="file-name"></span>
        </label>
        <button type="submit" class="button is-info">Upload</button>
      </div>
    </form>
  </div>
</div>

<script>
  const fileInput = document.querySelector(".file-input");
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector(".file-name");
      fileName.textContent = fileInput.files[0].name;
    }
  };
</script>