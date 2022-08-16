export default function Tablee(props) {
    return (
        <div class="card col-md-6 container">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">Tên khoản chi : {props.name}</p>
          <p class="card-text">Số tiền :{props.price} </p>
         <button class="btn btn-primary" type="button" id="delete" onClick={props.delete}>Delete</button>
         <button class="btn btn-primary" type="button" onClick={props.edit}>Edit</button>
        </div>
      </div>
    )
}