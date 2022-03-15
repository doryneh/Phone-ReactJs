import './App.css';
import Phone from'./Components/Phone';
import 'jquery/dist/jquery.js'
import '@popperjs/core/dist/umd/popper'
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css'
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/js/all.js'

function App() {
  return (
    <div className="App">
     <Phone />
    </div>
  );
}

export default App;
