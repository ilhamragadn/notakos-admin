import Card from "../components/Card";
import Line from "../components/Line";
import RouteBar from "../components/RouteBar";
import SideNav from "../components/SideNav";

const Dashboard = () => {
  return (
    <>
      <SideNav />
      <div className="p-4 sm:ml-64">
        <RouteBar title="Selamat Datang Admin NOTAKOS!" />
        <Line />
        <Card
          title="Morbi eu est eu ante interdum rhoncus ut eu erat"
          content="Curabitur efficitur sem turpis, at viverra tortor ultrices sit amet. Cras sed scelerisque velit. Donec volutpat ultrices metus. Sed imperdiet sed libero nec tincidunt. Donec et sapien eu tortor hendrerit ultricies. Nulla posuere ultricies metus at lobortis."
        ></Card>
      </div>
    </>
  );
};

export default Dashboard;
