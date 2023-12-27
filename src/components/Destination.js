import Mountain1 from "../assets/delhi1.jpg";
import Mountain2 from "../assets/delhi2.png";
import Mountain3 from "../assets/pune1.jpg";
import Mountain4 from "../assets/pune2.jpeg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p> Tours give you the opportunity to see a lot, within a time frame.
</p>
    <DestinationData
    
    className = "first-des"
    heading = "Delhi, Capital of India"
    text = "Delhi, city and national capital, and union territory, north-central India. The city of Delhi actually consists of two components: Old Delhi, in the north, the historic city; and New Delhi, in the south, since 1947 the capital of India, built in the first part of the 20th century as the capital of British India.Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people.  "
    img1 = {Mountain1}
    img2 = {Mountain2}
    />

<DestinationData
    
    className = "first-des-reverse"
    heading = "Pune, City of Maharashtra India"
    text = "Pune is a sprawling city in the western Indian state of Maharashtra. It was once the base of the Peshwas (prime ministers) of the Maratha Empire, which lasted from 1674 to 1818. It's known for the grand Aga Khan Palace, built in 1892 and now a memorial to Mahatma Gandhi, whose ashes are preserved in the garden. The 8th-century Pataleshwar Cave Temple is dedicated to the Hindu god Shiva.The city leads as the 'veritable heartland' of cultural Maharashtra. Pune also has made its mark as the educational epicenter winning itself the sobriquet, 'The Oxford of the East'. Not just that, it has a growing industrial hinterland, with information technology, engineering and automotive companies sprouting."
    img1 = {Mountain3}
    img2 = {Mountain4}
    />
    </div>
  );
};

export default Destination;
