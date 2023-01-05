<script setup lang="ts">
</script>

<template>
  <header>
    <h1>
      <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><g fill="none" fill-rule="evenodd" id="Social-/-14---Social,-brilliant,-diamond,-gem,-jewel,-stone-icon" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M2.20520383,9.3267492 L5.53559458,3.30945143 C5.64127827,3.11850379 5.84231009,3 6.06055318,3 L17.9394468,3 C18.1576899,3 18.3587217,3.11850379 18.4644054,3.30945143 L21.7947962,9.3267492 C21.9178058,9.54900102 21.887527,9.82463075 21.7192031,10.0148787 L12,21 L12,21 L2.28079689,10.0148787 C2.11247297,9.82463075 2.08219423,9.54900102 2.20520383,9.3267492 Z" id="Path" stroke-width="2"/><polyline id="Path" points="10.0015726 12 7 9 8.5 6.5" stroke-width="2"/></g></svg>
    </h1>
    <div class="search">
      <span class="icon"><svg aria-labelledby="searchIconTitle" fill="none" role="img" stroke-linecap="square" stroke-linejoin="miter" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="searchIconTitle"/><path d="M14.4121122,14.4121122 L20,20"/><circle cx="10" cy="10" r="6"/></svg></span>
      <input type="search" id="site-search" name="q" placeholder="Search..." />
    </div>
  </header>
</template>

<style scoped>
header {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 svg {
  width: 30px;
  height: 30px;
  display: inline;
}

h1 svg > * {
  stroke: var(--color-text);
}

.search {
  background-color: var(--color-background-mute);
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.5rem;;
}

.search .icon {
  display: flex;
}

.search svg {
  width: 20px;
  height: 20px;
}

.search svg {
  stroke: var(--color-text);
}

.search input {
  border: none;
  background-color: transparent;
  width: 8rem;
  color: var(--color-text);
}
</style>