<template>
  <div class="center">
    <form action="">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#e7d5a8"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="logo"
        >
          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            fill="#fff"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </div>
      <div class="input-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <input
          class="input-field"
          type="text"
          placeholder="Email"
          name="email"
        />
      </div>

      <div class="input-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <input
          class="input-field"
          type="password"
          placeholder="Password"
          name="psw"
        />
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapMutations(["login", "logout"]),
  },
};
</script>

<style lang="scss" scoped>
.center {
  padding: 5rem 0;
}
form {
  max-width: 600px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  border-radius: 10px;
  background-color: #f4a261;
  padding: 2rem;
  margin: 3rem auto;
  padding-top: 5rem;
  transition: box-shadow 0.3s ease-in-out;
  animation: form 0.5s ease-in;
}
form:hover {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}
.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}
.icon {
}
.input-field {
  background-color: #e7d5a8;
  color: #264653;
  font-size: 1.3rem;
  border-left: none;
  width: 100%;
  padding: 10px;
  border-radius: 0 10px 10px 0;
}
.input-field:focus {
  background-color: #ffda7e;
}
/* Set a style for the submit button */
.btn {
  display: block;
  position: relative;
  bottom: 0;
  border-radius: 10px;
  background-color: #2a9d8f;
  color: #fff;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  /*   width: 100%; */
  opacity: 0.9;
  font-size: 1.3rem;
  transition: bottom 0.3s ease;
}

.btn:hover {
  bottom: 4px;
  opacity: 1;
  outline: none;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

svg {
  height: 50px;
  width: 50px;
  color: #e7d5a8;
  background-color: #264653;
  vertical-align: center;
  border-radius: 10px 0 0 10px;
  padding: 10px;
}
.logo {
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
  // opacity: 0;
  position: absolute;
  top: -50px;
  left: 100px;
  height: 100px;
  width: 100px;
  color: #264653;
  background-color: #e76f51;
  vertical-align: center;
  border-radius: 50%;
  padding: 10px;
  animation-name: fadeInUp;
  animation-duration: 0.4s;
  animation-timing-function: ease-in;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes fadeInUp {
  0% {
    opacity: 0.5;
    transform: translateY(20px);
    scale: 0.1;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    scale: 1;
  }
}
@keyframes form {
  0% {
    opacity: 0.5;
    transform: translateY(8rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 400px) {
  form {
    padding: 1rem;
    margin: 1.5rem;
    padding-top: 5rem;
  }
  .input-container {
    width: 100%;
    margin-bottom: 15px;
  }
  .input-field {
    font-size: 1rem;
    width: 100%;
    padding: 10px;
  }
  .btn {
    padding: 10px 10px;
    opacity: 0.9;
    font-size: 1.1rem;
  }

  .logo {
    width: 80px;
    height: 80px;
    top: -50px;
    left: 80px;
  }
}
</style>
