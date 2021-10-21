<script>
  //-----1.LIB
  import Icon from '$lib/icon/_Icon.svelte'

  //-----DATA LOCAL
  const f = '_Upload'
  //-----PROPS
  export let sColor = 'white'
  export let sFileDir = '/media'
  export let sCurrentFileUrl = ''

  export let sId = '-'
  export let onReady = null

  //-----8.METHODS

  const onClick = (e) => {
    console.log(f, 'onClick')
    e.target.value = ''
  }

  const onFileChange = (e) => {
    console.log(f, 'onFileChange')
    //onClick()
    const files = e.target.files
    if (files.length) {
      const File = files[0]
      if (!File) {
        console.log(f, 'no File selected')
      } else {
        save(File)
      }
    }
  }

  function downloadProgress(progress) {
    console.log(f, 'progress', progress)
    //console.log(f, "progress.loaded/total", progress.loaded, progress.total)
    // console.log("progress", (progress.loaded / progress.total) * 100)
    if (progress && progress.loaded >= progress.total) {
      console.log(f, 'UPLOAD DONE')
    } else {
      console.log(f, 'RETRY')
    }
  }
  const save = async (File) => {
    console.log(f, 'save File:', File)
    // new file name
    const sFileName = Date.now()
    const fileExt = File.name.split('.').pop()

    const sNewFileUrl = `${sFileDir + '/' + sFileName + '.' + fileExt}`
    // get base64
    let sBase64 = ''
    const reader = new FileReader()
    reader.onload = async () => {
      sBase64 = reader.result
      // upload object
      const o = {
        sOldFileUrl: sCurrentFileUrl || '',
        sNewFileUrl,
        sBase64,
      }
      console.log(f, 'upload', o)
      await upload(o)
      console.log(f, 'upload is ready')
      if (onReady) onReady(sNewFileUrl)
    }
    reader.readAsDataURL(File)
  }

  //-----STORES
  //import { upload } from "@/stores/media"
</script>

<div class="w-32 border-2 border-{sColor}-500 dark:border-{sColor}-500 rounded">
  <input
    accept="image/*,video/*"
    on:click={onClick}
    on:change={onFileChange}
    style="display: none;"
    id={sId}
    name="file"
    type="file" />
  <label for={sId} class="text-{sColor}-500  dark:text-{sColor}-500">
    <Icon sIcon="tray-arrow-down" sLabel="download" sSize="sm" {sColor} {sFileDir} {sCurrentFileUrl} />
    <!-- <img
      alt=""
      style="min-width:32px; max-width:32px; max-height:40px; min-height:40px; "
      src={sColor === "black"
        ? "images/uploadBlack.svg"
        : "images/uploadWhite.svg"}
    /> -->
  </label>
</div>

<!--<style>
  .inputfile {
    /*hide file input*/
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .inputfile + label {
    /*style button*/
    padding: 10px;
    border-radius: 2px;
    border: 1px solid;
  }
</style>-->
