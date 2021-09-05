const LandingSection = (props) => {
    return (
     
      <div
        class="p-5 text-center bg-image rounded-3"
        style={{backgroundImage:"url('https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",  height: "90vh"}}
       
      >
        <div class="mask" style={{backgroundColor:" rgba(0, 0, 0, 0.6);"}}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3 text-black">Kick Start Your Career In Tech.</h1>
              <h4 class="mb-3 text-black">Outbox EDU leverages boot camps<br/> to train individuals with limited or no experience in software development.</h4>
              <a class="btn  btn-lg btn-rounded" href="#!" role="button" style={{ backgroundColor: "#0072A1", color: "white"}}>try edu for free</a>
            </div>
          </div>
        </div>
      </div>
     
    );
  };
  
  export default LandingSection;