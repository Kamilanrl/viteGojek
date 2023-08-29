import "../index.css";
import { Link } from "react-router-dom";

function Promo() {
    return(
      <>
        <div>
          <HeaderPromo/>
        </div>
        <div>
          <TopMainPromo/>
        </div>
        <div>
          <MainPromo/>
        </div>
        <div>
          <FooterPromo/>
        </div>
      </>  
    )
}

function HeaderPromo() {
    return(
      <div className="navbar border position-fixed top-0 w-100 z-1 bg-light">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold fs-1">Promo</span>
        </div>
      </div>
    )
}

function TopMainPromo(){
  return(
    <div className="margintop mx-3 my-3">
      <div className="card shadow-sm" style={{borderRadius: 20}}>
        <div className="card-body d-flex flex-row justify-content-between">
          <div>
            <i className="bi bi-circle-fill mx-2"/>
            <h7>101 XP lagi jadi Bos</h7>
          </div>
          <i className="bi bi-chevron-right"/>
        </div>
        <div className="progress mx-5 mb-3" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar bg-success" style={{ width: "25%" }}/>
        </div>
      </div>
    </div>
  )
}

function MainPromo() {
  return(
    <div className="marginbottom mx-3 my-3">
      <div className="d-flex col justify-content-around">
        <div className="card" style={{borderRadius: 20}}>
          <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <h4>0</h4>
              <i className="bi bi-chevron-right"/>
            </div>
            <h5>Vouchers</h5>
            <span>Lagi cari</span>
            <div class="progress mt-2" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-warning" style={{width: "100%"}}></div>
            </div>
          </div>
        </div>
        <div className="card" style={{borderRadius: 20}}>
          <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <h4>0</h4>
              <i className="bi bi-chevron-right"/>
            </div>
            <h5>Langganan</h5>
            <span>Lagi aktif</span>
            <div class="progress mt-2" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-danger" style={{width: "100%"}}></div>
            </div>
          </div>
        </div>
        <div className="card" style={{borderRadius: 20}}>
          <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <h4>0</h4>
              <i className="bi bi-chevron-right"/>
            </div>
            <h5>Missions</h5>
            <span>Lagi berjalan</span>
            <div class="progress mt-2" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-info" style={{width: "100%"}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card rounded-pill my-3">
        <div className="card-body d-flex flex-row justify-content-between">
          <div>
            <i className= "bi bi-circle-fill mx-2"/>
            <h7>Masukkan kode promo</h7>
          </div>
          <i className="bi bi-chevron-right"/>
        </div>
      </div>
      <div>
        <h4 className="my-3">Promo menarik buat kamu</h4>
      </div>
      <div className="d-flex col my-2 overflow-x-auto w-100">
        <div className="card rounded-pill w-25 align-items-center">
          <div className="card-body">
            <span>Apa aja</span>
          </div>
        </div>
        <div className="card rounded-pill w-25 align-items-center">
          <div className="card-body">
            <span>GoCar</span>
          </div>
        </div>
        <div className="card rounded-pill w-25 align-items-center">
          <div className="card-body">
            <span>GoFood</span>
          </div>
        </div>
        <div className="card rounded-pill w-25 align-items-center">
          <div className="card-body">
            <span>GoPay</span>
          </div>
        </div>
        <div className="card rounded-pill w-25 align-items-center">
          <div className="card-body">
            <span>GoRide</span>
          </div>
        </div>
        <div className="card rounded-pill w-25 align-items-center">
          <div className="card-body">
            <span>Others</span>
          </div>
        </div>  
      </div>
      <div class="card my-3 shadow-sm" style={{borderRadius: 20}} onClick={()=>{}}>
        <img src="https://lelogama.go-jek.com/cache/e4/4b/e44b0a81691ed8fb43b4d94c519166b8.webp" class="card-img-top"/>
        <div class="card-body">
          <h5 className="card-title">DIJAMIN BIKIN IRIT</h5>
          <p class="card-text">Pake Mode Hemat GoFood, ongkirnya cuma 5k buat jajan sepuasnya. Cek di sini!.</p>
        </div>
      </div>
      <div class="card my-3 shadow-sm" style={{borderRadius: 20}} onClick={()=>{}}>
        <img src="https://lelogama.go-jek.com/cache/c9/10/c9104661d4a0c2f81bc0c597c1106429.webp" class="card-img-top"/>
        <div class="card-body">
          <h5 className="card-title">Diskon 75% kirim pakai GoSend Car!</h5>
          <p class="card-text">Makin irit kirim barang besar, pakai kode GOSENDHEMAT. Klik di sini!.</p>
        </div>
      </div>
    </div>
  )
}

function FooterPromo(){
  return(
    <div className="card position-fixed bottom-0 w-100 z-1">
      <div className="card-body d-flex justify-content-around">
      <Link to='/' className="d-flex flex-column justify-content-center align-items-center text-center text-secondary text-decoration-none">
          <Button icon="bi bi-house-door-fill" onClick={() => {}}/>
          <h6>Beranda</h6>
        </Link>
        <Link to="/Promo" className="d-flex flex-column justify-content-center align-items-center text-center text-secondary text-decoration-none">
          <Button icon="bi bi-circle-fill" onClick={() => {}}/>
          <h6>Promo</h6>
        </Link>
        <Link to='/Pesanan' className="d-flex flex-column justify-content-center align-items-center text-center text-secondary text-decoration-none">
          <Button icon="bi bi-clipboard-data-fill" onClick={() => {}}/>
          <h6>Pesanan</h6>  
        </Link>
        <Link to='/Chat' className="d-flex flex-column justify-content-center align-items-center text-center text-secondary text-decoration-none">
          <Button icon="bi bi-chat-square-text-fill" onClick={() => {}}/>
          <h6>Chat</h6>
        </Link>
      </div>
    </div>
  )
}

function Button(props){
  return(
    <div className="fs-1" onClick={props.onClick}>
      <i className={props.icon}/>
    </div>
  )
}

export default Promo;
