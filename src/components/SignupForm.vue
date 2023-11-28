<template>
    <div class = "signup-form">
    <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" name="password" required>
        <p v-if="!passwordValid">Password is not valid. Must be 8-15 characters, include one uppercase, two lowercase, a number, start with uppercase and contain '_'.</p>
        <button type="submit">Signup</button>
  </form>
</div>
</template>

<script>
    export default {
    name: 'SignupForm',
      data() {
        return {
          password: '',
        }
      },
      computed: {
        passwordValid() {
          const lengthValid = this.password.length >= 8 && this.password.length < 15;
          const hasUpperCase = /[A-Z]/.test(this.password);
          const hasLowerCase = (this.password.match(/[a-z]/g) || []).length >= 2;
          const hasNumber = /\d/.test(this.password);
          const startsWithUpperCase = /^[A-Z]/.test(this.password);
          const includesUnderscore = this.password.includes('_');
          return lengthValid && hasUpperCase && hasLowerCase && hasNumber && startsWithUpperCase && includesUnderscore;
        }
      }
    }
</script>