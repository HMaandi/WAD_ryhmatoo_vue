<template>
<header>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Signup</router-link>
  </nav>
  <router-view/>
    <img id="profile" class="profile" src="../assets/krattUUS.jpg" alt="">
    <div id="dropdown-content" class="dropdown-content">
        <p>Kratt</p>
        <p>test@gmail.com</p>
        <p>logout</p>
    </div>
</header>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>


