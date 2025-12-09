const DomainName = import.meta.env.VITE_DOMAIN_NAME;
const localDomainName = import.meta.env.VITE_LOCAL_DOMAIN_NAME;
console.log("Domain Name: ", DomainName);
console.log("Local Domain Name: ", localDomainName);

const isLocal = window.location.hostname === "localhost";

export const currentDomain = isLocal ? localDomainName : DomainName;

export const API = {

  //yha sabhi Backend ki APIs Aygi
  createUser: {
    url: `${currentDomain}/api/user`, // Sahi endpoint
    method: 'POST',
  },
  loginUser:{
    url: `${currentDomain}/api/user/login`,
    method: 'POST',
  },
  OTPVerify:{
    url: `${currentDomain}/api/user/verify-otp`,
    method: 'POST',
  },
  SendforgotPasswordOtp:{
    url: `${currentDomain}/api/user/forgot-password`,
    method: 'POST',
  },
  resetPassword:{
    url: `${currentDomain}/api/user/reset-password`,
    method: 'POST',
  },
  logoutUser:{
    url: `${currentDomain}/api/user/logout`,
    method: 'POST',
  },
}