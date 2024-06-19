import Balanced from "./Balanced";
import Banner from "./Banner";
import Choose from "./Choose";
import Free from "./Free";
import PUBlishers from "./PUBlishers";
import Top from "./Top";
import Users from "./Users";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <PUBlishers></PUBlishers>
            <Choose></Choose>
            <Users></Users>
            <Balanced></Balanced>
            <Top></Top>
            <Free></Free>
            
        </div>
    );
};

export default Home;