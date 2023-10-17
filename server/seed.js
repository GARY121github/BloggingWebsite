const mongoose = require('mongoose');
const Blog = require('./models/Blog');

// DATABASE
mongoose.connect('mongodb://127.0.0.1:27017/Blogging-website')
    .then(console.log("DB CONNECTED!!!"))
    .catch((err) => console.log(err.message));

const dummyData = [
    {
        title: "The Benefits of Meditation",
        description: "Explore the science-backed benefits of meditation. Discover how regular meditation practice can help reduce stress, improve focus, enhance emotional well-being, and even boost your overall health. Learn how dedicating just a few minutes a day to mindfulness can transform your life.",
        image: "https://images.unsplash.com/photo-1610295399810-4964d7fdc693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Healthy Eating: A Beginner's Guide",
        description: "Embark on a journey to a healthier you with our comprehensive beginner's guide to healthy eating. Delve into the world of nutritious food choices, portion control, and meal planning. Learn how to make sustainable changes that promote well-being and longevity.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGVhbHRoeSUyMEVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Traveling on a Budget: Tips and Tricks",
        description: "Satisfy your wanderlust without emptying your wallet! Dive into a treasure trove of budget-friendly travel tips, from finding affordable accommodations to saving money on transportation and enjoying delicious, wallet-friendly meals. Make your dream vacations a reality without breaking the bank.",
        image: "https://images.unsplash.com/photo-1506353219544-65860ffc5f41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRyYXZlbGluZyUyMG9uJTIwYSUyMEJ1ZGdldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "The Art of Productivity: Time Management Tips",
        description: "Unleash your full potential by mastering the art of productivity. Discover effective time management strategies that will help you prioritize tasks, set and achieve your goals, and overcome the lure of procrastination. Transform yourself into a highly efficient and productive individual.",
        image: "https://plus.unsplash.com/premium_photo-1682310140123-d479f37e2c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhlJTIwQXJ0JTIwb2YlMjBQcm9kdWN0aXZpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "DIY Home Decor: Creative Ideas for Every Room",
        description: "Elevate your living spaces with a touch of your personality! Our DIY home decor guide is your ticket to transforming your home with creativity. Explore stylish furniture hacks, easy-to-make wall art, and other personalized decor ideas that will make your home truly unique.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RElZJTIwSG9tZSUyMERlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Exploring the Wonders of Underwater Photography",
        description: "Dive into the mesmerizing world of underwater photography. Learn about the essential equipment, techniques, and tips that will enable you to capture breathtaking images of marine life. Embark on an adventure that combines your love for photography with the beauty of the underwater world.",
        image: "https://images.unsplash.com/photo-1502726299822-6f583f972e02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXhwbG9yaW5nJTIwdGhlJTIwV29uZGVycyUyMG9mJTIwVW5kZXJ3YXRlciUyMFBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Mastering the Art of Grilling: BBQ Tips and Recipes",
        description: "Ignite your passion for grilling! This blog is a treasure trove of BBQ tips, mouthwatering recipes, and grilling techniques that will make you a barbecue expert. Impress your friends and family with delectable dishes that leave them craving for more.",
        image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RXhwbG9yaW5nJTIwdGhlJTIwV29uZGVycyUyMG9mJTIwVW5kZXJ3YXRlciUyMFBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "The Power of Mindfulness: Living in the Present",
        description: "Discover the transformation power of mindfulness in this in-depth exploration. Reduce stress and anxiety with mindfulness techniques that keep you rooted in the present moment. Learn how to cultivate a more peaceful, fulfilling life by embracing mindfulness as a way of living.",
        image: "https://plus.unsplash.com/premium_photo-1682097476353-5dd9c79451a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        title: "Tech Trends: What's Next in Gadgets and Gizmos",
        description: "Stay ahead of the technology curve by exploring the latest tech trends. Dive into the world of upcoming gadgets, innovations, and technological breakthroughs. Understand how these advancements are shaping the future of our society and daily lives.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGVjaCUyMFRyZW5kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "Green Living: Eco-Friendly Habits for a Sustainable Future",
        description: "Join the global movement for a greener, more sustainable planet! Explore a wide range of eco-friendly habits and practices, from reducing waste to conserving energy and adopting environmentally responsible choices. Contribute to a brighter and more sustainable future for all.",
        image: "https://images.unsplash.com/photo-1623005366105-b25ab78df21e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdyZWVuJTIwTGl2aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
];

// Blog.insertMany(dummyData)
//     .then("DB SEEDED")
//     .catch((err) => console.log(err.message));

const addDummyData = async (req, res) => {
    await Blog.deleteMany();
    await Blog.insertMany(dummyData);
    console.log("DB SEEDED!!!");
};

addDummyData();