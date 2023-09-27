

const users = [
    {
        id: "20230924",
        email: "nabil@mail.com",
        password: "password",
        name: "Nabil kms",
        phone: "+4 (142) 111-2551"
    },
    {
        id: "20230925",
        name: "John Doe",
        phone: "+1 (555) 123-4567"
    },
    {
        id: "20230926",
        name: "Sarah Smith",
        phone: "+1 (555) 987-6543"
    },
    {
        id: "20230927",
        name: "David Johnson",
        phone: "+1 (555) 555-5555"
    }
]

const ads = [
    {
        id: "1",
        title: "Spacious 3-Bedroom Family Home",
        description: "Beautiful 3-bedroom, 2-bathroom home in a quiet neighborhood. Close to schools and parks.",
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
        ownerId: "20230924",
        category: "real estate"
    },
    {
        id: "2",
        title: "Brand New iPhone 13 Pro Max",
        description: "Get the latest iPhone with a stunning Super Retina XDR display and powerful A15 Bionic chip.",
        image: "https://images.hindustantimes.com/tech/img/2021/12/23/960x540/iPhone_13_Pro_Max_(8)_1632473179867_1640239722902.jpg",
        ownerId: "20230924",
        category: "smartphones"
    },
    {
        id: "3",
        title: "Software Developer Wanted",
        description: "Join our dynamic team! We're looking for an experienced software developer.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbGDB0vtk8nl5To9w5BmHq__UqJ9ZIN3ICA&usqp=CAU",
        ownerId: "20230924",
        category: "jobs"
    },
    {
        id: "4",
        title: "Mountain Biking Adventure",
        description: "Explore scenic trails on a mountain biking adventure. All skill levels welcome!",
        image: "https://www.snowbasin.com/images/uploads/events/_full/Bike_Race.jpg",
        ownerId: "20230924",
        category: "Events"
    },
    {
        id: "5",
        title: "Vintage Guitar for Sale",
        description: "Rare vintage guitar in excellent condition. Perfect for collectors and musicians.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRny55pQH7MXx8wRb8lqEeMXCH1hGwyShhWgA&usqp=CAU",
        ownerId: "20230925",
        category: "old gadgets"
    },
    {
        id: "6",
        title: "Graphic Designer Freelancer",
        description: "Need creative design work? I'm a freelance graphic designer with years of experience.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZbWq1AlGiIdHoRpLwlR6LjXT6MtlPHkvqDZIEXs9ww5jLnZZqqqGKtQpnu5n9L2AxGY&usqp=CAU",
        ownerId: "20230925",
        category: "jobs"
    },
    {
        id: "7",
        title: "Tropical Vacation Getaway",
        description: "Escape to paradise with this all-inclusive tropical vacation package.",
        image: "https://media.istockphoto.com/id/672425798/photo/couple-in-loungers-on-beach-at-maldives.jpg?s=612x612&w=0&k=20&c=EtdtcJ6qsCiEmPB0IUsNfefSArqe7J3MBDGwEqt_WA8=",
        ownerId: "20230926",
        category: "promotions"
    },
    {
        id: "8",
        title: "Fitness Trainer Services",
        description: "Achieve your fitness goals with personalized training sessions. Certified trainer.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWUasnMvdeBennLjMRST5OG7dTvVcl1HpQGmc2FwQMmf97jUvu-FGUoQF3TIKLGaOBqs&usqp=CAU",
        ownerId: "20230926",
        category: "fitness"
    },
    {
        id: "9",
        title: "Artisan Handcrafted Jewelry",
        description: "Unique and beautiful handcrafted jewelry pieces. Perfect for special occasions.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWk_--pjdaG-EQVfKQAgnQwlRjZvNBScSslg&usqp=CAU",
        ownerId: "20230927",
        category: "jewlery"
    },
    {
        id: "10",
        title: "Vintage Vinyl Records Sale",
        description: "Browse a wide selection of vintage vinyl records. Perfect for music enthusiasts.",
        image: "https://m.media-amazon.com/images/I/71qqo0KgMOL._AC_UF894,1000_QL80_.jpg",
        ownerId: "20230927",
        category: "old gadgets"
    },
];


const categories = [
    { id: 1, title: "old gadgets" },
    { id: 2, title: "jewlery" },
    { id: 3, title: "fitness" },
    { id: 4, title: "promotions" },
    { id: 5, title: "jobs" },
    { id: 6, title: "Events" },
    { id: 7, title: "Smartphones" }
]

module.exports = { ads, users, categories }