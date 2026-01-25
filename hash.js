import { ethers } from "ethers";





const personalDataStrings = [
    "Person 1: Name=Emmanuel Adebayo, DOB=1995-07-20, ID=NG123456789, Address=12 Ikeja Road, Lagos, Nigeria",
    "Person 2: Name=Aisha Mohammed, DOB=1998-03-15, ID=NG987654321, Address=45 Victoria Island, Lagos, Nigeria",
    "Person 3: Name=Chinedu Okonkwo, DOB=1992-11-30, ID=NG456789123, Address=78 Abuja Street, Abuja, Nigeria",
    "Person 4: Name=Fatima Yusuf, DOB=2000-09-10, ID=NG321654987, Address=23 Port Harcourt Road, Rivers, Nigeria",
];

console.log("Keccak-256 hashes of personal data strings:");

personalDataStrings.forEach((data, index) => {
    const blockHash = ethers.keccak256(ethers.toUtf8Bytes(data));
    
    console.log(`Person ${index + 1} Data: ${data}`);
    console.log(`Block Hash for ${index + 1}: ${blockHash}`);
    console.log("---");
});













