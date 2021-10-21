<script>
  import PathTab from "@/common/tab/PathTab.svelte"
  //COMPUTED

  // DATA
  export let sActiveTab = "Account"

  // PROPS
  export let aoTab = [
    { sTitle: "Account", sPath: "/user", sIcon: "account" },
    { sTitle: "Profile", sPath: "/profile", sIcon: "create" },
  ]
</script>

<div class="flex w-full bg-gray-100 ">
  {#each aoTab as oTab}
    <PathTab {sActiveTab} {oTab} />
  {/each}
</div>
