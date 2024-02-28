import Contact from './assets/Contact';
import Counter from './assets/Contact';
import Hello from './assets/Hello';

function App() {
    const helloData = [
        { name: 'Kanruethai', message: 'Hi there'},
        { name: 'Tom', message: 'Hello...'}
    ];

    return (
        <div className='App'>
            < Counter />
            {helloData.map((data, index) => (
                <Hello key={index} name={data.name} message={data.message} />
            ))}

            <Contact email="Kanruethai@gmail.com" phone="0918218729" />
        </div>
    )
}

export default App;