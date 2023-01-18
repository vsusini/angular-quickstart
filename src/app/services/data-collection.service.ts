import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {

  constructor(
    private http: HttpClient
  ) {}

  getWalletData(){
    const formData = new FormData();
    var url = "http://localhost:4500/getAccount"
    formData.append("wallet", "f1ip452DtnWLzrZ2YiF8NRjrjwpM4zSo5QRhcuRJSvC")
    var response = axios.post(url, formData, {headers: { "Content-Type":"application/json"  }})
    .then(parsedRes =>{
      console.log(parsedRes.data)
      return parsedRes
    })

    axios
	  .get('https://hadeswap.com/pools/DsncRqYnA6fqm7zwPWS7p3QZYyDRb1KUFNYQAX41YFXV')
	  .then((response) => {
	  	console.log(response.data)
	  })
	  .catch((error) => {
	  	console.error(error)
	});
  return response
  }
}
