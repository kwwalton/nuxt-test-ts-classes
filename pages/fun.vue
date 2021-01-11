<template>
  <div>
    <h1>This is fun?</h1>
    <NuxtLink to="/">Home page</NuxtLink>
    <!-- You don't have to register, can just place and Nuxt knows. -->
    <!-- Had to hyphenate instead of camel case the prop below for linting -->
    <test example-property="Hello there!">Some text in the slot.</test>
  </div>
</template>
