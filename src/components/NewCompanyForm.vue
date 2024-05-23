<template>
  <div class="new-company-form p-5 br-10 mb-start-5">
    <div class="even-columns g-10">
      <!-- Group of Inputs-->
      <div class="new-company-form__group">
        <SectionTitle title="Podaci o firmi" iconSrc="/icon-company-card.png" />
        <div class="new-company-form__input mb-end-4">
          <div class="form-group_row">
            <label for="puna-firma" class="form-group__label">Puna firma</label>
            <InputText input-id="puna-firma" />
          </div>
        </div>
        <div class="new-company-form__group mb-end-4">
          <div class="form-group_row">
            <label for="skracena-firma" class="form-group__label"
              >Skraćena firma</label
            >
            <InputText input-id="skracena-firma" />
          </div>
        </div>
        <div class="new-company-form__input">
          <div class="form-group_row">
            <label class="form-group__label" for="oblik-drustva"
              >Oblik društva</label
            >
            <SelectSingle
              select-single-id="oblik-drustva"
              btn-text="Izaberi opciju"
              :select-options="companyTypeOptions"
            />
          </div>
        </div>
      </div>
      <!-- Group of Inputs-->
      <div class="new-company-form__group">
        <SectionTitle
          title="Identifikacioni podaci"
          iconSrc="/icon-company-id.svg"
        />
        <div class="new-company-form__input mb-end-4">
          <div class="form-group_row">
            <label for="id-broj" class="form-group__label">ID broj</label>
            <InputText input-id="id-broj" />
          </div>
        </div>
        <div class="new-company-form__input mb-end-4">
          <div class="form-group_row">
            <label for="pdv-obveznik" class="form-group__label"
              >Da li je PDV obveznik?</label
            >
            <SelectSingle
              select-single-id="pdv-obveznik"
              btn-text="Izaberi opciju"
              :select-options="isTaxPayerOptions"
            />
          </div>
        </div>
        <div class="new-company-form__input">
          <div class="form-group_row">
            <label for="pdv-broj" class="form-group__label">PDV broj</label>
            <InputText input-id="pdv-broj" />
          </div>
        </div>
      </div>
    </div>
    <div class="even-columns mb-start-4 g-10">
      <!-- Group of Inputs-->
      <div class="new-company-form__group">
        <SectionTitle
          title="Sjedište i adresa kompanije"
          iconSrc="/icon-office.svg"
        />
        <div class="new-company-form__input mb-end-4">
          <div class="form-group_row mb-end-4">
            <label for="sjedište" class="form-group__label"
              >Mjesto sjedišta</label
            >
            <SelectSingle
              select-single-id="sjediste"
              btn-text="Izaberi opciju"
              :select-options="cityOptions"
            />
          </div>
        </div>
        <div class="new-company-form__input mb-end-4">
          <div class="form-group_row">
            <label for="ulica" class="form-group__label">Naziv ulice</label>
            <InputText input-id="ulica" />
          </div>
        </div>
        <div class="new-company-form__input">
          <div class="form-group_row">
            <label for="broj-ulice" class="form-group__label">Broj ulice</label>
            <InputText input-id="broj-ulice" />
          </div>
        </div>
      </div>
      <!-- Group of Inputs-->
      <div class="new-company-form__group">
        <SectionTitle
          title="Kontakt podaci"
          iconSrc="/icon-company-contact.svg"
        />
        <div class="new-company-form__input mb-end-4">
          <div class="form-group_row">
            <label for="direktor" class="form-group__label"
              >Direktor / ovlaštena osoba</label
            >
            <InputText input-id="direktor" />
          </div>
        </div>
        <div class="new-company-form__input mb-end-4">
          <div class="form-group_row mb-end-4">
            <label for="telefon" class="form-group__label">Broj telefona</label>
            <InputText input-id="telefon" />
          </div>
        </div>
        <div class="new-company-form__input">
          <div class="form-group_row">
            <label for="email" class="form-group__label">Email adresa</label>
            <InputEmail input-id="email" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from "./SectionTitle.vue";
import InputText from "@/components/inputs/InputText.vue";
import SelectSingle from "@/components/inputs/SelectSingle.vue";
import InputEmail from "@/components/inputs/InputEmail.vue";

export default {
  components: {
    InputText,
    InputEmail,
    SelectSingle,
    SectionTitle,
  },
  data() {
    return {
      isTaxPayerOptions: [
        {
          id: "1",
          name: "Da",
          value: "da",
        },
        {
          id: "2",
          name: "Ne",
          value: "ne",
        },
      ],
      companyTypeOptions: [
        {
          name: "Društvo sa ograničenom odgovornošću",
          value: "doo",
        },
        {
          name: "Obrt",
          value: "obrt",
        },
      ],
      cityOptions: [
        {
          name: "Bihać",
          value: 77000,
        },
        {
          name: "Cazin",
          value: 77220,
        },
      ],
      selectedOption: null,
    };
  },
  methods: {
    updateSelectedOption(data) {
      console.log(data);
      this.selectedOption = data;
    },
  },
};
</script>
