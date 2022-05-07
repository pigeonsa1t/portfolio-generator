const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);   

const printProfile = (profileDataArrs) => {
    console.log(profileDataArrs);
};

printProfile(profileData);

const printProfileData = (profileDataArr) => {
  console.log(profileDataArr);
};

printProfileData(profileDataArgs);