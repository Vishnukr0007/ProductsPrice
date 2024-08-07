import Items from './components/Items';
import './App.css';

const products=[{
  img:"https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
  h3:"Cyxus",
  p:"Browse through the icons below to find the one you need.",
  h2:"$56"
},{
  img:"https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
  h3:"Cyxus",
  p:"Browse through the icons below to find the one you need.",
  h2:"$56"
},{
  img:"https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU=",
  h3:"Cyxus",
  p:"Browse through the icons below to find the one you need.",
  h2:"$56"
}
]

function App() {
  return (
    <div className="App">
    <h1>PRODUCTS</h1>
 <div className='flex'>
 {products.map((value )=>(

<Items h3={value.h3}image={value.img} p={value.p} h2={value.h2} />
)
  
)}
 </div>
    </div>
  );
}


export default App;
