import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Other elements can go here */}
      <div id="detail">
        <Outlet />
      </div>

      <footer className="footer bg-green-500 text-blue-600-700 py-8 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h6 className="text-lg font-bold mb-2">ACME Fast Foods Ltd.</h6>
            <p>Serving deliciousness since 2024</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <nav className="flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-500">Menu</a>
              <a href="#" className="hover:text-blue-500">Locations</a>
              <a href="#" className="hover:text-blue-500">Contact</a>
            </nav>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <nav className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.youtube.com/watch?v=xdlLIw3YMBM" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
             </svg>
          </a>
             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
             <path d="M12 2.078c2.452 0 2.734.011 3.703.054 1.185.051 1.933.235 2.426.395.611.214 1.055.477 1.523.945.468.468.73.912.945 1.523.16.493.344 1.24.395 2.426.043.969.054 1.251.054 3.703s-.011 2.734-.054 3.703c-.051 1.185-.235 1.933-.395 2.426-.214.611-.477 1.055-.945 1.523-.468.468-.912.73-1.523.945-.493.16-1.24.344-2.426.395-.969.043-1.251.054-3.703.054s-2.734-.011-3.703-.054c-1.185-.051-1.933-.235-2.426-.395-.611-.214-1.055-.477-1.523-.945-.468-.468-.73-.912-.945-1.523-.16-.493-.344-1.24-.395-2.426-.043-.969-.054-1.251-.054-3.703s.011-2.734.054-3.703c.051-1.185.235-1.933.395-2.426.214-.611.477-1.055.945-1.523.468-.468.912-.73 1.523-.945.493-.16 1.24-.344 2.426-.395.969-.043 1.251-.054 3.703-.054zm0-2.078c-2.452 0-2.734.011-3.703.054-1.982.086-3.14.463-4.24.963-1.259.574-2.288 1.303-3.303 2.318-1.015 1.015-1.744 2.044-2.318 3.303-.5 1.1-.877 2.258-.963 4.24-.043.969-.054 1.251-.054 3.703s.011 2.734.054 3.703c.086 1.982.463 3.14.963 4.24.574 1.259 1.303 2.288 2.318 3.303 1.015 1.015 2.044 1.744 3.303 2.318 1.1.5 2.258.877 4.24.963.969.043 1.251.054 3.703.054s2.734-.011 3.703-.054c1.982-.086 3.14-.463 4.24-.963 1.259-.574 2.288-1.303 3.303-2.318 1.015-1.015 1.744-2.044 2.318-3.303.5-1.1.877-2.258.963-4.24.043-.969.054-1.251.054-3.703s-.011-2.734-.054-3.703c-.086-1.982-.463-3.14-.963-4.24-.574-1.259-1.303-2.288-2.318-3.303-1.015-1.015-2.044-1.744-3.303-2.318-1.1-.5-2.258-.877-4.24-.963-.969-.043-1.251-.054-3.703-.054z"/>
             <path d="M12 15.385c-1.944 0-3.513-1.569-3.513-3.513s1.569-3.513 3.513-3.513 3.513 1.569 3.513 3.513-1.569 3.513-3.513 3.513zm0-5.926c-1.46 0-2.642 1.182-2.642 2.642s1.182 2.642 2.642 2.642 2.642-1.182 2.642-2.642-1.182-2.642-2.642-2.642z"/>
             <circle cx="16.601" cy="7.399" r="0.999"/>
             </svg>
         </a>

           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
           <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
           </svg>
         </a>
         <a href="https://web.telegram.org/a/#-1001574039788" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
         <svg xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qXoVI1hmX2che0LX1N2zH83S12sTBEyNag&s" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
         <path d="M13.516 7.168l-8.332 8.563c-.229.235-.33.582-.279.91.051.328.237.626.521.841.283.214.633.325.994.325.128 0 .256-.015.383-.045.347-.082 6.765-2.596 9.67-3.715.47-.168.907-.411 1.296-.7.445-.328.846-.707 1.197-1.132.337-.434.618-.917.834-1.439.101-.258.056-.548-.125-.76l-1.844-2.264c-.195-.24-.496-.37-.813-.37-.108 0-.22.018-.33.054-.275.082-6.823 2.558-9.615 3.624-.208.074-.417.11-.628.11-.445 0-.886-.175-1.213-.503-.31-.318-.485-.746-.497-1.193-.012-.447.153-.875.46-1.196l1.922-2.527c.253-.33.653-.542 1.092-.542.127 0 .256.018.383.054.372.11 9.38 2.99 9.75 3.087.195.075.41.112.627.112.474 0 .94-.197 1.283-.543.703-.682.832-1.845.263-2.663l-8.213-10.085zm7.355 12.832c-.285.29-.668.449-1.067.449-.138 0-.275-.023-.41-.07-.445-.147-10.998-3.593-11.35-3.707-.195-.075-.41-.112-.627-.112-.474 0-.94.197-1.283.543-.352.352-.54.818-.54 1.314 0 .132.018.263.054.393.1.356 2.45 3.03 2.576 3.186.229.276.533.425.846.425.107 0 .214-.018.32-.054.413-.147 10.939-3.602 11.365-3.742.208-.075.417-.112.628-.112.474 0 .94.197 1.283.543.352.352.54.818.54 1.314 0 .133-.018.263-.054.393-.1.356-2.45 3.03-2.576 3.186z"/>
         </svg>
       </a>
      <a href="https://wa.me/phoneNumber" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
         <path d="M12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm5.422 15.328c-.136.384-.802.72-1.402.826-.6.106-3.348-.725-3.78-.805-.432-.081-.772-.22-1.103-.503-.331-.283-.698-.969-.814-1.115-.115-.146-.242-.165-.428-.085-.185.081-.805.274-1.231.318-.426.043-.819.061-1.175-.139-.356-.2-.819-.643-.963-1.08-.144-.437-.259-1.069-.123-1.682.136-.613.6-1.288.964-1.792.364-.504.72-.67 1.091-.722.372-.053.728-.053 1.135.131.407.184.793.524 1.161.892.368.368.672.817.856 1.226.184.409.261.76.314 1.135.053.374.053.746-.083 1.13-.136.384-.407.867-.78 1.251-.374.384-.787.76-.906 1.184-.119.424-.17.909-.034 1.293.136.384.822 1.072 1.206 1.437.385.365.853.694 1.237.558.384-.136.853-.453 1.189-.838.336-.385.521-.855.658-1.239.136-.384.211-.728.075-1.113zm-3.647-12.728c.025.013.022.039.048.055.354.204.675.469.972.776.098.107.22.202.301.33.062.1.071.217.1.328.027.11.063.219.082.332.025.136-.018.287-.12.378-.253.222-.493.454-.73.69-.138.139-.285.28-.432.416-.17.158-.346.309-.528.453-.188.145-.367.3-.537.462-.186.175-.378.332-.558.508-.198.193-.365.416-.557.615-.167.175-.344.339-.523.497-.127.114-.26.219-.398.318-.283.199-.583.359-.895.469-.292.101-.588.16-.886.217-.293.056-.59.086-.891.056-.301-.031-.585-.107-.856-.231-.271-.123-.533-.278-.779-.456-.233-.168-.445-.366-.639-.578-.191-.207-.364-.429-.515-.663-.155-.245-.285-.504-.398-.773-.115-.274-.204-.56-.297-.843-.101-.34-.171-.692-.238-1.042-.061-.335-.065-.674-.045-1.012.021-.366.1-.726.244-1.07.145-.344.362-.659.606-.945.244-.286.537-.537.875-.742.338-.206.73-.376 1.134-.454.405-.079.82-.103 1.236-.078.412.025.816.125 1.208.272.393.147.77.338 1.14.532.358.188.707.394 1.054.601.346.207.678.438.995.683.318.245.619.513.904.796.284.282.551.577.805.879.251.3.49.613.722.931.233.317.448.648.656.982.206.33.394.67.564 1.018.169.347.326.7.464 1.058.15.408.256.827.331 1.252z"/>
         </svg>
      </a>
          <a href="https://uzumbank.uz/ru" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <svg xmlns="data:image/png;base64,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" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
         <path d="M12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm5.422 15.328c-.136.384-.802.72-1.402.826-.6.106-3.348-.725-3.78-.805-.432-.081-.772-.22-1.103-.503-.331-.283-.698-.969-.814-1.115-.115-.146-.242-.165-.428-.085-.185.081-.805.274-1.231.318-.426.043-.819.061-1.175-.139-.356-.2-.819-.643-.963-1.08-.144-.437-.259-1.069-.123-1.682.136-.613.6-1.288.964-1.792.364-.504.72-.67 1.091-.722.372-.053.728-.053 1.135.131.407.184.793.524 1.161.892.368.368.672.817.856 1.226.184.409.261.76.314 1.135.053.374.053.746-.083 1.13-.136.384-.407.867-.78 1.251-.374.384-.787.76-.906 1.184-.119.424-.17.909-.034 1.293.136.384.822 1.072 1.206 1.437.385.365.853.694 1.237.558.384-.136.853-.453 1.189-.838.336-.385.521-.855.658-1.239.136-.384.211-.728.075-1.113zm-3.647-12.728c.025.013.022.039.048.055.354.204.675.469.972.776.098.107.22.202.301.33.062.1.071.217.1.328.027.11.063.219.082.332.025.136-.018.287-.12.378-.253.222-.493.454-.73.69-.138.139-.285.28-.432.416-.17.158-.346.309-.528.453-.188.145-.367.3-.537.462-.186.175-.378.332-.558.508-.198.193-.365.416-.557.615-.167.175-.344.339-.523.497-.127.114-.26.219-.398.318-.283.199-.583.359-.895.469-.292.101-.588.16-.886.217-.293.056-.59.086-.891.056-.301-.031-.585-.107-.856-.231-.271-.123-.533-.278-.779-.456-.233-.168-.445-.366-.639-.578-.191-.207-.364-.429-.515-.663-.155-.245-.285-.504-.398-.773-.115-.274-.204-.56-.297-.843-.101-.34-.171-.692-.238-1.042-.061-.335-.065-.674-.045-1.012.021-.366.1-.726.244-1.07.145-.344.362-.659.606-.945.244-.286.537-.537.875-.742.338-.206.73-.376 1.134-.454.405-.079.82-.103 1.236-.078.412.025.816.125 1.208.272.393.147.77.338 1.14.532.358.188.707.394 1.054.601.346.207.678.438.995.683.318.245.619.513.904.796.284.282.551.577.805.879.251.3.49.613.722.931.233.317.448.648.656.982.206.33.394.67.564 1.018.169.347.326.7.464 1.058.15.408.256.827.331 1.252z"/>
         </svg>
          </a>




            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
