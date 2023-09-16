export function isValidPassword(password) {
	const hasMinLength = /.{6,}/.test(password);
	const hasLowercaseLetter = /[a-z]/.test(password);
	const hasUppercaseLetter = /[A-Z]/.test(password);
	const hasNumericChar = /[0-9]/.test(password);
	const hasSpecialChar = /[!@#$%^&*()-+\[\]{}\\|;:'",.<>\/?~]/.test(password);

  
	const passwordValidity = {
	  hasMinLength,
	  hasLowercaseLetter,
	  hasUppercaseLetter,
	  hasNumericChar,
	  hasSpecialChar,
	};
  
	const passwordErrors = [];
  
	// if (!hasMinLength) {
	//   passwordErrors.push('Password should be at least 6 characters in length.');
	// }
	// if (!hasLowercaseLetter) {
	//   passwordErrors.push('Password should contain at least one lowercase letter.');
	// }
	// if (!hasUppercaseLetter) {
	//   passwordErrors.push('Password should contain at least one uppercase letter.');
	// }
	// if (!hasNumericChar) {
	//   passwordErrors.push('Password should contain at least one digit.');
	// }
	// if (!hasSpecialChar) {
	//   passwordErrors.push('Password should contain at least one special character (@, #, %, ^).');
	// }
  
	return passwordErrors.length === 0
	  ? { valid: true, errors: [] }
	  : { valid: false, errors: passwordErrors };
  }
  