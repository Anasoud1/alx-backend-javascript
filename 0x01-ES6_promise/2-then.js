export default function handleResponseFromAPI(promise) {
	const pro = new Promise( (resolve, reject) => {
	if (promise) {
	  resolve({'status': 200, 'body': 'success'});
	} else {
	  reject(Error())
	}
	}).then((value) => console.log('Got a response from the API'));
	return pro;
}
