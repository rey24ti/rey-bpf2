export default function HelloWorld(){
    const propsUserCard = {
        nama : "Son Goku",
        nim : "2020202020",
        tanggal : "2002/08/08"
    }
    return (
        <div>
            <img src="img/alam.png" width="100%" />
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard 
                nama="Novri" 
                nim="2455301149" 
                tanggal="2004/11/19"/>
            <UserCard {...propsUserCard}/>
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(propsUserCard){
    return (
        <div>
            <hr/>
            <p>Nama: {propsUserCard.nama}</p>
            <p>NIM: {propsUserCard.nim}</p>
            <p>Tanggal: {propsUserCard.tanggal}</p>
        </div>
    )
}