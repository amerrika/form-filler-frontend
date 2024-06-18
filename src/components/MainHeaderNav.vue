<template>
  <nav class="main-nav">
    <ul class="main-nav__menu pb-end-2">
      <li class="main-nav__item">
        <router-link
          to="/"
          activeClass="bg-primary-500"
          class="main-nav__link txt-neutral-800 fs-300 fw-500"
        >
          <img class="main-nav__icon" src="/icons/icon-home.svg" alt="" />
          <span>Početna</span>
        </router-link>
      </li>
      <li class="main-nav__item">
        <router-link
          to="/documents"
          activeClass="bg-primary-500"
          class="main-nav__link txt-neutral-800 fs-300 fw-500"
        >
          <img class="main-nav__icon" src="/icons/icon-document.svg" alt="" />
          <span>Dokumenti</span>
        </router-link>
      </li>
      <li class="main-nav__item">
        <router-link
          to="/collections"
          activeClass="bg-primary-500"
          class="main-nav__link txt-neutral-800 fs-300 fw-500"
        >
          <img class="main-nav__icon" src="/icons/icon-database.svg" alt="" />
          <span>Baza podataka</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
