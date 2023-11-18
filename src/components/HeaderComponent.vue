<script>

</script>

<template>
  <header>
    <ul>
      <li><a href="/">Головна</a></li>
      <li><a href="/reports">Звіти</a></li>
      <li><a href="/contacts">Контакти</a></li>
    </ul>
  </header>
</template>

<style scoped>
header {
  z-index: 1;

  position: fixed;
  width: 100vw;
  height: 5vh;

  background-color: rgba(51, 101, 88, 0.47);

  display: flex;
  flex-direction: column;
  justify-content: center;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  user-select: none;

  margin-top: 1vh;

  font-size: 24px;
  font-weight: bold;
}

a {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  color: blue;
}
</style>