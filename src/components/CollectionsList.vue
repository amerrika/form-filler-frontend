<template>
  <div class="collections-list p-5">
    <!-- Info Bar-->
    <div
      role="button"
      class="collections-list__info-bar bg-primary-500 br-10 pb-2"
    >
      <div class="collections-list__info-icon"></div>
      <div class="collections-list__info-title fs-100">Kolekcija</div>
      <div class="collections-list__info-count fs-100">Dokumenata</div>
      <div class="collections-list__info-actions fs-100">Moguće radnje</div>
    </div>
    <!-- List -->
    <ul class="collections-list__menu">
      <li role="button" class="collections-list__item">
        <div class="collections-list__icon_company"></div>
        <div class="collections-list__title">Kompanije</div>
        <div class="collections-list__count">30</div>
        <button class="collections-list__btn-add">
          <img src="/icon-add.svg" alt="" />
          <span>Nova kompanija</span>
        </button>
      </li>

      <li role="button" class="collections-list__item">
        <div class="collections-list__icon_employees"></div>
        <div class="collections-list__title">Zaposlenici</div>
        <div class="collections-list__count">160</div>
        <button class="collections-list__btn-add">
          <img src="/icon-add.svg" alt="" />
          <span>Novi zaposlenik</span>
        </button>
      </li>
    </ul>
  </div>
</template>
