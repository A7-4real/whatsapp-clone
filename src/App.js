import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'
import axios from './axios';

function App() {
  useEffect(() => {
    axios.get('/message/sync')
      ,then(Response => {
        console.log()
      })

  }, []);

  useEffect(() => {
    const pusher = new Pusher('9b4dcd277ff1aef743ec', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('insterd', function(data) {
      alert(JSON.stringify(data));
    });
  }, [])

  return (
    <div className="app">
      <div className='app__body'>
      {/* sidebar Component  */}
      <Sidebar />
      
      
      {/* Chat Component */}
      <Chat />
      </div>

    </div>
  );
}

export default App;
