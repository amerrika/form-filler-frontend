<template>
  <form
    class="new-company-form p-5 br-10 mb-start-5"
    @submit.prevent="handleSubmit"
  >
    <div class="even-columns g-10">
      <!-- Grouping of Inputs-->
      <div>
        <SectionTitle title="Podaci o firmi" iconSrc="/icon-company-card.png" />
        <FormGroup
          class="mb-end-4"
          type="text"
          id="punafirma"
          label="Puna firma"
          :is-invalid="isInvalid.fullName"
          :error-message="errorMessages.fullName"
          v-model="newCompany.companyFullName"
        />
        <FormGroup
          class="mb-end-4"
          type="text"
          id="skracenafirma"
          label="Skraćena firma"
          :is-invalid="isInvalid.shortName"
          :error-message="errorMessages.shortName"
          v-model="newCompany.companyShortName"
        />
        <SelectSingle
          id="vrstakompanije"
          label="Vrsta kompanije"
          btn-text="Izaberi opciju"
          :is-invalid="isInvalid.type"
          :error-message="errorMessages.type"
          :select-options="companyStore.selectOptions.companyType"
          @selected-option="getUserSelection($event, 'companyType')"
        />
      </div>
      <!-- Grouping of Inputs-->
      <div>
        <SectionTitle
          title="Identifikacioni podaci"
          iconSrc="/icon-company-id.svg"
        />
        <FormGroup
          class="mb-end-4"
          type="text"
          id="idbrojkompanije"
          label="ID broj"
          maxlength="13"
          :is-invalid="isInvalid.id"
          :error-message="errorMessages.id"
          v-model="newCompany.companyId"
        />
        <SelectSingle
          class="mb-end-4"
          id="pdvobveznik"
          label="Da li je PDV obveznik?"
          btn-text="Izaberi opciju"
          :is-invalid="isInvalid.isTaxpayer"
          :error-message="errorMessages.isTaxpayer"
          :select-options="companyStore.selectOptions.isTaxpayer"
          @selected-option="getUserSelection($event, 'companyIsTaxpayer')"
        />
        <FormGroup
          type="text"
          id="pdvbrojkompanije"
          label="PDV broj"
          v-model="newCompany.companyTaxId"
        />
      </div>
    </div>
    <div class="even-columns mb-4 g-10">
      <!-- Grouping of Inputs-->
      <div>
        <SectionTitle
          title="Sjedište i adresa kompanije"
          iconSrc="/icon-office.svg"
        />
        <SelectSingle
          class="mb-end-4"
          id="sjedistekompanije"
          label="Mjesto sjedišta"
          btn-text="Izaberi opciju"
          :is-invalid="isInvalid.city"
          :error-message="errorMessages.city"
          :select-options="companyStore.selectOptions.city"
          @selected-option="getUserSelection($event, 'city', 'companyOffice')"
        />
        <FormGroup
          class="mb-end-4"
          type="text"
          id="ulicakompanije"
          label="Naziv ulice"
          :is-invalid="isInvalid.street"
          :error-message="errorMessages.street"
          v-model="newCompany.companyOffice.street"
        />
        <FormGroup
          type="text"
          id="brojulicekompanije"
          label="Broj ulice"
          :is-invalid="isInvalid.streetNumber"
          :error-message="errorMessages.streetNumber"
          v-model="newCompany.companyOffice.streetNumber"
        />
      </div>
      <!-- Grouping of Inputs-->
      <div>
        <SectionTitle
          title="Kontakt podaci"
          iconSrc="/icon-company-contact.svg"
        />
        <FormGroup
          class="mb-end-4"
          type="text"
          id="direktor"
          label="Direktor / ovlaštena osoba"
          :is-invalid="isInvalid.director"
          :error-message="errorMessages.director"
          v-model="newCompany.companyDirector"
        />
        <FormGroup
          class="mb-end-4"
          type="tel"
          id="telefonkompanije"
          label="Broj telefona"
          :is-invalid="isInvalid.phone"
          :error-message="errorMessages.phone"
          v-model="newCompany.companyContact.phone"
        />
        <FormGroup
          type="text"
          id="emailkompanije"
          label="Email"
          :is-invalid="isInvalid.email"
          :error-message="errorMessages.email"
          v-model="newCompany.companyContact.email"
        />
      </div>
    </div>
    <div class="flex-end mb-start-6">
      <button
        class="new-company-form__btn-submit pb-2 pi-4 fs-500 fw-500 bg-primary-blue br-10 txt-neutral-100"
        type="submit"
      >
        <span class="new-company-form__btn-submit-icon"></span>
        Spremi u bazu
      </button>
    </div>
  </form>
</template>

<script>
// Vue Components
import SectionTitle from "./SectionTitle.vue";
import SelectSingle from "@/components/inputs/SelectSingle.vue";
import FormGroup from "@/components/inputs/FormGroup.vue";
// Pinia Store (used without setup function)
import { useCompanyStore } from "@/stores/companyStore";
import { mapStores, setMapStoreSuffix } from "pinia";
setMapStoreSuffix("");

export default {
  components: {
    SelectSingle,
    SectionTitle,
    FormGroup,
  },
  data() {
    return {
      // data provided by a user
      // for creating a new company
      newCompany: {
        companyId: "",
        companyIsTaxpayer: undefined,
        companyTaxId: "",
        companyFullName: "",
        companyShortName: "",
        companyType: undefined,
        companyDirector: "",
        companyOffice: {
          city: undefined,
          street: "",
          streetNumber: "",
        },
        companyContact: {
          phone: "",
          email: "",
        },
      },
      // data for validations
      isInvalid: {
        id: false,
        fullName: false,
        shortName: false,
        type: false,
        city: false,
        street: false,
        streetNumber: false,
        isTaxpayer: false,
        director: false,
        email: false,
        phone: false,
      },
      errorMessages: {
        id: "",
        fullName: "",
        shortName: "",
        type: "",
        city: "",
        street: "",
        streetNumber: "",
        isTaxpayer: "",
        director: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    getUserSelection(data, propToUpdate, groupToUpdate = null) {
      if (!groupToUpdate) {
        this.newCompany[propToUpdate] = data.value;
      } else {
        this.newCompany[groupToUpdate][propToUpdate] = data.value;
      }
    },
    handleSubmit() {
      const checkValidity = this.checkValidity();
      // returns false or undefined
      // false means form is invalid
      // undefined means it's valid
      console.log(this.newCompany);

      if (checkValidity === false) {
        return;
      } else {
        this.companyStore.saveCompany(this.newCompany);
      }
    },
    checkValidity() {
      // Validate companyFullName
      if (!this.newCompany.companyFullName.trim()) {
        this.isInvalid.fullName = true;
        this.errorMessages.fullName = "Puni naziv kompanije je obavezan.";
        return false;
      } else {
        this.isInvalid.fullName = false;
      }
      // Validate companyShortName
      if (!this.newCompany.companyShortName.trim()) {
        this.isInvalid.shortName = true;
        this.errorMessages.shortName = "Skraćeni naziv kompanije je obavezan.";
        return false;
      } else {
        this.isInvalid.shortName = false;
      }
      // Validate companyType
      if (this.newCompany.companyType === undefined) {
        this.isInvalid.type = true;
        this.errorMessages.type = "Potrebno je odabrati vrstu kompanije.";
        return false;
      } else {
        this.isInvalid.type = false;
      }
      // Validate companyId
      if (!this.newCompany.companyId.trim()) {
        this.isInvalid.id = true;
        this.errorMessages.id = "ID broj kompanije je obavezan.";
        return false;
      } else if (
        this.newCompany.companyId.trim() &&
        this.newCompany.companyId.length !== 13
      ) {
        this.isInvalid.id = true;
        this.errorMessages.id = "ID broj se mora sastojati iz 13 cifara.";
        return false;
      } else if (
        this.newCompany.companyId.trim() &&
        !/^[0-9]*$/.test(this.newCompany.companyId)
      ) {
        this.isInvalid.id = true;
        this.errorMessages.id =
          "ID broj ne smije sadržavati druge znakove osim cifara.";
        return false;
      } else {
        this.isInvalid.id = false;
      }
      // Validate isTaxpayer
      if (this.newCompany.companyIsTaxpayer === undefined) {
        this.isInvalid.isTaxpayer = true;
        this.errorMessages.isTaxpayer =
          "Potrebno odabrati, da li je kompanije PDV obveznik";
        return false;
      } else {
        this.isInvalid.isTaxpayer = false;
      }
      // Validate city
      if (this.newCompany.companyOffice.city === undefined) {
        this.isInvalid.city = true;
        this.errorMessages.city =
          "Potrebno je odabrati mjesto glavnog sjedišta.";
        return false;
      } else {
        this.isInvalid.city = false;
      }
      // Validate street
      if (!this.newCompany.companyOffice.street.trim()) {
        this.isInvalid.street = true;
        this.errorMessages.street = "Naziv ulice je obavezan.";
        return false;
      } else {
        this.isInvalid.street = false;
      }
      // Validate streetNumber
      if (!this.newCompany.companyOffice.streetNumber.trim()) {
        this.isInvalid.streetNumber = true;
        this.errorMessages.streetNumber = "Broj ulice je obavezan.";
        return false;
      } else {
        this.isInvalid.streetNumber = false;
      }
      // Validate director
      if (!this.newCompany.companyDirector.trim()) {
        this.isInvalid.director = true;
        this.errorMessages.director =
          "Obavezno je unijeti direktora ili ovlaštenog predstavnika kompanije";
        return false;
      } else {
        this.isInvalid.director = false;
      }
      // Validate phone
      if (
        !this.newCompany.companyContact.phone.trim() ||
        !/^\+?\d{1,4}([-.\s]?\d{1,3}){2,3}$/.test(
          this.newCompany.companyContact.phone
        )
      ) {
        this.isInvalid.phone = true;
        this.errorMessages.phone = "Broj telefona je obavezan.";
        return false;
      } else {
        this.isInvalid.phone = false;
      }
      // Validate email
      if (
        !this.newCompany.companyContact.email.trim() ||
        !/\S+@\S+\.\S+/.test(this.newCompany.companyContact.email)
      ) {
        this.isInvalid.email = true;
        this.errorMessages.email =
          "Potrebno je unijeti email u ispravnom obliku.";
        return false;
      } else {
        this.isInvalid.email = false;
      }
    },
  },
  computed: {
    // using Pinia without setup function
    ...mapStores(useCompanyStore),
  },
};
// submitanje jedino moguće ako nema nijedan aria-invalid true
// za ovu svrhu koristiti this.isInvalid (kao objekat ili array)
</script>
