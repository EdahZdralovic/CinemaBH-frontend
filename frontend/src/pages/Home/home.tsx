import MainCard from "../../components/cards/MainCard.tsx";


export default function Home() {
    return (
        <section>
        <div className="items-center">
        <MainCard imageUrl="/assets/images/mock_up_picture.jpg" title="Napoleon" address="Envera Sehovica 9 Sarajevo 71000 Bosna i Herc" />
        </div>
        </section>
    );
}