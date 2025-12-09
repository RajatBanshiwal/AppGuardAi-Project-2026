const DomainName = import.meta.env.VITE_DOMAIN_NAME;
const localDomainName = import.meta.env.VITE_LOCAL_DOMAIN_NAME;
console.log("Domain Name: ", DomainName);
console.log("Local Domain Name: ", localDomainName);

const isLocal = window.location.hostname === "localhost";

export const currentDomain = isLocal ? localDomainName : DomainName;

//Backend ki sabhi APIs Yha Rahti hain jo hum use karenge

export const API = {

  //User Authentication APIs
  createUser: {
    url: `${currentDomain}/api/user`, // Sahi endpoint
    method: 'POST',
  },
}