
	<template>
  <div>
   <div class="container-fluid">
     <div class="row">
       <div class="col-12 title">
         <h5 class="text-center"><strong>Contact</strong></h5><br>
       </div>
     </div>
   </div>

   <div class="container-fluid">

    <div class="table-responsive">
      <table class="table table-striped table-bordered table-hover">
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Message</th>
            <th>Created At</th>
            <!-- <th>Action</th> -->
          </thead>

          <tbody>
            <tr v-for="(item,index) in items.data" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.email}}</td>
              <td>{{item.mobile_number}}</td>
              <td>{{item.message}}</td>
              <td>{{(item.created_at) ? DateFormat(item.created_at):''}}</td>
            <!--   <td><a class="btn btn-sm btn-primary" href="#editModal" data-toggle="modal" @click="editbutton(item.id)"><i class="fa fa-edit"></i></a> <button class="btn btn-sm btn-danger" href="" @click="deletebutton(item.id)"><i class="fa fa-trash"></i></button></td> -->
            </tr>
          </tbody>
      </table>
    </div>
     <div class="row">
        <div class="col-md-12">
        <pagination :data="items" align="center" @pagination-change-page="getContactList" class="pagination"></pagination>
    </div>
    </div>
    
   </div>
  </div>
</template>


<script>
  import {Loading,SwalClose,SuccessPopup,ErrorMessage,ErrorPopup,UpdatePopup,DeletedPopup,DateFormat} from "../../helpers/globalfunctions";
  import axios from "axios"
  export default{
    components:{
    DateFormat,
   
  },
   data:function() {
        return{
       
        items:{},
   
      }
    },

    created(){
      this.getContactList()
    },
    methods:{
       getContactList:function(page = 1){

        return axios.get("/getContactList?page=" +page)
          .then(response =>{
          console.log(response.data);        
          this.items=response.data;
          //console.log(DateFormat(response.data.data[0].created_at));
         

          }).catch(err => {
            alert(err);
          });

      },

      DateFormat,
      
    }

  }

</script>