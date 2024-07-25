import './UpperCard_style.css';
import './SearchBar';

// preciso ter acesso ao nome da praia e a latitude e longitude da mesma como a timezone
// devo importar da searchBar para ter acesso a praia

const UpperCard = () => {
  // const timezone = I have to figure it out how to take it 
  // const latitudeandlongitude = I have to figure it out how to take it

  async function weatherChaser() {

    try{

      const request = await fetch(`api.meteomatics.com/${timezone}/t_2m:C/${latitudeandlongitude}/json`);
      const filteredRequest = request.json();

      // // const wave
      // // const temperature
      // // const wind
      // // const weather condition

    } catch(error) {
      console.error('Error fetching data:', error);
    }
    

  }


    return (
      <div id="Card-container">
        <div id="upperDiv">
        <h3>beach condition</h3>
        <div id="upperIcon"></div>
        </div>
        <div id="lowerDiv">
          <div id="lowerIcon"></div>
          <div id="ConditionsDashboard"></div>
            <i></i>
          </div>
        </div>

    );

};

export default UpperCard;