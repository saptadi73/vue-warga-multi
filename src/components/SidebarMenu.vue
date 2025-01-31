<template>
  <div>
    <div class="flex">
      <div id="sidebar" class="bg-gradient-to-r from-purple-200 to-slate-100  pl-3 h-screen w-20 transition-transform duration-500 relative"><span id="panah" class="material-icons rotate-180 transition-transform duration-500 cursor-pointer bg-purple-700 text-white border border-purple-800 rounded-full absolute -right-3 top-9" :onclick="openSideBar">
        arrow_back
        </span>
        <div class="flex items-center bg-gradient-to-r from-purple-200 to-white rounded-r-lg">
          <img src="../assets/logo_rukun.png" class="w-10 h-10"><h1 id="title1" class="font-Poppins hidden ml-5 text-xl"><span class="font-bold text-[#ca13c5]">RUKUN</span><span class="font-semibold text-[#2b94f1]">TETANGGA</span></h1>
        </div>
      </div>
      <div class="p-7 text-slate-400 font-semibold font-Poppins">Homepage</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      isiSideBar: true,
      rotasi: 0,
    }
  },

  methods: {
    openSideBar() {
      const sidebar = document.getElementById("sidebar");
      const panah = document.getElementById("panah");
      const title1 = document.getElementById("title1");


      if(this.isiSideBar) {
        sidebar.classList.remove("w-20");
        sidebar.classList.add("w-72");
        this.isiSideBar=false;
        panah.classList.remove("rotate-180");
        panah.classList.add("rotate-0");
        this.rotasi=1;
        title1.classList.remove("hidden");
        
      }else{
        sidebar.classList.remove("w-72");
        sidebar.classList.add("w-20");
        this.isiSideBar=true;
        panah.classList.remove("rotate-0");
        panah.classList.add("rotate-180");
        title1.classList.add("hidden");
        this.rotasi=1;
      }
      
    },
    
  },
}

</script>

<style lang="scss" scoped></style>
