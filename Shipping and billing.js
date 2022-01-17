/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
    var shippingName=document.getElementById('shippingName');
    var shippingZip=document.getElementById('shippingZip');
    var billingName=document.getElementById('billingName');
    var billingZip=document.getElementById('billingZip');
	if (document.getElementById('same').checked){
         billingName.value=shippingName.value;
         billingZip.value=shippingZip.value;
         document.getElementById('billingName').setAttribute('required',true);
         document.getElementById('billingZip').setAttribute('required',true);
		}
	else{ 
         billingName.value="";
         billingZip.value="";
         document.getElementById('billingName').removeAttribute('required');
         document.getElementById('billingZip').removeAttribute('required');
			
		}
	}