import bcrypt from 'bcrypt';

const data={
    users:[
        {
            name:'Tarakesh',
            email:'tarakeshpolakolu@gmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:'Lowdaa',
            email:'tarakeshpolaki123@gmail.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false,
        },
    ]
    ,
    products:[
        {
            
            name:'Nike Slim Shirt',
            category:"Shirts",
            image:'/images/p1.jpg',
            price:120,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            countInStock:4,
            description:'high quality product'
        },
        {
           
            name:'Adidas Slim Shirt',
            category:"Shirts",
            image:'/images/p1.jpg',
            price:20,
            brand:'Lowda',
            rating:4,
            numReviews:10,
            countInStock:3,
            description:'lowdaa quality product'
        },
    ],
    sellers:[
        {
            name:'Tarakesh',
            email:'tarakeshpolakolu@gmail.com',
            phone:9090192019,
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,
            address:"gachibowli",
        },
        // {
        //     name:'abhi',
        //     email:'abhi@gmail.com',
        //     phone:9820934892,
        //     password:bcrypt.hashSync('1234',8),
        //     isAdmin:false,
        //     address:"lbnagar",
        // },
    ]
}
export default data;