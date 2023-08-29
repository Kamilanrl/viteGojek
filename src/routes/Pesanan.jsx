import { Link } from "react-router-dom";
 
 function Pesanan() {
    return(
      <>
        <div>
          <HeaderPesanan/>
        </div>
        <div>
          <MainPesanan/>
        </div>
        <div>
          <FooterPesanan/>
        </div>
      </>
    )
}

function HeaderPesanan() {
  return(
    <div className="navbar position-fixed top-0 w-100 z-1 bg-light">
      <div className="container-fluid">
        <div className="d-flex border-bottom justify-content-between w-100 align-items-center">
          <span className="navbar-brand fw-bold fs-1">Pesanan</span>
          <Button icon="bi bi-save-fill" onClick={() => {}}/>
        </div>
      </div>
      <div className="d-flex row">
        <div className="d-flex col justify-content-around my-2">
          <h5>Riwayat</h5>
          <h5>Dalam proses</h5>
          <h5>Terjadwal</h5>
        </div>
        <div className="d-flex col justify-content-around my-2">
          <div className="card rounded-pill">
            <div className="card-body">
              <span>GoRide</span>
            </div>
          </div>
          <div className="card rounded-pill">
            <div className="card-body">
              <span>GoCar</span>
            </div>
          </div>
          <div className="card rounded-pill">
            <div className="card-body d-flex flex-row">
              <span>Status</span>
              <i className="bi bi-chevron-right"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MainPesanan(){
  return(
    <div className="marginbottom mx-3" style={{ marginTop: "200px" }}>
      <div className="card rounded-pill">
        <div className="card-body d-flex flex-row justify-content-between">
          <div>
            <i className="bi bi-wallet2 mx-2"/>
            <span>Transaksi GoPay</span>
          </div>
          <i className="bi bi-chevron-right"/>
        </div>
      </div>
      <div className="my-3 align-items-center">
        <div className="d-flex">
          <ButtonMenu icon="bi bi-bicycle fs-1" backgroundColor="#98FB98" onClick={() => {}}/>
          <div className="text-nowrap overflow-hidden mx-2" style={{ textOverflow: "ellipsis" }}>
            <h4 className="fw-bold">SMK Negeri 10 Jakarta</h4>
            <h5>Sudah sampai tujuan</h5>
            <p>25 Agu 05:28</p>
          </div>
          <p>Rp21.000</p>
        </div>
      </div>
      <div className="my-3 align-items-center">
        <div className="d-flex">
          <ButtonMenu icon="bi bi-bicycle fs-1" backgroundColor="#98FB98" onClick={() => {}}/>
          <div className="text-nowrap overflow-hidden mx-2" style={{ textOverflow: "ellipsis" }}>
            <h4 className="fw-bold">SMK Negeri 10 Jakarta</h4>
            <h5>Sudah sampai tujuan</h5>
            <p>04 Agu 05:53</p>
          </div>
          <p>Rp21.000</p>
        </div>
      </div>
      <div className="my-3 align-items-center">
        <div className="d-flex">
          <ButtonMenu icon="bi bi-bicycle fs-1" backgroundColor="#98FB98" onClick={() => {}}/>
          <div className="text-nowrap overflow-hidden mx-2" style={{ textOverflow: "ellipsis" }}>
            <h4 className="fw-bold">SMK Negeri 10 Jakarta</h4>
            <h5>Sudah sampai tujuan</h5>
            <p>02 Agu 05:37</p>
          </div>
          <p>Rp21.000</p>
        </div>
      </div>
    </div>
  )
}

function FooterPesanan(){
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

function ButtonMenu(props){
  return(
    <div>
      <div className="card w-100" style={{borderRadius: 20, backgroundColor: props.backgroundColor}} onClick={props.onClick}>
        <div className="card-body">
          <i className={props.icon}/>
        </div>
      </div>
      <h6 className="text-center">{props.text}</h6>
    </div>
  )
}

export default Pesanan;