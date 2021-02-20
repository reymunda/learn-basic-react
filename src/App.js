import logo from './logo.svg';
import Statefull from './Statefull';
import Stateless from './Stateless';
import DataPegawai from './Props/DataPegawai';
function App() {
  let dataPegawai = [
    {
      name: "Reymunda Dwi A",
      age: "18",
      univ: "Universitas Komputer Indonesia",
      city: "Bandung"
    },
    {
      name: "Json Al-goritmi",
      age: "20",
      univ: "Universitas Indonesia",
      city: "Depok"
    },
    {
      name: "John Doe",
      age: "21",
      univ: "Harvard University",
      city: "New York"
    }
  ]
  return (
    <div>
        {/* <Stateless/>
        <Statefull/> */}
        {
          dataPegawai.map(data => {
            return <DataPegawai name={data.name} age={data.age} univ={data.univ} city={data.city}/>
          })
        }
    </div>
  );
}

export default App;
