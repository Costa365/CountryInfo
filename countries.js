let data = JSON.parse(country_info);
let continents = {
  "EU": "Europe",
  "AS": "Asia",
  "AF": "Africa",
  "NA": "North America",
  "SA": "South America",
  "OC": "Oceania",
  "AN": "Antarctica",
};

let getCountries = function (val){

  let len = val.length;
  val = val.toUpperCase();

  if(len == 2){
    return (data.filter(item => item.ISO === val))
  }
  else if(len == 3){
    return (data.filter(item => item.ISO3 === val))
  }
  else if(len > 3){
    return (data.filter(item => item.Country.toUpperCase().includes(val)))
  }

  return undefined
}

let getContinentName = function (continentCode) {
  return continents[continentCode];
}