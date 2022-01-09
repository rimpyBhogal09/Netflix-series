import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Sdata from './Sdata';

function ncard(val){
  return(
    <Card 
    key={val.key}
    imgscr={val.imgscr}
      sponser={val.sponser} 
      series_title={val.series_title}  
      link={val.link}></Card>
  );
}
function App() {

   
  return (
    <>
    <h1 className="headingstyle"> Favourite Netflix series in 2021</h1>
    {Sdata.map(ncard)};
    </>
  );
}

export default App;
