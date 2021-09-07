const LandingSection = (props) => {
    return (
     
      <div
        class="p-5 text-center bg-image rounded-3"
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1591389703635-e15a07b842d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80')",  height: "80vh"}}
       
      >
       <div class="mask" style={{backgroundColor:" rgba(0, 0, 0, 0.6)"}}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3">Your Property Secured on a BlockChain</h1>
              <h4 class="mb-3">Simple. Secure. Safe.</h4>
              <p class="mb-3">We leverage BlockChain Technology to decentralize land ownership to overcome fraud and ease transfer of properties of one owner to another.</p>
              <a class="btn  btn-danger btn-lg btn-rounded" href="#!" role="button" >get Started</a>
            </div>
          </div>
        </div>
      </div>
     
    );
  };
  
  export default LandingSection;