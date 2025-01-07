import MyHeader from "../components/header";
import MyMain from "../components/main";
import MyFooter from "../components/footer";
export default function Home() {
  return (
    <div className="min-h-screen">
        <MyHeader/>
        <MyMain/>
        <MyFooter/>
    </div>
  );
}
