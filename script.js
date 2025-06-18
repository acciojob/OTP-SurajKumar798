//your JS code here. If required.
const codes = document.querySelectorAll('.code');
codes.forEach((code, idx) => {
	code.addEventListener('keydown', (e)=> {
		if(e.key >= 0 && e.key <= 9){
			code.value = "";
			setTimeout(() => {
				if(idx < codes.length - 1){
					codes[idx + 1].focus();
				}
			}, 10);
		}else if(e.key === "Backspace"){
			if(code.value === ""){
				if(idx > 0) codes[idx - 1].focus();
			}else{
				code.value = "";
			}
		}
	});
	code.addEventListener("input", () => {
		code.value = code.value.replace(/[^0-9]/g, "");
	});
});