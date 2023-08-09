import "./index.css";

function App(){
 return(
    <>
      <div>
        <Header/>
      </div>
      <div>
        <TopMain/>
      </div>
      <div>
        <Menu/>
      </div>
      <div>
        <Main/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
 )
}

function Header(){
  return(
    <nav className="navbar position-fixed top-0 w-100 z-1 py-3" style={{backgroundColor: '#00880C'}}>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between" style={{ width: '100%', gap: '10px' }}>
          <form role="search" className="d-flex align-items-center form-control rounded-pill">
            <i className="bi bi-search"/>
            <input className="form-control me-5" type="search" placeholder="Cari layanan, makanan, & tujuan"/>
          </form>
          <Button icon="bi bi-person-circle text-white" onClick={() => {}}/>
        </div>
      </div>
    </nav>
  )
}

function TopMain(){
  return(
    <div className="card mx-3 my-4 d-flex flex-row align-items-center margintop" style={{borderRadius: 20, backgroundColor: '#0081A0'}} onClick={()=>{}}>
      <div className="card-body bg-light mx-1 my-1" style={{borderRadius: 20, width: '40%'}} onClick={()=>{}}>
        <div className="d-flex align-items-center">
          <i className="bi bi-coin mx-1"/>
          <h6>gopay coins</h6>
        </div>
        <h6 className="mx-1">0</h6>
        <h6 className="text-success mx-1">Klik buat</h6>
      </div>
      <div className="mx-1 flex-fill text-white text-center">
        <Button icon="bi bi-arrow-up-square-fill" onClick={() => {}}/>
        <h6 className="text-center">Bayar</h6>
      </div>
      <div className="mx-1 flex-fill text-white text-center">
        <Button icon="bi bi-plus-square-fill" onClick={() => {}}/>
        <h6 className="text-center">Top Up</h6>
      </div>
      <div className="mx-1 flex-fill text-white text-center">
        <Button icon="bi bi-airplane-fill" onClick={() => {}}/>
        <h6 className="text-center">Eksplorasi</h6>
      </div>
    </div>
  )
}

function Menu(){
  return(
  <div>
    <div className="d-flex justify-content-around mx-3 my-3">
      <ButtonMenu icon="bi bi-bicycle fs-1" backgroundColor="#98FB98" text="GoRide" onClick={() => {}}/>
      <ButtonMenu icon="bi bi-car-front fs-1" backgroundColor="#98FB98" text="GoCar" onClick={() => {}}/>
      <ButtonMenu icon="bi bi-slash-lg fs-1" backgroundColor="#FFA07A" text="GoFood" onClick={() => {}}/>
      <ButtonMenu icon="bi bi-box-fill fs-1" backgroundColor="#98FB98" text="GoSend" onClick={() => {}}/>
    </div>
    <div className="d-flex justify-content-around mx-3 my-3">
      <ButtonMenu icon="bi bi-basket-fill fs-1" backgroundColor="#FFA07A" text="GoMart" onClick={() => {}}/>
      <ButtonMenu icon="bi bi-clipboard-data-fill fs-1" backgroundColor="#AFEEEE" text="GoTagihan" onClick={() => {}}/>
      <ButtonMenu icon="bi bi-bus-front fs-1" backgroundColor="#98FB98" text="GoTransit" onClick={() => {}}/>
      <ButtonMenu icon="bi bi-grid-fill fs-1" text="Lainnya" onClick={() => {}}/>
    </div>
  </div>
  )
}

function Main(){
 return(
  <div className="marginbottom">
    <div class="card mx-3 my-3 shadow-sm" style={{borderRadius: 20}} onClick={()=>{}}>
      <img src="https://lelogama.go-jek.com/cache/e4/4b/e44b0a81691ed8fb43b4d94c519166b8.webp" class="card-img-top"/>
      <div class="card-body">
        <h5 className="card-title">DIJAMIN BIKIN IRIT</h5>
        <p class="card-text">Pake Mode Hemat GoFood, ongkirnya cuma 5k buat jajan sepuasnya. Cek di sini!.</p>
      </div>
    </div>
    <div class="card mx-3 my-3 shadow-sm" style={{borderRadius: 20}} onClick={()=>{}}>
      <img src="https://lelogama.go-jek.com/cache/c9/10/c9104661d4a0c2f81bc0c597c1106429.webp" class="card-img-top"/>
      <div class="card-body">
        <h5 className="card-title">Diskon 75% kirim pakai GoSend Car!</h5>
        <p class="card-text">Makin irit kirim barang besar, pakai kode GOSENDHEMAT. Klik di sini!.</p>
      </div>
    </div>
    <div class="card mx-3 my-3 shadow-sm" style={{borderRadius: 20}} onClick={()=>{}}>
      <img src="https://lelogama.go-jek.com/cache/9f/08/9f083a8486d116fe3e38725adc66b104.webp" class="card-img-top"/>
      <div class="card-body">
        <h5 className="card-title">Hemat terus tanpa promo</h5>
        <p class="card-text">Udah coba GoCar Hemat belum? Dijamin bikin irit ongkos perjalananmu. Klik.</p>
      </div>
    </div>
  </div>
 )
}

function Footer(){
  return(
    <div className="card position-fixed bottom-0 w-100 z-1">
      <div className="card-body d-flex justify-content-around text-secondary">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <Button icon="bi bi-house-door-fill" onClick={() => {}}/>
          <h6>Beranda</h6>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <Button icon="bi bi-circle-fill" onClick={() => {}}/>
          <h6>Promo</h6>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <Button icon="bi bi-clipboard-data-fill" onClick={() => {}}/>
          <h6>Pesanan</h6>  
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <Button icon="bi bi-chat-square-text-fill" onClick={() => {}}/>
          <h6>Chat</h6>
        </div>
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

export default App;