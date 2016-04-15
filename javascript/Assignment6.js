function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    
    
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
    }
    
    objRequest.open("POST",url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);

}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful"
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

function UpdateAddress()
{
    var objRequests = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    var orderid = document.getElementById("orderid").value;
    var shippingname = document.getElementById("shipname").value;
    var shippingaddress = document.getElementById("shipaddress").value;
    var shippingcity = document.getElementById("shipcity").value;
    var shippingcode = document.getElementById("shipcode").value;
    
    var updateaddress = '{"OrderID":"' + orderid + '","ShipName":"' + shippingname +'", "ShipAddress":"' + shippingaddress +'", "ShipCity":"' + shippingcity +'", "ShipPostcode":"' + shippingcode +'"}'
    
    objRequests.onreadystatechange = function()
    {
        if (objRequests.readyState == 4 && objRequests.status == 200)
        {
            var results = JSON.parse(objRequests.responseText);
            OperationResults(results);
        }
    }
    objRequests.open("POST", url, true);
     objRequests.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequests.send(updateaddress);
}
function OperationResults(output)
{
    if (output == 1)
    {
        document.getElementById("results").innerHTML = "The operation was completed successfully"
    }
   else if (output == 0)
   {
        document.getElementById("results").innerHTML = "Operation failed with an unspecified error"
   }
   else if (output == -2)
   {
        document.getElementById("results").innerHTML = "Operation failed because the data string supplied could not be deserialized into the service object"
   }
   else
   {
        document.getElementById("results").innerHTML = "Operation failed because a record with the supplied Order ID could not be found"
   }
}

function DeleteCustomer()
{
    var objRequestS = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    
    url += document.getElementById("customerid").value;
    
   
    
    objRequestS.onreadystatechange = function()
    {
        if (objRequestS.readyState == 4 && objRequestS.status == 200)
        {
            var resultS = JSON.parse(objRequestS.responseText);
            OperationResultS(resultS);
        }
    }
        
        objRequestS.open("GET",url,true);
        objRequestS.send();
}

function OperationResultS(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("resultS").innerHTML = "The operation was completed successfully"
    }
    else
    {
        document.getElementById("resultS").innerHTML = "Operation Failed!" + "<br>" + output.Exception;
    }
}

function MenuChoice()
{
    if (document.getElementById("menu").value == "Show Area 1")
    
    {
       document.getElementById("section1").style.visibility = "visible";
       document.getElementById("section2").style.visibility = "hidden";
       document.getElementById("section3").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Show Area 2")
    {
       document.getElementById("section2").style.visibility = "visible";
       document.getElementById("section1").style.visibility = "hidden";
       document.getElementById("section3").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Show Area 3") 
    {
       document.getElementById("section3").style.visibility = "visible";
       document.getElementById("section1").style.visibility = "hidden";
       document.getElementById("section2").style.visibility = "hidden";
    }
    
    else
    {
         document.getElementById("section1").style.visibility = "hidden";
         document.getElementById("section2").style.visibility = "hidden";
         document.getElementById("section3").style.visibility = "hidden";
    }
    
}  