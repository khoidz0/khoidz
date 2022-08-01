import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImage from '../picture/anhdep.jpg';
function Cardd() {
  return (
    <div class="container d-flex justify-content-center align-items-center">

      <div class="card">
        <div class="upper">
          <img src={BackgroundImage} class="img-fluid"></img>
          <div class="profile text-center">
            <img src={BackgroundImage} class="rounded-circle position-absolute translate-middle start-50" width="80" style={{ zIndex: 1}}></img>
          </div>
        </div>
        <div class="mt-5 text-center">
          <h4 class="mb-0">quang </h4>
          <span class="text-muted d-block mb-2">Đừng làm phiền</span>
          <button class="btn btn-primary btn-sm follow">Follow</button>
        </div>

      </div>

    </div>
  );
}
export default Cardd;