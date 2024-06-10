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
          v-model="newCompany.companyFullName"
        />
        <FormGroup
          class="mb-end-4"
          type="text"
          id="skracenafirma"
          label="Skraćena firma"
          v-model="newCompany.companyShortName"
        />
        <SelectSingle
          id="vrstakompanije"
          label="Vrsta kompanije"
          btn-text="Izaberi opciju"
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
          v-model="newCompany.companyId"
        />
        <SelectSingle
          class="mb-end-4"
          id="pdvobveznik"
          label="Da li je PDV obveznik?"
          btn-text="Izaberi opciju"
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
    <div class="even-columns mb-start-4 g-10">
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
          :select-options="companyStore.selectOptions.city"
          @selected-option="getUserSelection($event, 'city', 'companyOffice')"
        />
        <FormGroup
          class="mb-end-4"
          type="text"
          id="ulicakompanije"
          label="Naziv ulice"
          v-model="newCompany.companyOffice.street"
        />
        <FormGroup
          type="text"
          id="brojulicekompanije"
          label="Broj ulice"
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
          v-model="newCompany.companyDirector"
        />
        <FormGroup
          class="mb-end-4"
          type="tel"
          id="telefonkompanije"
          label="Broj telefona"
          v-model="newCompany.companyContact.phone"
        />
        <FormGroup
          type="email"
          id="emailkompanije"
          label="Email"
          v-model="newCompany.companyContact.email"
        />
      </div>
    </div>
    <div>
      <button type="submit">Submit</button>
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
        companyIsTaxpayer: "",
        companyTaxId: "",
        companyFullName: "",
        companyShortName: "",
        companyType: "",
        companyDirector: "",
        companyOffice: {
          city: "",
          street: "",
          streetNumber: "",
        },
        companyContact: {
          phone: "",
          email: "",
        },
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
      this.companyStore.saveCompany(this.newCompany);
    },
  },
  computed: {
    // using Pinia without setup function
    ...mapStores(useCompanyStore),
  },
};
</script>
