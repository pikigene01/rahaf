<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({
  covidrecords:Object
});
</script>

<template>
<div class="container">
 <div class="col-md-12">
              <div class="conversion-setup">
                <div class="main-card mt-5">
                  <div class="dashboard-wrap-content p-4">
                    <h5 class="mb-4">All Records</h5>
                    <div class="d-md-flex flex-wrap align-items-center">
                      <div class="dashboard-date-wrap">
                        <div class="form-group">
                          <div class="relative-input position-relative">
                            <input
                              class="form-control h_40"
                              type="text"

                              placeholder="Search cases"
                             @input="liveSearch"

                            />
                            <i class="uil uil-search"></i>
                          </div>
                        </div>
                      </div>
                      <div class="rs ms-auto mt_r4">
                        <div class="nav custom2-tabs btn-group" role="tablist">
                          <button
                            class="main-btn btn-hover h_40 w-100"
                            data-bs-toggle="modal"
                            data-bs-target="#createNewRecord"
                          >
                           Create New Record
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-content">
                  <div
                    class="tab-pane fade active show"
                    id="overview-tab"
                    role="tabpanel"
                  >
                    <div class="table-card mt-4">
                      <div class="main-table">
                        <div class="table-responsive">
                          <table class="table">
                            <thead class="thead-dark">

                                <th scope="col">Country</th>
                                <th scope="col">Total Confirmed</th>
                                <th scope="col">New Cases</th>
                                <th scope="col">New Deaths</th>
                                <th scope="col">Total Deaths</th>
                                <th scope="col">New Recovered</th>
                                <th scope="col">Total Recovered</th>

                            </thead>
                            <tbody>
                                 <tr
                                  v-for="cases in covidForm.querySet"
                                  :key="cases.id"
                                  class="all_records"
                                  >

                                <td>{{ cases.name }}</td>
                                <td>{{ cases.total_confirmed }}</td>
                                <td>{{ cases.new_confirmed }}</td>
                                <td>{{ cases.new_deaths }}</td>
                                <td>{{ cases.total_deaths }}</td>
                                <td>{{ cases.new_recovered }}</td>
                                <td>{{ cases.total_recovered }}</td>
                                <td>
                                  <span
                                    class="action-btn"
                                    style="margin-right: 10px"
                                    data-bs-toggle="modal"
                                    data-bs-target="#createNewUserModal"

                                    ><i class="fa-solid fa-pencil"></i
                                  ></span>
                                  <span
                                    class="action-btn"

                                    ><i class="fa-solid fa-trash-can"></i
                                  ></span>
                                </td>
                              </tr>

                            </tbody>
                          </table>
                          <div
                          class="container" style="display:flex;justify-content: center;align-items:center;margin-top:20px;margin-bottom:30px;"
                          >
                          <div class="pagination_btns align-items-center">

                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div
      class="modal fade"
      id="createNewRecord"
      tabindex="-1"
      aria-labelledby="createLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <form
          class="modal-content"
          @submit.prevent="!isEditUser ? submitData() : submitEditData()"
        >
          <div class="modal-header">
            <h5 class="modal-title" id="createLabel">Create New Record</h5>
            <button
              type="button"
              class="close-model-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="uil uil-multiply"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="model-content main-form">
              <div class="form-group mt-30">
                <label class="form-label">Country Name*</label>
                <input
                  class="form-control h_40"
                  type="text"
                  placeholder="Name"
                  v-model="covidForm.name"
                />
                <div class="error" v-if="covidForm.errors.name">
                  {{ covidForm.errors.name }}
                </div>
              </div>
              <div class="form-group mt-30">
                <label class="form-label">Slug Name*</label>
                <input
                  class="form-control h_40"
                  type="text"
                  placeholder="Slug"
                  v-model="covidForm.slug"
                />
                <div class="error" v-if="covidForm.errors.slug">
                  {{ covidForm.errors.slug }}
                </div>
              </div>
              <div class="form-group mt-30">
                <label class="form-label">Country Code*</label>
                <input
                  class="form-control h_40"
                  type="text"
                  placeholder="Please enter your country code"
                  v-model="covidForm.country_code"
                />
                <div class="error" v-if="covidForm.errors.country_code">
                  {{ covidForm.errors.country_code }}
                </div>
              </div>

              <div class="form-group mt-30" v-if="!isEditUser">
                <label class="form-label">New Confirmed Cases*</label>
                <input
                  class="form-control h_40"
                  type="text"
                  placeholder="new confirmed cases"
                  v-model="covidForm.new_confirmed"
                />
                <div class="error" v-if="covidForm.errors.new_confirmed">
                  {{ covidForm.errors.new_confirmed }}
                </div>
              </div>

               <div class="form-group mt-30">
                <label class="form-label">Total Confirmed Cases*</label>
                <input
                  class="form-control h_40"
                  type="text"
                  placeholder="Total Confimed"
                  v-model="covidForm.total_confirmed"
                />
                <div class="error" v-if="covidForm.errors.total_confirmed">
                  {{ covidForm.errors.total_confirmed }}
                </div>
              </div>
               <div class="form-group mt-30">
                <label class="form-label">New Deaths*</label>
                <input
                  class="form-control h_40"
                  type="text"
                  placeholder="New Deaths"
                  v-model="covidForm.new_deaths"
                />
                <div class="error" v-if="covidForm.errors.new_deaths">
                  {{ covidForm.errors.new_deaths }}
                </div>
              </div>
               <div class="form-group mt-30">
                <label class="form-label">Total Deaths*</label>
                <input
                  class="form-control h_40"
                  type="text"
                  placeholder="New Deaths"
                  v-model="covidForm.total_deaths"
                />
                <div class="error" v-if="covidForm.errors.total_deaths">
                  {{ covidForm.errors.total_deaths }}
                </div>
              </div>
               <div class="form-group mt-30">
                <label class="form-label">New Recovered*</label>
                <input
                  class="form-control h_40"
                  type="text"
                  placeholder="Total Recovered"
                  v-model="covidForm.new_recovered"
                />
                <div class="error" v-if="covidForm.errors.new_recovered">
                  {{ covidForm.errors.new_recovered }}
                </div>
              </div>
               <div class="form-group mt-30">
                <label class="form-label">Total Recovered*</label>
                <input
                  class="form-control h_40"
                  type="text"
                  placeholder="Total Recovered"
                  v-model="covidForm.total_recovered"
                />
                <div class="error" v-if="covidForm.errors.total_recovered">
                  {{ covidForm.errors.total_recovered }}
                </div>
              </div>


            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              id="closeModal"
              class="co-main-btn min-width btn-hover h_40"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              class="main-btn min-width btn-hover h_40"
              type="submit"
              :disabled="covidForm.processing"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
</div>
</template>
 <script>
import { useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";

export default {
  props: ["covidrecords"],
  mounted(){
     const getPageData = (querySet, page, rows)=>{

      var trimStart = (page - 1) * rows;
      var trimEnd  = trimStart + rows;

      var trimedData = this.covidrecords.slice(trimStart, trimEnd);
      var pages = Math.ceil(querySet.length /rows);

      return {
       querySet: trimedData,
       pages: pages
      }
     }
 const paginationBtns =(pages)=>{
     var wrapper = document.querySelector('.pagination_btns');
     wrapper.innerHTML = '';
     var maxLeft = (this.covidForm.page - Math.floor(this.covidForm.window / 2))
     var maxRight = (this.covidForm.page + Math.floor(this.covidForm.window / 2))
     if(maxLeft < 2){
      maxLeft = 1;
      maxRight = (this.covidForm.window - 1);

     }
     if(maxRight > pages){
      maxLeft = pages - (this.covidForm.window);

      maxRight = pages;

      if(maxLeft < 1){
        maxLeft = 1;
      }
     }


     for(var page=maxLeft; page <= maxRight; page++){

     wrapper.innerHTML +=  `<button data-value=${page} class='btns-pagination btn btn-success'>${page}</button> `;
     }
     if(this.covidForm.page != 1){
      wrapper.innerHTML = `<button data-value=${1} class='btns-pagination btn btn-warning'> First</button>` + wrapper.innerHTML;
     }
     if(this.covidForm.page != pages){
      wrapper.innerHTML += `<button data-value=${pages} class='btns-pagination btn btn-success'> Last</button>`;
     }
     }
setInterval(()=>{
      let data = getPageData(this.covidrecords, this.covidForm.page, this.covidForm.rows);
       paginationBtns(data.pages);

  const btns = document.querySelectorAll('.btns-pagination');
       btns.forEach((btn)=>{
        btn.onclick = ()=>{

// alert(btn.dataset.value);
this.covidForm.page = btn.dataset.value;
this.covidForm.querySet = data.querySet;
 let innerData = getPageData(this.covidrecords, this.covidForm.page, this.covidForm.rows);
paginationBtns(innerData.pages);


        }
       });

},2000);
},
  data() {
    return {
      isEditUser: false,
      user_query: "",
      covidForm: useForm({
        name: null,
        slug: null,
        country_code: null,
        new_confirmed: null,
        total_confirmed: null,
        new_deaths: null,
        total_deaths: null,
        new_recovered: null,
        total_recovered: null,
        id: 0,
        processing: true,
         querySet: this.covidrecords,
         page: 1,
         rows: 10,
         window: 10,
      }),
    };
  },
  methods: {
    liveSearch(e) {

      // Locate the card elements
      const cards = document.querySelectorAll('.all_records')
      // Locate the search input
      let search_query = e.target.value;
      // Loop through the cards
      for (var i = 0; i < cards.length; i++) {
        // If the text is within the card...
        if (cards[i].innerText.toLowerCase()
          // ...and the text matches the search query...
          .includes(search_query.toLowerCase())) {
          // ...remove the `.is-hidden` class.
          cards[i].classList.remove("is-hidden");
        } else {
          // Otherwise, add the class.
          cards[i].classList.add("is-hidden");
        }
      }
    },
    deleteData(id) {
      this.covidForm.post(`/record/delete/${id}`);
    },

    submitData() {

      this.covidForm.post(`/record/add`, {
        onSuccess: () => {
          document.getElementById("closeModal").click();
        },
      });
    },
  },
};
</script>

    <style>
    .is-hidden{
        display: none !important;
    }
</style>
