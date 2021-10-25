import './Carrito.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bote from '../basura.jpg';

const Carrito = (props) => {
    return ( 
        <div className="Lista">
          <h4>Mi Carrito</h4>
        {
            props.lista.length===0   
            ? <p>No tienes productos agregados</p>
            : 
             <div>
               <div className="Containers2">
                  <p>Total:${props.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "} </p>
                  <div onClick={()=>props.eliminarCarrito()} ><img src={bote} className="bote" alt="logo" /></div>
               </div>
               
             <Table striped bordered hover style={{verticalAlign: 'middle'}}>
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Importe</th>
                <th></th>
              </tr>
            </thead>
              <tbody >
            {
              props.lista.map((p,index)=> (
                <tr key={index}>
                    <td>{p.cantidad}</td>
                    <td>{p.codigo}</td>
                    <td>{p.descripcion}</td>
                    <td>${p.precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
                    <td>${p.importe.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
                    <td><Button onClick={()=>props.eliminar(p,index)}variant="danger">eliminar</Button></td> 
                </tr>
              ))
            }
              </tbody>
            </Table>
            </div> 
          }
          </div>
     );
}
export default Carrito;