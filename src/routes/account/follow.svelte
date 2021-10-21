<script>
  //-----1.LIB
  import Header from "$lib/gui/Header.svelte"
  import TabBar from "$lib/tab/TabBar.svelte"
import Back from "$lib/icon/Back.svelte"
  //-----DATA LOCAL
  const f = "follow.svelte: "
  const  aoTab=[
  {sIcon: "tray-arrow-up" ,sTitle: "Following", sPath: "/following", sComponent:"following"},
{sIcon: "tray-arrow-down" , sTitle: "Follow", sPath:"/followingMe"}
]
let sActiveTab = "Following"
//-----COMPONENTS
import Following from "./follow/following.svelte"
import Follow from "./follow/followingMe.svelte"
//-----8.METHODS
  const onClick = (oTab) => {
    console.log(f, "oTab", oTab)
    sActiveTab = oTab.sTitle
  }
</script>
<!-- HEADER -->
<Header sTitle1 ="Follow">
  <div slot="btn1"><Back /></div>
  <!-- TABBAR -->
  <div slot="tabBar">
<TabBar {aoTab} {sActiveTab} {onClick} />
</div>
</Header>



<!-- BODY -->
<div class=''>
{#if sActiveTab === "Following"}
<Following />
{:else if sActiveTab === "Follow"}
<Follow />
{/if}
</div>


