import react from 'react';
import './DataPegawai.css';
const DataPegawai = (props) => {
    return(
        <div className="card">
            <p><b>Nama:</b> {props.name}</p>
            <p><b>Umur:</b> {props.age}</p>
            <p><b>Almamater:</b> {props.univ}</p>
            <p><b>Asal:</b> {props.city}</p>
        </div>
    )    
}
DataPegawai.defaultProps = {
    name: "Belum Terdapat Nama",
    age : "0",
    univ: "-",
    city: "-"
}
export default DataPegawai;