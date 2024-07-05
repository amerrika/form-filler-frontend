<template>
  <nav class="app__main-nav">
    <ul class="app__main-nav-menu pb-end-2">
      <li class="app__main-nav-item">
        <router-link
          to="/"
          activeClass="bg-primary-500"
          class="btn_start p-3 txt-neutral-800 fs-300 fw-500"
        >
          <img class="app__main-nav-icon" src="/icons/icon-home.svg" alt="" />
          <span>Početna</span>
        </router-link>
      </li>
      <li class="app__main-nav-item">
        <router-link
          to="/documents"
          activeClass="bg-primary-500"
          class="btn_start p-3 txt-neutral-800 fs-300 fw-500"
        >
          <img
            class="app__main-nav-icon"
            src="/icons/icon-document.svg"
            alt=""
          />
          <span>Dokumenti</span>
        </router-link>
      </li>
      <li class="app__main-nav-item">
        <router-link
          to="/collections"
          activeClass="bg-primary-500"
          class="btn_start p-3 txt-neutral-800 fs-300 fw-500"
        >
          <img
            class="app__main-nav-icon"
            src="/icons/icon-database.svg"
            alt=""
          />
          <span>Baza podataka</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
