// Functions to generate random data for the required fields

function getRandomName() {
  const names = [
    'John Doe', 'Jane Smith', 'Alex Johnson', 'Emily Davis', 'Michael Brown'];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomCountry() {
  const countries = ['Ukraine', 'USA', 'Canada', 'Germany', 'France'];
  return countries[Math.floor(Math.random() * countries.length)];
}

function getRandomCity() {
  const cities = ['Kyiv', 'New York', 'Toronto', 'Berlin', 'Paris'];
  return cities[Math.floor(Math.random() * cities.length)];
}

function getRandomCreditCard() {
  return Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString();
}

function getRandomMonth() {
  const months = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  return months[Math.floor(Math.random() * months.length)];
}

function getRandomYear() {
  const currentYear = new Date().getFullYear();
  return (currentYear + Math.floor(Math.random() * 5)).toString(); // Next 5 years
}

module.exports = {
  getRandomName,
  getRandomCountry,
  getRandomCity,
  getRandomCreditCard,
  getRandomMonth,
  getRandomYear
};
