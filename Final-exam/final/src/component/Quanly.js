
import NavBarComponent from "./navBar";
import { useState } from "react";
import Tablee from './Tablee';



export default function Managee() {
    let [ todo, setTodo] = useState([
        { name: "Tiền ăn", price: 100 },
       
    ]);
    


    const addTodo = () => {
        let currentName = document.getElementById('exampleName').value;
        let currentPrice = document.getElementById('examplePrice').value;
        setTodo([...todo, {  name: currentName, price: currentPrice }]);
        document.getElementById("exampleName").value= "";
        document.getElementById("examplePrice").value= "";
    }
    const removeTodo = () => {
        document.getElementById('delete').parentElement.parentElement.remove();
    }
 

    return (

        <div>
            <div class="text-warning">
                <NavBarComponent content="Quản lý tài chính cá nhân " img="https://www.w3schools.com/bootstrap4/img_avatar3.png" ></NavBarComponent>
            </div>
            <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD</button>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content container">
                        <div class="modal-header">
                            <h5 class="modal-title container" id="exampleModalLabel">Thêm khoản chi</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInput" class="form-label">Chi tiêu mới</label>
                            <input type="text" class="form-control" id="exampleName"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInput" class="form-label">Số tiền</label>
                            <input type="text" class="form-control" id="examplePrice"></input>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={addTodo}  >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                {
                    todo.map(( currentValue, index) => (
                        <Tablee key={index}
                        title="khoản chi cá nhân"
                         name ={currentValue.name}
                         price={currentValue.price}
                         delete={removeTodo}
                        >
                        </Tablee>
                    ))
                }
            </div>

        </div>

    );
}



