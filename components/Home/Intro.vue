<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.png" alt="Tyler Kuipers"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I'm Tyler, a Software Architect living in Edmonton, Alberta, Canada.
      I specialize in designing and building backend systems, APIs, and web applications.
      My role involves working with stakeholders to understand their needs and
      translating those needs into technical requirements as well as standardizing and
      enforcing best practices across the insurance development teams.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      By day, I'm the Software Architect for the insurance team at
      <a href="https://ama.ab.ca/" target="_blank" class="underline">Alberta Motor Association</a>, and
      by nights, I'm completing my Master's in Computing at
      <a href="https://www.open.ac.uk/" target="_blank" class="underline">The Open University</a>.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Tyler Kuipers",
  description:
    "I'm a Software Architect living in Edmonton, Alberta, Canada. I specialize in designing and building backend systems, APIs, and web applications.",
});
</script>
