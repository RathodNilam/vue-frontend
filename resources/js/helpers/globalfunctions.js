//import Swal from 'sweetalert2';
import moment from 'moment';
import Swal from 'sweetalert2'

//import VueSweetalert2 from 'vue-sweetalert2';

// loading
export function Loading(){
	Swal.fire({
        title: 'Please Wait !',
        html: 'request sending...',
        allowOutsideClick: false,        
        didOpen: () => {
          Swal.showLoading()
        },
    });    
}

// swal close
export function SwalClose(){
  Swal.close();
}

export function SuccessPopup(message){
   Swal.fire(
      'Success',
      message,
      'success'
  );
}

export function ErrorMessage(message){
   Swal.fire(
      'Error!',
      message,
      'error'
  );
}

export function ErrorPopup(value){  
  if(value.data.message){
      if(value.data.errors){                     
          var responseVal = value.data;            
          var errorString = '';            
            for ( var key in responseVal.errors ) {
              errorString += responseVal.errors[key] + "<br/>";                
          }
          Swal.fire(value.data.message, errorString, "error");
      }else{
          Swal.fire("Error!", value.data.message, "error");      
      }                  
  }else{
    Swal.fire("Error!", "Internal Server error", "error");  
  }
   
}

export function UpdatePopup(message){
   Swal.fire(
      'Updated!',
      message,
      'success'
  );
}

export function DeletedPopup(){
   Swal.fire(
      'Removed!',
      'Item has been removed successfully!.',
      'success'
  );
}

/* gloable link for erp */
export function BackendURL(){
  return "http://127.0.0.1:8000";
}

export function DateFormat(date){ 
   return moment(date).format('YYYY-MM-DD');
}
