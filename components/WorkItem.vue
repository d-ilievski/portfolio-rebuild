<template>
  <div class="wrapper">
    <div class="left">
      <div class="image">
        <div class="image-backdrop"></div>
        <div class="image-container">
          <img src="@/assets/profile-photo-daniel.jpg" />
        </div>
      </div>
    </div>
    <div class="right">
      <h1>Lori</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
        eveniet quaerat obcaecati voluptatum voluptas provident amet
        voluptatibus ex sapiente eum non ratione animi debitis reiciendis aut
        corrupti beatae deleniti doloremque? Dolorem sint eius, velit
        exercitationem temporibus amet quis minima tempore optio? Ipsa aliquid
        doloribus modi esse quasi quo eum officia!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum
        beatae eveniet ab, accusantium quas vitae sint fuga dignissimos? Id
        debitis velit earum alias itaque quam nulla facilis reprehenderit fuga
        totam pariatur in quis, dolores, maxime voluptas ipsa perspiciatis
        praesentium facere placeat dignissimos. Ipsum libero rerum assumenda
        repudiandae temporibus autem ipsa maxime perferendis maiores? Iste nulla
        pariatur enim vitae facilis?
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  color: var(--background-color);
}

.wrapper {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.wrapper .left {
  width: 450px;
}

.wrapper .right {
  flex: 1;
  margin-left: 64px;
}

.image-container {
  width: 420px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid var(--foreground-color);
  position: relative;
  overflow: hidden;
}
.image {
  position: relative;
}
.image-backdrop {
  width: 420px;
  height: 420px;
  background: var(--background-color);
  position: absolute;
  top: 30px;
  left: 30px;
}
.image-container img {
  width: 100%;
  height: auto;
}
</style>